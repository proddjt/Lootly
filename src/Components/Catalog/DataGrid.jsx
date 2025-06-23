import { useQuery } from "@tanstack/react-query"
import { useContext } from "react";

import DataURLContext from "../../Context/DataURLContext";
import DataGridTitleContext from "../../Context/DataGridTitleContext";
import OrderingContext from "../../Context/OrderingContext";
import SkeletonCard from "./SkeletonCard";
import Message from "../Message";
import { getData } from "../../lib/fetchToUrl";
import GameCard from "./GameCard";
import Paginator from "./Paginator";

function DataGrid (){
    const { title } = useContext(DataGridTitleContext);
    const { url } = useContext(DataURLContext);
    const { order } = useContext(OrderingContext);
    const { status, data } = useQuery({
        queryKey: ['games', url, order],
        queryFn: () => getData(url+order)
    });
    if (status === 'error') return <Message text="Qualcosa è andato storto! Riprova"/>
    if (status === 'pending') return <SkeletonCard/>

    return (
        <div className="col-span-5">
            <div className="flex justify-center pb-8">
                <h1 className="text-normal text-4xl font-black">{title} {data && "(" +data.count+ ")"}</h1>
            </div>
            <div className="grid grid-cols-4 gap-10 ps-10 pt-5">
                {
                    data && data.results.map((game, index) => <GameCard key={index} game={game}/>)
                }
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