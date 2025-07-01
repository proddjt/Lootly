import { useState, useContext } from "react"
import { getData }  from "../../lib/fetchToUrl";
import { useQuery } from "@tanstack/react-query"
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from "react-icons/bs";
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Link } from "react-router";
import { FaBook } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { GiGameConsole } from "react-icons/gi";
import { FaHeartCircleBolt } from "react-icons/fa6";

import Loader from "../Loader"
import Message from "../Message";
import DataURLContext from "../../Context/DataURLContext";
import DataGridTitleContext from "../../Context/DataGridTitleContext";
import OrderBox from "./OrderBox";

function FiltersCol(){
    const [showAllGenres, setShowAllGenres] = useState(false);
    const [showAllPlatforms, setShowAllPlatforms] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    const {url, setUrl} = useContext(DataURLContext);
    const {setTitle} = useContext(DataGridTitleContext);

    const setFilter = (url, title) => {
        setUrl(url)
        setTitle(title)
    }

    const [parent, enableAnimations] = useAutoAnimate()
    
    const { status : genresStatus, data: genres } = useQuery({
        queryKey: ['genres'],
        queryFn: () => getData('https://api.rawg.io/api/genres?key=944825bd001f426384c5e9139fa3f0ef')
    });
    const { status : platStatus, data: plat } = useQuery({
        queryKey: ['plat'],
        queryFn: () => getData('https://api.rawg.io/api/platforms?key=944825bd001f426384c5e9139fa3f0ef')
    });
    if (genresStatus === 'error' || platStatus === 'error') return <Message text="Qualcosa è andato storto! Riprova"/>;
    
    return (
        <>
        <div className="md:hidden w-full mb-4">
            <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-neutral-800 text-white px-4 py-3 rounded-xl w-full text-left flex justify-between items-center font-bold"
            >
            Filtri
            <span>{menuOpen ? '▲' : '▼'}</span>
            </button>

            {menuOpen && (
            <div className="bg-neutral-800 rounded-xl mt-2 px-5 py-5 text-lg text-white">
                <div className="w-full bg-neutral-800 rounded-xl text-center text-normal text-lg self-start">
                    <OrderBox/>
                    <button className="hover:underline cursor-pointer text-3xl font-bold mb-5 flex items-center gap-2 w-full justify-center" onClick={() => setFilter('https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef', 'Tutti i giochi')}><IoGameController />Tutti i giochi</button>
                    <ul className="font-bold mb-5" ref={parent}><span className="text-3xl flex items-center justify-center gap-2"><FaBook />Generi</span>
                        {
                            genresStatus === 'pending' && <Loader/>
                        }
                        {
                            showAllGenres && genres && genres.results.map((genre, index) => (
                                <li key={index} className="hover:underline cursor-pointer ps-4" onClick={() => setFilter(`https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef&genres=${genre.id}`, genre.name)}>{genre.name}</li>
                            ))
                        }
                        {
                            !showAllGenres && genres && genres.results.filter((genre, index) => index < 3 ? genre : null ).map((genre, index) => {
                                return (<li key={index} className="hover:underline cursor-pointer ps-4" onClick={() => setFilter(`https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef&genres=${genre.id}`, genre.name)}>{genre.name}</li>)
                            })
                        }
                        {
                            !showAllGenres && <button className="hover:text-yellow-200 cursor-pointer text-[yellow] w-full flex items-center justify-center gap-2" onClick={() => setShowAllGenres(!showAllGenres)}><BsArrowDownSquareFill className="inline"/> Mostra tutti</button>
                        }
                        {
                            showAllGenres && <button className="hover:text-yellow-200 cursor-pointer text-[yellow] w-full flex items-center justify-center gap-2" onClick={() => setShowAllGenres(!showAllGenres)}><BsArrowUpSquareFill className="inline"/> Mostra meno</button>
                        }
                    </ul>
                    <ul className="font-bold mb-5" ref={parent}><span className="text-3xl flex items-center justify-center gap-2"><GiGameConsole />Piattaforme</span>
                        {
                            platStatus === 'pending' && <Loader/>
                        }
                        {
                            showAllPlatforms && plat && plat.results.map((plat, index) => (
                                <li key={index} className="hover:underline cursor-pointer ps-4" onClick={() => setFilter(`https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef&platforms=${plat.id}`, plat.name)}>{plat.name}</li>
                            ))
                        }
                        {
                            !showAllPlatforms && plat && plat.results.filter((plat, index) => index < 3 ? plat : null ).map((plat, index) => {
                                return (<li key={index} className="hover:underline cursor-pointer ps-4" onClick={() => setFilter(`https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef&platforms=${plat.id}`, plat.name)}>{plat.name}</li>)
                            })
                        }
                        {
                            !showAllPlatforms && <button className="hover:text-yellow-200 cursor-pointer text-[yellow]" onClick={() => setShowAllPlatforms(!showAllPlatforms)}><BsArrowDownSquareFill className="inline"/> Mostra tutti</button>
                        }
                        {
                            showAllPlatforms && <button className="hover:text-yellow-200 cursor-pointer text-[yellow]" onClick={() => setShowAllPlatforms(!showAllPlatforms)}><BsArrowUpSquareFill className="inline"/> Mostra meno</button>
                        }
                    </ul>
                    <Link to="/games/favorites" className="font-bold hover:underline cursor-pointer w-full flex justify-center "><span className="text-3xl flex items-center gap-2"><FaHeartCircleBolt />Giochi preferiti</span></Link>
                </div>
            </div>
            )}
        </div>
        <div className="hidden md:block md:col-span-1 w-full bg-neutral-800 rounded-xl py-10 px-5 text-lg text-white self-start">
            <div className="md:col-span-1 w-full bg-neutral-800 rounded-xl text-normal text-lg self-start">
                <OrderBox/>
                <button className="hover:underline cursor-pointer text-3xl font-bold mb-5 flex items-center gap-2" onClick={() => setFilter('https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef', 'Tutti i giochi')}><IoGameController />Tutti i giochi</button>
                <ul className="font-bold mb-5" ref={parent}><span className="text-3xl flex items-center gap-2"><FaBook />Generi</span>
                    {
                        genresStatus === 'pending' && <Loader/>
                    }
                    {
                        showAllGenres && genres && genres.results.map((genre, index) => (
                            <li key={index} className="hover:underline cursor-pointer ps-4" onClick={() => setFilter(`https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef&genres=${genre.id}`, genre.name)}>{genre.name}</li>
                        ))
                    }
                    {
                        !showAllGenres && genres && genres.results.filter((genre, index) => index < 3 ? genre : null ).map((genre, index) => {
                            return (<li key={index} className="hover:underline cursor-pointer ps-4" onClick={() => setFilter(`https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef&genres=${genre.id}`, genre.name)}>{genre.name}</li>)
                        })
                    }
                    {
                        !showAllGenres && <button className="hover:text-yellow-200 cursor-pointer text-[yellow] flex items-center gap-2" onClick={() => setShowAllGenres(!showAllGenres)}><BsArrowDownSquareFill className="inline"/> Mostra tutti</button>
                    }
                    {
                        showAllGenres && <button className="hover:text-yellow-200 cursor-pointer text-[yellow]" onClick={() => setShowAllGenres(!showAllGenres)}><BsArrowUpSquareFill className="inline"/> Mostra meno</button>
                    }
                </ul>
                <ul className="font-bold mb-5" ref={parent}><span className="text-3xl flex items-center gap-2"><GiGameConsole />Piattaforme</span>
                    {
                        platStatus === 'pending' && <Loader/>
                    }
                    {
                        showAllPlatforms && plat && plat.results.map((plat, index) => (
                            <li key={index} className="hover:underline cursor-pointer ps-4" onClick={() => setFilter(`https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef&platforms=${plat.id}`, plat.name)}>{plat.name}</li>
                        ))
                    }
                    {
                        !showAllPlatforms && plat && plat.results.filter((plat, index) => index < 3 ? plat : null ).map((plat, index) => {
                            return (<li key={index} className="hover:underline cursor-pointer ps-4" onClick={() => setFilter(`https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef&platforms=${plat.id}`, plat.name)}>{plat.name}</li>)
                        })
                    }
                    {
                        !showAllPlatforms && <button className="hover:text-yellow-200 cursor-pointer text-[yellow]" onClick={() => setShowAllPlatforms(!showAllPlatforms)}><BsArrowDownSquareFill className="inline"/> Mostra tutti</button>
                    }
                    {
                        showAllPlatforms && <button className="hover:text-yellow-200 cursor-pointer text-[yellow]" onClick={() => setShowAllPlatforms(!showAllPlatforms)}><BsArrowUpSquareFill className="inline"/> Mostra meno</button>
                    }
                </ul>
                <Link to="/games/favorites" className="font-bold mb-5 hover:underline cursor-pointer"><span className="text-3xl flex items-center gap-2"><FaHeartCircleBolt />Giochi preferiti</span></Link>
            </div>
        </div>
        </>
    )
}

export default FiltersCol