import GameCardSwiper from "./GameCardSwiper"

function GameCard({game}){
    return(
        <div className="relative flex w-80 flex-col rounded-xl bg-neutral-900 bg-clip-border text-white shadow-md col-span-1 hover:scale-105 transition duration-300">
            <div className={`relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[${game.dominant_color}]`}>
                <GameCardSwiper images={game.short_screenshots} />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block text-normal text-xl font-bold leading-snug tracking-normal text-[yellow] antialiased truncate">
                {game.name}
                </h5>
                <p className="block text-normal text-base font-light leading-relaxed text-inherit antialiased">
                Rilasciato il {game.released ? game.released : 'Non disponibile'} <br />
                Rating : {game.rating ? game.rating : 'Non disponibile'}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-normal text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Read More
                </button>
            </div>
        </div>
    )
}

export default GameCard