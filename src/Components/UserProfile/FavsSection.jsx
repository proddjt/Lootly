import { useContext } from "react";
import { Link } from "react-router";
import FavContext from "../../Context/FavContext";
import GameCard from "../../Components/Catalog/GameCard";

function FavSection (){
    const context = useContext(FavContext)
    const favs = context?.favs ?? [];
    
    return (
        <div className="grid grid-cols-6 gap-10">
            {
                favs && favs != [] && favs.length > 0 ? (
                    <>
                        {favs.slice(0, 5).map((game, index) => (
                            <GameCard key={index} game={game} />
                        ))}
                        {favs && favs.length > 5 && (
                            <Link to="/games/favorites">
                                <p className="text-normal text-2xl font-bold">
                                    Vedi tutti i tuoi giochi preferiti ({favs.length})
                                </p>
                            </Link>
                        )}
                    </>
                ) : (
                    <p className="text-normal text-2xl font-bold">Nessun gioco preferito</p>
                )
            }
        </div>
    )
}

export default FavSection