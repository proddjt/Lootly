import { useCallback, useEffect, useState } from "react";
import supabase from "../../../supabase/supabase-client";
import { useMessageStore } from "../../../App";

import Loader from "../../Loader";
import UserMsg from "./UserMsg";

function MessageBox({game}){
    const [messages, setMessages] = useState([]);
    const [loadingInitial, setLoadingInitial] = useState(false);
    const setMessage = useMessageStore((state) => state.setMessage);
    
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
            {messages && messages.map((message) => {
                <UserMsg key={message.id} text={message.content} username={message.profile_username} date={message.updated_at} direction={message.profile_id === session?.user.id ? "start" : "end"}/>
            })}
        </>
    )
}

export default MessageBox