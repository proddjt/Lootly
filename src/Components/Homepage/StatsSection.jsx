
import styles from "../css/StatsSection.module.css"

function StatsSection(){
    return (
        <div className="flex justify-around items-center w-1/2">
            <div className={`${styles.stats} ${styles.shadow} p-2 text-center`}>
                <div className={styles.stat}>
                    <div className={styles.statTitle}>Videogames</div>
                    <div className={styles.statValue}>850.000+</div>
                </div>
            </div>
            <div className={`${styles.stats} ${styles.shadow} p-2 text-center`}>
                <div className={styles.stat}>
                    <div className={styles.statTitle}>Reviews</div>
                    <div className={styles.statValue}>16.000+</div>
                </div>
            </div>
            <div className={`${styles.stats} ${styles.shadow} p-2 text-center`}>
                <div className={styles.stat}>
                    <div className={styles.statTitle}>Creators</div>
                    <div className={styles.statValue}>28.000+</div>
                </div>
            </div>
        </div>
    )
}

export default StatsSection
