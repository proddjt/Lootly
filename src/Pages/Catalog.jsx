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
        <div className='main-bg'>
            {
                message && message!= "" && <InfoMessage text={message} />
            }
            <SearchBar />
            <div className="grid grid-cols-6 px-5">
                <FiltersCol />
                <DataGrid />
            </div>
        </div>
   )
}

export default Catalog