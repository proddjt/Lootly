import { useContext, useEffect, useState } from "react";
import supabase from "../supabase/supabase-client";
import SessionContext from "./SessionContext";
import FavContext from "./FavContext";

export default function FavProvider({children}) {
    const { session, loading } = useContext(SessionContext);
    const [favs, setFavs] = useState([]);
    const getFavorites = async () => {
        if (session?.user){
            const { data, error } = await supabase
            .from('favorites')
            .select('*')
            .eq('user_id', session.user.id)
            if (error) console.log(error)
            else setFavs(data);
        }else{
            setFavs([])
        }
    }
    useEffect(() => {
        if (!loading){
            getFavorites();
        }
    }, [session, loading]);
    return (
        <FavContext.Provider value={{favs, setFavs}}>
            {children}
        </FavContext.Provider>
    )
}