import styles from "../css/ReviewsChart.module.css"

function ReviewsChart ({ratings}){
    
    return (
        <div className={styles.container}>
            {ratings && Object.keys(ratings).length > 0 && ratings.map((rating, index) => (
                <div className={styles.skillBox} key={index}>
                    <div className={styles.title}>{rating.title}</div>
                    <div className={styles.skillBar}>
                        <span className={`${styles.skillPer}`} style={{ width: `${Math.floor(rating.percent)}%` }}>
                            <span className={styles.tooltip}>{rating.percent}%</span>
                        </span>
                    </div>
                </div>
            ))}
            {
                !ratings || Object.keys(ratings).length === 0 && <div className={styles.noData}>Non disponibile</div>
            }
        </div>
    )
}

export default ReviewsChart