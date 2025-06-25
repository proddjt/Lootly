function WebsiteBtn({website}){
    return (
        <a className="relative py-2 px-8 text-white text-normal font-bold overflow-hidden bg-[#242424] rounded-xl transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-black hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[yellow] before:to-[yellow] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 cursor-pointer" href={website} 
        target="_blank"
        >
        Visita il sito
        </a>
    )
}

export default WebsiteBtn