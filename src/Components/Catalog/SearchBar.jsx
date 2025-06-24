import { useContext, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

import DataURLContext from "../../Context/DataURLContext";
import DataGridTitleContext from "../../Context/DataGridTitleContext";

function SearchBar(){
    const {setUrl} = useContext(DataURLContext);
    const [input, setInput] = useState('')
    const {setTitle} = useContext(DataGridTitleContext);

    const search = (e) => {
        setInput(e.target.value)
        setTimeout(() => {
            setTitle('Risultati per ' + e.target.value)
            setUrl(`https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef&search=${e.target.value}`)
        }, 1000);       
    }

    const clear = () => {
        setUrl('https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef')
        setInput('')
        setTitle('Tutti i giochi')
    }
    return (
        <label className="input w-full bg-neutral-500 my-5 rounded-full px-5">
            <FaSearch className="text-xl"/>
            <input type="text" className="input input-lg py-4" placeholder="Cerca un gioco..." onChange={search} value={input}/>
            <GiCancel onClick={clear} className="text-2xl opacity-50 hover:opacity-100 cursor-pointer transition duration-300"/>
        </label>
    )
}

export default SearchBar