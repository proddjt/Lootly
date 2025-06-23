import DataGrid from '../Components/Catalog/DataGrid'
import FiltersCol from '../Components/Catalog/FiltersCol'
import SearchBar from '../Components/Catalog/SearchBar'

function Catalog (){
    return (
        <>
            <SearchBar />
            <div className="grid grid-cols-6">
                <FiltersCol />
                <DataGrid />
            </div>
        </>
   )
}

export default Catalog