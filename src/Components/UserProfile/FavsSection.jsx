import { useContext } from "react";
import { Link } from "react-router";
import FavContext from "../../Context/FavContext";  
import FavGameCard from "../FavoriteGames/FavGameCard";
import { useAutoAnimate } from '@formkit/auto-animate/react'

function FavSection (){
    const context = useContext(FavContext)
    const favs = context?.favs ?? [];
    const [parent] = useAutoAnimate()
    
    return (
        <>
        <div className="grid grid-cols-5 gap-10" ref={parent}>
            {
                favs && favs != [] && favs.length > 0 && (
                    <>
                        {favs.slice(0, 4).map((game, index) => (
                            <FavGameCard key={index} game={game} />
                        ))}
                        {favs && favs.length > 4 && (
                            <Link to="/games/favorites" className="flex justify-center items-center">
                                <p className="text-normal text-2xl font-bold text-center hover:text-[yellow] hover:underline transition duration-300">
                                    <span ></span>Vedi tutti i tuoi giochi preferiti ({favs.length})
                                </p>
                            </Link>
                        )}
                    </>
                )
            }
        </div>
        {
            !favs || favs.length == 0 && (
            <div className="flex justify-center items-center">
                <p className="text-normal text-2xl font-bold">Nessun gioco preferito</p>
            </div>
            )
        }
        </>
    )
}

export default FavSection