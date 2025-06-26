import { useMessageStore } from "../../App"
import { useContext, useState } from "react"
import SessionContext from "../../Context/SessionContext"
import supabase from "../../supabase/supabase-client";

function FavoriteBtn({id}){
    const {session} = useContext(SessionContext);
    const user = session ? session.user : null
    const setMessage = useMessageStore((state) => state.setMessage)
    const resetMessage = useMessageStore((state) => state.resetMessage)
    const [favorites, setFavorites] = useState([]);
    const isFavorite = () => favorites.find((el) => +el.game_id === id) ? true : false;
    const addFavorites = async (id) => {
        const { data, error } = await supabase
            .from('favorites')
            .insert([{ user_id: user.id, game_id: id }]    
        )
        .select();
        if (error){
            setMessage("Gioco non aggiunto! Riprova più tardi");
            setTimeout(resetMessage, 2010)
        } else {
            setFavorites(data);
            setMessage("Gioco aggiunto ai preferiti");
            setTimeout(resetMessage, 2010)
        }
    }

    const removeFavorites = async (id) => {
        const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('game_id', id)
        .eq('user_id', user?.id)
        if (error) {
            setMessage("Gioco non rimosso! Riprova più tardi");
            setTimeout(resetMessage, 2010)
        } else {
            setFavorites((prev) => prev.filter((el) => el.game_id !== id && el.user_id !== user?.id));
            setMessage("Gioco rimosso dai preferiti");
            setTimeout(resetMessage, 2010)
        }
    }
    const setFavorite = () => {
        if (!isFavorite()){
            addFavorites(id);
        }else{
            removeFavorites(id);
        }
        
    }
    return (
        <div onClick={user ? setFavorite : null} className={!user ? `tooltip tooltip-bottom tooltip-primary highlight text-normal` : ``} data-tip="Devi essere loggato per aggiungere ai preferiti">
            <input defaultValue="favorite-button" name={`favorite-button-${id}`} id={`favorite-${id}`} defaultChecked={isFavorite} type="checkbox" className="favorite-checkbox" disabled={!user} />
            <label className="container" htmlFor={`favorite-${id}`}>
                <svg className="feather feather-heart" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <div className="action">
                    <span className={`option1 ${!user ? "text-gray-500" : ""}`}>Aggiungi ai preferiti</span>
                    <span className={`option2 ${!user ? "text-gray-500" : ""}`}>Aggiunto ai preferiti</span>
                </div>
            </label>
        </div>
    )
}

export default FavoriteBtn