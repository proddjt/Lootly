import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/fetchToUrl";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

function GameDetail (){
    const {id} = useParams()
    const url = `https://api.rawg.io/api/games/${id}?key=944825bd001f426384c5e9139fa3f0ef`
    let { status, data } = useQuery({
        queryKey: ['game detail', url],
        queryFn: () => getData(url)
    });
    if (status === 'pending') return (<div className="flex justify-center items-center"><Loader/></div>);
    if (status === 'error') return  (<div className="flex justify-center items-center"><Message text="Qualcosa è andato storto! Riprova"/></div>)
    
    return (
        <>
            {data && 
                <div className="h-[30vh] "></div>
            
            }
        </>
    )
}

export default GameDetail