import { useContext } from "react";
import GameCardSwiper from "./GameCardSwiper"
import Stars from "./Stars"
import DataURLContext from "../../Context/DataURLContext";
import DataGridTitleContext from "../../Context/DataGridTitleContext";
import { Link } from "react-router";
import FavoriteBtn from "./FavoriteBtn";
import { calculateStars, formatDate, isOld } from "../../lib/utils";

function GameCard({game}){
    
    const {setUrl} = useContext(DataURLContext)
    const {setTitle} = useContext(DataGridTitleContext)
    const stars = calculateStars(game.rating);
    const releaseDate = game.released ? formatDate(game.released) : 'Non disponibile';
    const isOlderThanTwoWeeks = game.released ? isOld(game.released) : true;
    const images = game.short_screenshots.length > 0 ? game.short_screenshots : [];

    return(
        <div className="relative flex w-80 flex-col rounded-xl bg-neutral-900 bg-clip-border text-white shadow-md col-span-1 hover:scale-105 transition duration-300">
            <div className={`relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[${game.dominant_color}]`}>
                <GameCardSwiper images={images} />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block-flex text-normal text-xl font-bold leading-snug tracking-normal text-[yellow] antialiased truncate items-center gap-1">
                {!isOlderThanTwoWeeks && <span className="badge bg-[yellow] text-black text-normal font-bold italic p-1 rounded-sm">New</span>} <Link to={`/games/${game.id}`} className="hover:underline">{game.name}</Link>
                </h5>
                <p className="block text-normal text-base font-light leading-relaxed text-inherit antialiased">
                Rilasciato il {releaseDate} <br />
                Valutazione: {game.rating && game.rating > 0 ? <Stars stars={stars}/> : 'Non disponibile'} <br />
                Disponibile per: <br /> {game.platforms && game.platforms.length > 0 ? game.platforms.map(platform => <span key={platform.platform.id} className="badge bg-[yellow] text-black text-normal font-bold p-1 rounded-sm text-xs me-1 cursor-pointer hover:bg-yellow-100" onClick={() => {setUrl(`https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef&platforms=${platform.platform.id}`); setTitle(platform.platform.name)}}>{platform.platform.name}</span>) : 'Non disponibile'}
                </p>
            </div>
            <div className="p-6 pt-0 flex justify-center">
                <FavoriteBtn id={game.id} />
            </div>
        </div>
    )
}

export default GameCard