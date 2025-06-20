import { useState, useEffect } from 'react'
import TextTransition from 'react-text-transition';
import { presets } from 'react-text-transition';

import styles from './css/HeroSlider.module.css'
import games from '../data/hero-games'

function HeroSlider(){

    let count = 0
    let count2 = 1

    const changeTitle = () => {
        if (count2 > 9){
            count2 = 0
        }else{
            setTitle(games[count2].name)
            count2++
        }
    }

    const [title, setTitle] = useState(games[0].name)

    useEffect(() => {
        setInterval(changeTitle, 2000)
    }, [])
    
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
                <TextTransition springConfig={presets.slow} direction='up' className='text-5xl highlight font-bold text-shadow-lg text-shadow-amber-100/20'>{title}</TextTransition>
                <h5 className='text-3xl'>e tanto altro...</h5>
            </div>
        </div>
    )
}

export default HeroSlider