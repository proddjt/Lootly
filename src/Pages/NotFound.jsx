import FuzzyText from '../ReactBits-Animations/FuzzyText'
import { Link } from 'react-router'
import Silk from '../ReactBits-Animations/SilkBackground'
function NotFound (){
    return (
        <div className='flex justify-center items-center h-screen w-screen flex-col'>
            <div className="absolute top-0 left-0 w-screen h-screen z-0">
                <Silk
                speed={5}
                scale={1}
                color="#ffff00"
                noiseIntensity={1.5}
                rotation={0}
                />
            </div>
            <div className='z-10 flex justify-center items-center h-screen w-screen flex-col'>
                <FuzzyText 
                baseIntensity={0.2} 
                hoverIntensity={0.5} 
                enableHover={true}
                color='#000000'
                >
                404
                </FuzzyText>
                <FuzzyText 
                baseIntensity={0.2} 
                hoverIntensity={0.5} 
                enableHover={true}
                fontSize='3rem'
                color='#000000'
                >
                Pagina non trovata
                </FuzzyText>
                <Link to="/" className='text-lg text-heading font-bold bg-black p-3 rounded-sm hover:scale-105 text-[yellow] flex justify-center transition duration-300 cursor-pointer mt-5'>Ritorna alla homepage</Link>
            </div>

        </div>
    )
}

export default NotFound