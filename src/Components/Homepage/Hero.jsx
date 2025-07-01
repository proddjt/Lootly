import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiChevronDoubleDown } from "react-icons/hi2";

import HeroSlider from "./HeroSlider"
import styles from "../css/Hero.module.css"
import { useEffect } from 'react';
import HeroTexts from './HeroTexts';
import StatsSection from './StatsSection';

function Hero (){
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
        <div>
            <video src="../src/assets/media/videos/background-video.mp4" autoPlay loop muted className={styles.heroBg}></video>
        </div>
        <header className="flex justify-center items-center flex-col max-w-full md:h-screen min-h-screen md:my-0 my-15">
            <div className='flex justify-center items-center w-full md:h-18/20 md:flex-row flex-col'>
                <div className="flex justify-center flex-col md:w-[50vw] w-full md:items-center items-start gap-10" data-aos="fade-left">
                    <HeroTexts />
                    <StatsSection />
                </div>
                <div data-aos="fade-right" className='md:w-[50vw] w-screen'>
                    <HeroSlider />
                </div>
            </div>
        </header>
        </>
        
    )
}

export default Hero