import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSlider from "./HeroSlider"
import styles from "./css/Hero.module.css"
import { useEffect } from 'react';
import HeroTexts from './HeroTexts';

function Hero (){
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
        <div>
            <video src="../src/assets/media/videos/background-video.mp4" autoPlay loop muted className={styles.heroBg}></video>
        </div>
        <header className="flex justify-center items-center h-screen">
            <div className="flex justify-center flex-col w-[50vw] items-center gap-10" data-aos="fade-left">
                <HeroTexts />
            </div>
            <div data-aos="fade-right">
                <HeroSlider />
            </div>
        </header>
        </>
        
    )
}

export default Hero