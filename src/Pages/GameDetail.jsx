import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/fetchToUrl";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import DetailSwiper from "../Components/GameDetail/DetailSwiper";
import DetailVideo from "../Components/GameDetail/DetailVideo";
import { isOld, formatDate } from "../lib/utils";
import DetailStats from "../Components/GameDetail/DetailStats";
import ReviewsChart from "../Components/GameDetail/ReviewsChart";
import FavoriteBtn from "../Components/Catalog/FavoriteBtn";
import WebsiteBtn from "../Components/GameDetail/WebsiteBtn";
import { useMessageStore } from "../App";
import InfoMessage from "../Components/InfoMessage";

function GameDetail (){
    const message = useMessageStore((state) => state.message);
    const {id} = useParams()
    const url = `https://api.rawg.io/api/games/${id}?key=944825bd001f426384c5e9139fa3f0ef`
    const { status, data: game } = useQuery({
        queryKey: ['game detail', url],
        queryFn: () => getData(url)
    });
    if (status === 'pending') return (<div className="flex justify-center items-center"><Loader/></div>);
    if (status === 'error') return  (<div className="flex justify-center items-center"><Message text="Qualcosa è andato storto! Riprova"/></div>)
    
    return (
        <>
            {
                message && message!= "" && <InfoMessage text={message} />
            }
            {game &&
                <div className="main-bg">
                    <div className="h-[30vh] relative">
                        {game.background_image && game.background_image !== "" && <img className="w-full h-full object-cover blur-xs" src={game.background_image} alt={game.name} loading='lazy'/>}
                        <div className="absolute top-0 left- w-full h-full flex justify-center items-center flex-col">
                            <h1 className="text-7xl font-black text-white text-normal text-shadow-lg/70 text-shadow-black">{game.name} {!isOld(game.released) && <span className="badge bg-[yellow] text-black text-normal font-bold italic p-1 rounded-sm text-lg text-shadow-none">New</span>}</h1>
                        </div>
                    </div>
                    <div className="flex w-full my-10 px-40 gap-10">
                        <div className="w-2/3 flex flex-col">
                            <div className="flex justify-between items-center w-full mb-10">
                                <FavoriteBtn id={game.id} />
                                {game.website && game.website !== "" && <WebsiteBtn website={game.website} />}
                                
                            </div>
                            <p className="text-normal text-3xl font-black highlight uppercase pb-5">Informazioni</p>
                            <div className="flex w-full detail-card rounded-xl">
                                <div className="w-1/2">
                                    <p className="text-normal font-semibold pb-2">Rilasciato da: {game.publishers && game.publishers.length > 0 ? game.publishers.map(publisher => <span key={publisher.id} className="badge bg-[yellow] text-black text-normal font-bold p-1 rounded-sm text-xs mx-1">{publisher.name}</span>) : 'N/A'}</p>
                                    <p className="text-normal font-semibold pb-2">Genere: {game.genres && game.genres.length > 0 ? game.genres.map(genre => <span key={genre.id} className="badge bg-[yellow] text-black text-normal font-bold p-1 rounded-sm text-xs mx-1">{genre.name}</span>) : 'N/A'}</p>
                                    <p className="text-normal font-semibold pb-2">Rating: {game.esrb_rating && game.esrb_rating.name ? <span className="badge bg-[yellow] text-black text-normal font-bold p-1 rounded-sm text-xs mx-1">{game.esrb_rating.name}</span> : 'N/A'}</p>
                                    <p className="text-normal font-semibold pb-2">Piattaforme: {game.platforms && game.platforms.length > 0 ? game.platforms.map(platform => <span key={platform.platform.id} className="badge bg-[yellow] text-black text-normal font-bold p-1 rounded-sm text-xs mx-1">{platform.platform.name}</span>) : 'Non disponibile'}</p>
                                    
                                </div>
                                <div className="w-1/2">
                                    <p className="text-normal font-semibold pb-2">Sviluppato da: {game.developers && game.developers.length > 0 ? game.developers.map(developer => <span key={developer.id} className="badge bg-[yellow] text-black text-normal font-bold p-1 rounded-sm text-xs mx-1">{developer.name}</span>) : 'N/A'}</p>
                                    <p className="text-normal font-semibold pb-2">Rilasciato il: {game.released ? formatDate(game.released) : 'Non disponibile'}</p>
                                    <p className="text-normal font-semibold pb-2">Acquistabile su: {game.stores && game.stores.length > 0 ? game.stores.map(store => <span key={store.id} className="badge bg-[yellow] text-black text-normal font-bold p-1 rounded-sm text-xs mx-1">{store.store.name}</span>) : 'N/A'}</p>
                                </div>
                            </div>
                            <p className="text-normal text-3xl font-black highlight uppercase pb-5 mt-10">Valutazione</p>
                            <div className="flex items-center flex-col gap-5 mb-8 detail-card rounded-xl">
                                <DetailStats rating={game.rating} rating_top={game.rating_top} ratings_count={game.ratings_count} />
                                <ReviewsChart ratings={game.ratings} />
                            </div>
                            <p className="text-normal text-3xl font-black highlight uppercase pb-5">Descrizione</p>
                            <div className="flex w-full flex-col detail-card rounded-xl">
                                <p className="text-normal font-semibold pb-2">{game.description_raw ? game.description_raw : 'N/A'}</p>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <DetailSwiper id={id}/>
                            <DetailVideo id={id} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default GameDetail