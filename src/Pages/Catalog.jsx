import { useEffect } from 'react'
import { useMessageStore } from '../App'

import DataGrid from '../Components/Catalog/DataGrid'
import FiltersCol from '../Components/Catalog/FiltersCol'
import SearchBar from '../Components/Catalog/SearchBar'
import InfoMessage from '../Components/InfoMessage'

function Catalog (){
    const message = useMessageStore((state) => state.message);
    const setMessage = useMessageStore((state) => state.setMessage);
    useEffect(() => {
        setMessage("")
    }, [])
    return (
        <>
            {
                message && message!= "" && <InfoMessage text={message} />
            }
            <SearchBar />
            <div className="md:grid md:grid-cols-6 flex flex-col px-5">
                <FiltersCol />
                <DataGrid />
            </div>
        </>
   )
}

export default Catalog