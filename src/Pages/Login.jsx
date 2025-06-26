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
                    className="text-6xl font-semibold text-center highlight text-normal bg-transparent"
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
                <img src="../src/assets/media/images/logo.png" alt="Logo" className="w-20 animate-bounce" loading='lazy'/>
            </div>
            <LoginForm />
            <div className="flex justify-center items-center gap-5 mt-10">
                <Link to={'/'} ><LinkBtn text="Torna alla home"/></Link>
                <Link to={'/catalog'}><LinkBtn text="Torna al catalogo"/></Link>
            </div>
        </div>
    )
}

export default Login