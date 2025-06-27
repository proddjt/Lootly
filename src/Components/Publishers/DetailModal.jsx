function DetailModal({details, type}){
    return (
        <>
            {
                details && details != {} && 
                <dialog id="detail_modal" className="modal">
                    <div className="modal-box bg-black">
                        <img src={details.image_background} alt={type == 'store' ? 'Immagine dettaglio store' : 'Immagine dettaglio publisher'} className="pb-5"/>
                        <h3 className="font-bold text-2xl highlight">{details.name}</h3>
                        <p className="py-4">{type == 'store' ? 'Giochi presenti sullo store:' : 'Giochi pubblicati:'} {details.games_count}</p>
                        <p className="py-4 text-xl highlight font-semibold">Descrizione:</p>
                        {
                            details.description && details.description != "" ? <span dangerouslySetInnerHTML={{__html: details.description}}></span> : <span>N/A</span>
                        }
                        
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            }
        </>
    )
}

export default DetailModal