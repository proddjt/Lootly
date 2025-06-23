import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import { useContext } from "react";

import DataURLContext from "../../Context/DataURLContext";

function Paginator ({nextUrl, prevUrl}){
    const {url, setUrl} = useContext(DataURLContext);
    const nextPage = () => {
        if (nextUrl && nextUrl != ""){
            setUrl(nextUrl)
            console.log("prossimo");
            
        }
    }

    const prevPage = () => {
        if (prevUrl && prevUrl != ""){
            setUrl(prevUrl)
        }
    }

    return (
        <div className="join grid grid-cols-2">
            <button onClick={() => prevPage()} className="join-item border-2 border-[yellow] px-5 py-2 rounded-s-lg flex items-center gap-3 cursor-pointer enabled:hover:bg-[yellow] enabled:hover:text-black enabled:hover:scale-105 transition duration-300 disabled:bg-neutral-500 disabled:border-neutral-800 disabled:text-neutral-900" dir="ltr" disabled={!prevUrl}><TbPlayerTrackPrevFilled /> Precedente</button>
            <button onClick={() => nextPage()} className="join-item border-2 border-[yellow] px-5 py-2 rounded-s-lg flex items-center gap-3 cursor-pointer enabled:hover:bg-[yellow] enabled:hover:text-black enabled:hover:scale-105 transition duration-300 disabled:bg-neutral-500 disabled:border-neutral-800 disabled:text-neutral-900" dir="rtl" disabled={!nextUrl}><TbPlayerTrackNextFilled /> Successivo </button>
        </div>
    )
}

export default Paginator