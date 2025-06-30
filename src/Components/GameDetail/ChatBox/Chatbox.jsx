import { useState, useContext } from "react"
import SessionContext from "../../../Context/SessionContext"
import { BiSolidMessageDots } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import supabase from "../../../supabase/supabase-client";
import MessageBox from "./MessageBox";

function ChatBox({game}){
    const [isOpen, setIsOpen] = useState(false);
    const {session} = useContext(SessionContext);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        const inputMessage = e.currentTarget;
        const {message} = Object.fromEntries(new FormData(e.currentTarget));
        if (typeof message === "string" && message.trim().length !== 0){
            const {error} = await supabase
                .from("messages")
                .insert([
                    {
                        profile_id: session?.user.id,
                        profile_username: session?.user.user_metadata.username,
                        game_id: game.id,
                        content: message
                    }
                ])
                .select()
            if (error){
                console.log(error)
            }else{
                inputMessage.reset();
            }
        }
        inputMessage.reset();
    }

    return (
        <>
        <div className="fixed bottom-10 right-4 z-50">
            <button
                onClick={handleToggle}
                className=" bg-[yellow] w-80 text-black text-normal font-bold py-2 px-4 rounded-xl shadow-lg flex items-center justify-center text-xl gap-2 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            >
                <BiSolidMessageDots /> Discussione sul gioco
            </button>

            {isOpen && (
                <div className="mt-2 w-80 h-120 bg-neutral-800 rounded-xl shadow-xl border-2 border-black flex flex-col overflow-hidden">
                    <div className="bg-[yellow] text-black p-4 font-bold text-normal">
                        Chat per {game.name}
                    </div>

                    <div className="flex flex-col p-4 overflow-y-auto text-sm text-white">
                        <MessageBox game={game}/>
                    </div>
                    {
                        session?.user ?
                        (
                            <form className="p-2 border-t border-neutral-700 flex items-center gap-2" onSubmit={handleMessageSubmit}>
                                <textarea
                                    rows={1}
                                    name="message"
                                    placeholder="Scrivi un messaggio..."
                                    className="flex-1 resize-none p-2 rounded-md bg-neutral-700 text-white text-sm outline-none focus:ring-2 focus:ring-[yellow]"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-[yellow] hover:bg-yellow-100 text-black font-bold py-1 px-4 rounded-md transition duration-200 flex justify-center items-center gap-2 cursor-pointer"
                                >
                                    <BsFillSendFill />
                                    Invia
                                </button>
                            </form>
                        ) : (
                            <div className="p-2 border-t border-neutral-700 flex items-center gap-2">
                                <p className="text-center text-neutral-400">Per inviare un messaggio, devi essere loggato.</p>
                            </div>
                        )
                    }
                    
                </div>
            )}
        </div>
        </>
    )
}

export default ChatBox