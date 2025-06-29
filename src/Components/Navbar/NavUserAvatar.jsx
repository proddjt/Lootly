import { RiUserSettingsFill, RiPokerHeartsFill, RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router";
import { useContext } from "react";
import AvatarUrlContext from "../../Context/AvatarUrlContext";
import supabase from "../../supabase/supabase-client";

function NavUserAvatar ({signOut}){
    const {avatarUrl} = useContext(AvatarUrlContext);
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    {
                        avatarUrl ?
                        <img
                        alt="Immagine profilo user"
                        src={avatarUrl}
                        loading='lazy'/> :
                        <img
                        alt="Immagine profilo user"
                        src="./download.png"
                        loading='lazy'/>
                    }
                    
                </div>
            </div>
            <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[yellow]">
                <Link to={'/profile'}><li className="py-1 font-semibold bg-neutral-700 hover:bg-neutral-500"><p><RiUserSettingsFill className="inline text-2xl"/>Il mio profilo</p></li></Link>
                <Link to={'/games/favorites'}><li className="py-1 font-semibold bg-neutral-700 hover:bg-neutral-500"><p><RiPokerHeartsFill className="inline text-2xl"/>I miei preferiti</p></li></Link>
                <button className="text-start" onClick={signOut}><li className="py-1 font-semibold bg-neutral-700 hover:bg-neutral-500"><p><RiLogoutBoxLine className="inline text-2xl"/>Logout</p></li></button>
            </ul>
        </div>
    )
}

export default NavUserAvatar