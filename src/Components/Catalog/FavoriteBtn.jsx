import { useMessageStore } from "../../App"
import { useContext, useEffect, useState } from "react"
import SessionContext from "../../Context/SessionContext"
import supabase from "../../supabase/supabase-client";
import FavContext from "../../Context/FavContext";

function FavoriteBtn({id, name, img}){
    const {session} = useContext(SessionContext);
    const user = session ? session.user : null
    const setMessage = useMessageStore((state) => state.setMessage)
    const resetMessage = useMessageStore((state) => state.resetMessage)
    const {favs, setFavs} = useContext(FavContext);
    const isFavorite = () => favs.find((el) => +el.game_id === id) ? true : false;
    const addFavorites = async (id, name, img) => {
        const { data, error } = await supabase
            .from('favorites')
            .insert([{ user_id: user.id, game_id: id, game_name: name, game_image: img }])
            .select();
        if (error){
            setMessage("Gioco non aggiunto! Riprova più tardi");
            setTimeout(resetMessage, 2010)
        } else {
            setFavs((prev) => [...prev, data[0]]);
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
            setFavs((prev) => prev.filter((el) => el.game_id !== id));
            setMessage("Gioco rimosso dai preferiti");
            setTimeout(resetMessage, 2010)
        }
    }
    const setFavorite = () => {
        if (!isFavorite()){
            addFavorites(id, name, img);
        }else{
            removeFavorites(id, name, img);
        }
    }

    const getFavorites = async () => {
        if (user){
            const { data, error } = await supabase
            .from('favorites')
            .select('*')
            .eq('user_id', user.id)
            if (error) console.log(error)
            else setFavs(data);
       }
    }
    useEffect(() => {
        setTimeout(() => {
            getFavorites();
        }, 100);
    }, [])
    return (
        <div className={!user ? `tooltip tooltip-bottom tooltip-primary highlight text-normal` : ``} data-tip="Devi essere loggato per aggiungere ai preferiti">
            <input defaultValue="favorite-button" name={`favorite-button-${id}`} id={`favorite-${id}`} checked={isFavorite()} type="checkbox" className="favorite-checkbox" disabled={!user} readOnly onChange={user ? setFavorite : null}/>
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