import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/fetchToUrl";

import SkeletonCard from "../Components/Catalog/SkeletonCard";
import Paginator from "../Components/Catalog/Paginator";
import Message from "../Components/Message";
import SmallCard from "../Components/Publishers/SmallCard";
import DetailModal from "../Components/Publishers/DetailModal";


function Publishers(){
    const [publisherDetailsUrl, setPublisherDetailsUrl] = useState(null);
    const [url, setUrl] = useState(null);
    const { status, data } = useQuery({
        queryKey: ['publishers', url],
        queryFn: () => getData(url)
    });
    const { status: detailsStatus, data: details } = useQuery({
        queryKey: ['publisher details', publisherDetailsUrl],
        queryFn: () => getData(publisherDetailsUrl)
    });

    const handleModal = (id) => {
        setPublisherDetailsUrl("https://api.rawg.io/api/publishers/"+id+"?key=944825bd001f426384c5e9139fa3f0ef")
    };

    useEffect(() => {
        setUrl('https://api.rawg.io/api/publishers?key=944825bd001f426384c5e9139fa3f0ef&page_size=30')
    }, [])

    useEffect(() => {
        if (detailsStatus === 'success') {
            document.getElementById('detail_modal').showModal();
        }
    }, [detailsStatus]);

    if (status === 'error') return <Message text="Qualcosa è andato storto! Riprova"/>
    if (status === 'pending') return <SkeletonCard/>
    return (
        <>
            <div className="min-h-screen">
                <div className="flex justify-center pb-8 pt-10">
                        <h1 className="text-normal text-4xl font-black">Editors {data && "(" +data.count+ ")"}</h1>
                </div>
                <div className="flex justify-center">
                    <div className="grid md:grid-cols-6 grid-cols-1 gap-10 pt-5">
                        {data && data.results.map((publisher, index) => <SmallCard key={index} data={publisher} handleModal={handleModal} type="publisher"/>)}
                    </div>
                </div>
                <div className="flex justify-center py-10">
                {
                    data &&  <Paginator nextUrl={data.next} prevUrl={data.previous} setUrl={setUrl}/>
                }
                </div>
                <DetailModal details={details} type={"publisher"}/>
            </div>
        </>
    )
}

export default Publishers