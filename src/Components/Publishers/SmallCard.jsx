function PublishersCard({data, handleModal, type}){
    return (
        <div className="w-60 h-70 bg-neutral-800 p-3 flex flex-col gap-1 rounded-br-3xl">
            <div className="duration-500 contrast-50 h-35 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100">
                <img src={data.image_background} alt={type == 'store' ? 'Immagine store' : 'Immagine publisher'} className="object-fit h-full"/>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                <div className="flex flex-col w-full">
                    <p className="text-xl text-gray-50 font-bold truncate">{data.name}</p>
                    <p className="text-xs text-gray-400">{type == 'store' ? 'Giochi presenti sullo store:' : 'Giochi pubblicati:'} {data.games_count}</p>
                </div>
                </div>
                <button className="hover:bg-yellow-200 text-black bg-[yellow] py-2 rounded-br-xl text-normal font-semibold cursor-pointer" onClick={() => {handleModal(data.id)}}>Dettagli</button>
            </div>
        </div>
    )
}
export default PublishersCard