import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/fetchToUrl";

import SkeletonCard from "../Components/Catalog/SkeletonCard";
import Message from "../Components/Message";
import SmallCard from "../Components/Publishers/SmallCard";
import DetailModal from "../Components/Publishers/DetailModal";


function Stores(){
    const [storeDetailsUrl, setStoreDetailsUrl] = useState(null);
    const [url, setUrl] = useState(null);
    const { status, data } = useQuery({
        queryKey: ['stores', url],
        queryFn: () => getData(url)
    });
    const { status: detailsStatus, data: details } = useQuery({
        queryKey: ['store details', storeDetailsUrl],
        queryFn: () => getData(storeDetailsUrl)
    });

    const handleModal = (id) => {
        setStoreDetailsUrl("https://api.rawg.io/api/stores/"+id+"?key=944825bd001f426384c5e9139fa3f0ef")
    };

    useEffect(() => {
        setUrl('https://api.rawg.io/api/stores?key=944825bd001f426384c5e9139fa3f0ef&page_size=30')
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
                        <h1 className="text-normal text-4xl font-black">Stores {data && "(" +data.count+ ")"}</h1>
                </div>
                <div className="flex justify-center">
                    <div className="grid md:grid-cols-5 grid-cols-1 gap-10 pt-5">
                        {data && data.results.map((store, index) => <SmallCard key={index} data={store} handleModal={handleModal}/>)}
                    </div>
                </div>
                <DetailModal details={details} />
            </div>
        </>
    )
}

export default Stores