import { useCallback, useEffect, useState, useRef } from "react";
import supabase from "../../../supabase/supabase-client";
import { useMessageStore } from "../../../App";
import { useContext } from "react";
import SessionContext from "../../../Context/SessionContext";

import Loader from "../../Loader";
import UserMsgStart from "./UserMsgStart";
import UserMsgEnd from "./UserMsgEnd";

function MessageBox({game}){

    const [messages, setMessages] = useState([]);
    const [loadingInitial, setLoadingInitial] = useState(false);
    const setMessage = useMessageStore((state) => state.setMessage);
    const {session} = useContext(SessionContext);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    
    const getInitialMessages = useCallback(async () => {
        setLoadingInitial(true);
        const { data: messages, error } = await supabase
            .from("messages")
            .select()
            .eq("game_id", game.id)
            .order("updated_at", { ascending: true });
        if (error) {
            setMessage(error.message);
            return
        }
        setLoadingInitial(false);
        setMessages(messages);
    }, [game?.id])

    useEffect(() => {
        if (game){
            getInitialMessages();
        }
        const channel = supabase
            .channel("messages")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "messages" },
                () => getInitialMessages()
            )
            .subscribe()

        return () => {
            if (channel){
                supabase.removeChannel(channel);
            }
            channel.unsubscribe();
        }
    }, [game, getInitialMessages])
    return(
        <>
            {loadingInitial && <div className="flex justify-center items-center"><Loader/></div>}
            {messages && messages.map((message) => (
                message.profile_id !== session?.user.id ? <UserMsgStart key={message.id} text={message.content} date={message.updated_at} username={message.profile_username}/> : <UserMsgEnd key={message.id} text={message.content} username={message.profile_username} date={message.updated_at}/> )
            )}
            {
                messages && messages.length === 0 && <div className="h-100 flex justify-center items-center">
                    <h1 className="text-xl font-bold text-neutral-500 ">Qui ancora tutto tace... 💤</h1>
                </div>
            }
            <div ref={bottomRef}></div>
        </>
    )
}

export default MessageBox