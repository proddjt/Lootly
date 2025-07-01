import { Link } from 'react-router'

function HeroTexts(){
    return(
        <>
            <div className="flex justify-center items-center md:gap-10 gap-4 w-full">
                <h1 className="md:text-9xl text-6xl text-heading font-bold text-shadow-lg text-shadow-amber-100/30">L<span className="highlight">oo</span>tly</h1>
                <img src="Media/Images/logo.png" alt="Logo" className="md:w-30 w-18" id="hero-logo" loading='lazy'/>
            </div>
            <div className='w-full md:px-0 px-10 flex justify-center items-center'>
                <Link to={'/catalog'} className='md:w-1/2 w-full md:text-3xl text-xl text-heading font-bold text-shadow-lg text-shadow-amber-100/30 bg-[yellow] p-3 rounded-sm hover:scale-105 text-black flex justify-center transition duration-300 cursor-pointer'>
                    <button className='cursor-pointer'>Vai al catalogo</button>
                </Link>
            </div>
        </>
    )
}

export default HeroTexts