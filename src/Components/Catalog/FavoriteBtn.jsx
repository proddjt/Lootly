import { useMessageStore } from "../../App"

function FavoriteBtn({id}){
    const setMessage = useMessageStore((state) => state.setMessage)
    const resetMessage = useMessageStore((state) => state.resetMessage)
    const setFavorite = () => {
        setMessage("Aggiunto ai preferiti")
        setTimeout(resetMessage, 2010)
    }
    return (
        <div onClick={setFavorite}>
            <input defaultValue="favorite-button" name={`favorite-button-${id}`} id={`favorite-${id}`} defaultChecked="" type="checkbox" className="favorite-checkbox"/>
            <label className="container" htmlFor={`favorite-${id}`}>
                <svg className="feather feather-heart" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <div className="action">
                    <span className="option1">Aggiungi ai preferiti</span>
                    <span className="option2">Aggiunto ai preferiti</span>
                </div>
            </label>
        </div>
    )
}

export default FavoriteBtn