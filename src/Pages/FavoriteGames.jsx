import { useContext } from "react";
import FavContext from "../Context/FavContext";
import FavGameCard from "../Components/FavoriteGames/FavGameCard";
import { useAutoAnimate } from '@formkit/auto-animate/react'

function FavoriteGames(){
    const {favs} = useContext(FavContext)
    const [parent] = useAutoAnimate()
    return (
        <div className="min-h-screen">
            <div className="flex justify-center pb-8 pt-10">
                    <h1 className="text-normal text-4xl font-black">I tuoi giochi preferiti {favs && "(" +favs.length+ ")"}</h1>
            </div>
            <div className="grid grid-cols-4 gap-10 py-5" ref={parent}>
                {
                    favs && favs != [] && favs.map((game) => (
                        <FavGameCard key={game.game_id} game={game} />
                ))}
            </div>
        </div>
    )
}

export default FavoriteGames