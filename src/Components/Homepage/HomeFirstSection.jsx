import StatsSection from "./StatsSection"
import DotGrid from "../../ReactBits-Animations/DotGrid"

function HomeFirstSection (){
    return (
        <div id="home-first-section">
            <div style={{ width: '100%', height: '50vh', position: 'absolute', zIndex: '-1' }}>
            <DotGrid
                dotSize={10}
                gap={15}
                baseColor="#000000"
                activeColor="#FFFFFF"
                proximity={70}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
                className="bg-[yellow] blur-2xs"
            />
            </div>
            <div className="h-[50vh] mt-11 max-w-screen flex justify-center items-center " >
                <div className="flex justify-center items-center w-full">
                    <div className="w-1/2 text-center p-5">
                        <p className="text-black text-normal font-semibold text-2xl bg-white p-4 rounded-lg shadow-black shadow-2xl">
                            <span className="font-black text-4xl">Hai voglia di qualcosa di nuovo, ma non sai da dove cominciare?<br></br></span>
                            Nessun problema. Grazie a un sistema intelligente basato su categorie, valutazioni e popolarità, potrai filtrare e scoprire giochi in base ai tuoi gusti, senza perdere tempo tra decine di siti o recensioni dispersive.
                        </p>
                    </div>
                    <StatsSection />
                </div>
            </div>
        </div>
    )
}

export default HomeFirstSection