import { useMessageStore } from '../App'

import DataGrid from '../Components/Catalog/DataGrid'
import FiltersCol from '../Components/Catalog/FiltersCol'
import SearchBar from '../Components/Catalog/SearchBar'
import InfoMessage from '../Components/InfoMessage'

function Catalog (){
    const message = useMessageStore((state) => state.message);
    return (
        <main>
            {
                message && message!= "" && <InfoMessage text={message} />
            }
            <SearchBar />
            <div className="grid grid-cols-6">
                <FiltersCol />
                <DataGrid />
            </div>
        </main>
   )
}

export default Catalog