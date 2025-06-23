import RotatingText from '../../ReactBits-Animations/RotatingText'

import styles from '../css/HeroSlider.module.css'
import games from '../../data/hero-games'

function HeroSlider(){
    const titles = games.map(game => game.name)
    let count = 0
    return (
        <div className='flex flex-col justify-center gap-10'>
            <div className={styles.wrapper}>
                <div className={styles.inner} style={{"--quantity": 10}}>
                    {games.map(game => {
                        if (count < 10){
                            count++
                            return (
                                <div key={game.id} className={styles.card} style={{"--index": count, "--color-card": "#1d1d1d"}}>
                                    <div className={styles.img}>
                                        <img src={game.img} alt="game-img" className=''/>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-normal'>
                <RotatingText
                texts={titles}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                className='text-5xl highlight font-bold text-shadow-lg text-shadow-amber-100/20 '
                />
                <h5 className='text-3xl'>e tanto altro...</h5>
            </div>
        </div>
    )
}

export default HeroSlider