import { Link } from "react-router";

import LoginForm from "../Components/Login/LoginForm";
import ParticlesBg from "../ReactBits-Animations/ParticlesBg";
import SplitText from "../ReactBits-Animations/SplitText";
import LinkBtn from "../Components/Register/LinkBtn";

function Login (){
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div style={{ width: '100%', height: '100%', zIndex: '0', position: 'absolute' }}>
                <ParticlesBg
                    particleColors={['#ffff00', '#ffffff']}
                    particleCount={400}
                    particleSpread={20}
                    speed={0.1}
                    particleBaseSize={200}
                    moveParticlesOnHover={true}
                    alphaParticles={true}
                    disableRotation={false}
                />
            </div>
            <div className="flex justify-center items-center gap-5 mb-5">
                <SplitText
                    text="Accedi a Lootly"
                    className="md:text-6xl text-3xl font-semibold text-center highlight text-normal bg-transparent"
                    delay={70}
                    duration={0.4}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
                <img src="../src/assets/media/images/logo.png" alt="Logo" className="md:w-20 w-10 animate-bounce" loading='lazy'/>
            </div>
            <LoginForm />
            <p className="text-normal mt-5 z-1">Non hai un account? <Link to={'/register'} className="text-[yellow] hover:underline cursor-pointer">Registrati</Link></p>
            <div className="flex justify-center items-center gap-5 mt-10 md:px-0 px-5">
                <Link to={'/'} ><LinkBtn text="Torna alla home"/></Link>
                <Link to={'/catalog'}><LinkBtn text="Torna al catalogo"/></Link>
            </div>
        </div>
    )
}

export default Login