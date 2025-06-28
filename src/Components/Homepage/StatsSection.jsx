
import CountUp from "../../ReactBits-Animations/CountUp"
import styles from "../css/StatsSection.module.css"

function StatsSection(){
    return (
        <div className="flex justify-center items-center w-full gap-5">
            <div className={`${styles.stats} ${styles.shadow} p-2 text-center text-normal`}>
                <div className={styles.stat}>
                    <div className={styles.statTitle}>Videogames</div>
                    <div className={styles.statValue}><CountUp
                        from={0}
                        to={850000}
                        separator="."
                        direction="up"
                        duration={0.1}
                        className="count-up-text"
                        />+</div>
                    </div>
            </div>
            <div className={`${styles.stats} ${styles.shadow} p-2 text-center text-normal`}>
                <div className={styles.stat}>
                    <div className={styles.statTitle}>Reviews</div>
                    <div className={styles.statValue}><CountUp
                        from={0}
                        to={16000}
                        separator="."
                        direction="up"
                        duration={0.1}
                        className="count-up-text"
                        />+</div>
                </div>
            </div>
            <div className={`${styles.stats} ${styles.shadow} p-2 text-center text-normal`}>
                <div className={styles.stat}>
                    <div className={styles.statTitle}>Creators</div>
                    <div className={styles.statValue}><CountUp
                        from={0}
                        to={28000}
                        separator="."
                        direction="up"
                        duration={0.1}
                        className="count-up-text"
                        />+</div>
                </div>
            </div>
        </div>
    )
}

export default StatsSection
