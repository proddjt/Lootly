import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSlider from "./HeroSlider"
import styles from "./css/Hero.module.css"
import { useEffect } from 'react';
import HeroTexts from './HeroTexts';
import { HiChevronDoubleDown } from "react-icons/hi2";

function Hero (){
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
        <div>
            <video src="../src/assets/media/videos/background-video.mp4" autoPlay loop muted className={styles.heroBg}></video>
        </div>
        <header className="flex justify-center items-center flex-col max-w-full h-screen">
            <div className='flex justify-center items-center w-full h-18/20 md:flex-row flex-col'>
                <div className="flex justify-center flex-col w-[50vw] items-center gap-10" data-aos="fade-left">
                    <HeroTexts />
                </div>
                <div data-aos="fade-right">
                    <HeroSlider />
                </div>
            </div>
            <div className='flex justify-center max-w-full'>
                <a href="#home-first-section">
                    <HiChevronDoubleDown className='text-6xl highlight animate-bounce' />
                </a>
            </div>
        </header>
        </>
        
    )
}

export default Hero