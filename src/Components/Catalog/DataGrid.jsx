import { useQuery } from "@tanstack/react-query"
import { useContext, useEffect } from "react";

import DataURLContext from "../../Context/DataURLContext";
import DataGridTitleContext from "../../Context/DataGridTitleContext";
import OrderingContext from "../../Context/OrderingContext";
import SkeletonCard from "./SkeletonCard";
import Message from "../Message";
import { getData } from "../../lib/fetchToUrl";
import GameCard from "./GameCard";
import Paginator from "./Paginator";

function DataGrid (){
    const { title, setTitle } = useContext(DataGridTitleContext);
    const { url, setUrl } = useContext(DataURLContext);
    const { order } = useContext(OrderingContext);
    const { status, data } = useQuery({
        queryKey: ['games', url, order],
        queryFn: () => getData(url+order)
    });

    useEffect(() => {
        setTitle('Tutti i giochi')
        setUrl('https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef')
    }, [])

    if (status === 'error') return <Message text="Qualcosa è andato storto! Riprova"/>
    if (status === 'pending') return <SkeletonCard/>

    return (
        <div className="col-span-5">
            <div className="flex justify-center pb-8">
                <h1 className="text-normal text-4xl font-bold">{title} {data && "(" +data.count+ ")"}</h1>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-4 gap-10 pt-5">
                    {
                        data && data.results.map((game, index) => <GameCard key={index} game={game}/>)
                    }
                </div>
            </div>
            <div className="flex justify-center py-10">
                {
                    data &&  <Paginator nextUrl={data.next} prevUrl={data.previous}/>
                }
            </div>
        </div>
    )
}

export default DataGrid