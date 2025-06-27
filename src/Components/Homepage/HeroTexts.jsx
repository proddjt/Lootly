import { Link } from 'react-router'

function HeroTexts(){
    return(
        <>
            <div className="flex justify-center items-center gap-10">
                <h1 className="text-9xl text-heading font-bold text-shadow-lg text-shadow-amber-100/30">L<span className="highlight">oo</span>tly</h1>
                <img src="../src/assets/media/images/logo.png" alt="Logo" className="w-30" id="hero-logo" loading='lazy'/>
            </div>
            <Link to={'/catalog'} className='w-1/2 text-3xl text-heading font-bold text-shadow-lg text-shadow-amber-100/30 bg-[yellow] p-3 rounded-sm hover:scale-105 text-black flex justify-center transition duration-300 cursor-pointer'>
                <button className='cursor-pointer'>Vai al catalogo</button>
            </Link>
        </>
    )
}

export default HeroTexts