import { Link } from "react-router"
import styles from "../css/FavGameCard.module.css"
import FavoriteBtn from "../Catalog/FavoriteBtn"

function FavGameCard({game}){
    return (
        <div className="flex justify-center items-center flex-col gap-3">
            <Link to={`/games/${game.game_id}`} className="flex justify-center items-center">
                <div className={styles.card}>
                    <img src={game.game_image} alt="Immagine gioco" />
                    <div className={styles.card__content}>
                        <p className={styles.card__title}>{game.game_name}</p>
                        
                    </div>
                </div>
            </Link>
            <FavoriteBtn id={game.game_id} name={game.game_name} img={game.game_image}/>
        </div>
    )
}

export default FavGameCard