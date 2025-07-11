import { Link } from "react-router"
import { PiHandWavingFill } from "react-icons/pi";
import { RiHome3Fill } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { FaStore } from "react-icons/fa";
import { MdOutlinePublic } from "react-icons/md";
import supabase from "../../supabase/supabase-client";
import { useContext, useEffect } from "react";
import { useMessageStore } from "../../App";

import NavUserAvatar from "./NavUserAvatar"
import NavGuestAvatar from "./NavGuestAvatar"
import SessionContext from "../../Context/SessionContext";
import AvatarUrlContext from "../../Context/AvatarUrlContext";


function NavBar(){
    const {session} = useContext(SessionContext);
    const user = session ? session.user : null
    const {avatarUrl, setAvatarUrl} = useContext(AvatarUrlContext);
    const {setError} = useContext(AvatarUrlContext);
    
    const setMessage = useMessageStore((state) => state.setMessage);
    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) console.log(error);
        setMessage("Logout avvenuto con successo")
    }
    useEffect(() => {
        if (!session){
            return;
        }
        const getAvatar = async () => {
            const { user } = session
            const { data, error } = await supabase
                .from('profiles')
                .select('avatar_url')
                .eq('id', user.id)
                .single()
            if (error){
                console.log("errore");
            } else if (data){
                downloadImage(data.avatar_url)
            }
        }
        getAvatar();
    }, [avatarUrl]);

    const downloadImage = async (path) => {
        try {
            const { data, error } = await supabase.storage.from('avatars').download(path)
            if (error) {
                throw error
            }
            const url = URL.createObjectURL(data)
            setAvatarUrl(url)
        } catch (error) {
            setError('Errore durante il download della tua immagine', error.message)
            setTimeout(() => {
                setError(null)
            }, 5010);
        }
    }
    return (
        <div className="navbar bg-[yellow] shadow-sm rounded-xl mt-2 text-black px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle tooltip tooltip-right tooltip-primary" data-tip="Menu">
                        <TiThMenu className="text-2xl"/>
                    </div>
                    <ul
                    tabIndex={0}
                    className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[yellow]">
                        <Link to={'/'}><li className="ps-2 py-1 font-semibold bg-neutral-700 hover:bg-neutral-500"><p><RiHome3Fill className="inline text-2xl"/>Home</p></li></Link>
                        <Link to={'/publishers'}><li className="ps-2 py-1 font-semibold bg-neutral-700 hover:bg-neutral-500"><p><MdOutlinePublic className="inline text-2xl"/>Editors</p></li></Link>
                        <Link to={'/stores'}><li className="ps-2 py-1 font-semibold bg-neutral-700 hover:bg-neutral-500"><p><FaStore className="inline text-2xl"/>Stores</p></li></Link>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to={'/catalog'}>
                    <h5 className="hover:outline-3 px-2 py-1 outline-black text-xl text-normal font-bold rounded-lg tooltip tooltip-primary tooltip-right cursor-pointer" data-tip="Catalogo Lootly">Lootly</h5>
                </Link>
            </div>
            <div className="navbar-end gap-5">
                <p className="hidden md:block text-normal font-bold">Ciao {user ? user.user_metadata.username : 'utente'} <PiHandWavingFill className="inline text-2xl"/></p>
                { user ? <NavUserAvatar signOut={signOut}/> : <NavGuestAvatar /> }
            </div>
        </div>
    )
}

export default NavBar