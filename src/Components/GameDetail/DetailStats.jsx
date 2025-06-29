import styles from "../css/DetailStats.module.css"
import { calculateStars } from "../../lib/utils"
import Stars from "../Catalog/Stars"

function DetailStats ({rating, rating_top, ratings_count}){
    const actualStars = calculateStars(rating);
    const topStars = calculateStars(rating_top);
    return (
        <div className={styles.card}>
            <div className={`${styles.statsWrapper} border-4 border-black`}>
                <p className={`${styles.heading} text-normal text-md text-center`}>Valutazione attuale</p>
                <div className={styles.bottomWrapper}>
                    <div className="flex justify-center items-center text-3xl font-bold text-[yellow] flex-col">
                        {rating && rating > 0 ? <Stars stars={actualStars}/> : 'N/A'}
                        <p className={styles.count}>{rating}</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.statsWrapper} border-4 border-black`}>
                <p className={`${styles.heading} text-normal text-md text-center`}>Top valutazione</p>
                <div className={styles.bottomWrapper}>
                    <div className="flex justify-center items-center text-3xl font-bold text-[yellow] flex-col">
                        {rating_top && rating_top > 0 ? <Stars stars={topStars}/> : 'N/A'}
                        <p className={styles.count}>{rating_top}</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.statsWrapper} border-4 border-black`}>
                <p className={`${styles.heading} text-normal text-md text-center`}>Numero recensioni</p>
                <div className={styles.bottomWrapper}>
                    <div className="flex justify-center items-center text-3xl font-bold text-[yellow]">
                        <p className={styles.count}>{ratings_count}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailStats