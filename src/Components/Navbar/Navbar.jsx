import { Link } from "react-router"
import { PiHandWavingFill } from "react-icons/pi";
import { RiHome3Fill } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import supabase from "../../supabase/supabase-client";
import { useContext } from "react";
import { useMessageStore } from "../../App";

import NavUserAvatar from "./NavUserAvatar"
import NavGuestAvatar from "./NavGuestAvatar"
import SessionContext from "../../Context/SessionContext";


function NavBar(){
    const {session} = useContext(SessionContext);
    const user = session ? session.user : null
    
    const setMessage = useMessageStore((state) => state.setMessage);
    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) console.log(error);
        setMessage("Logout avvenuto con successo")
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
                        <Link to={'/reviews'}><li className="ps-2 py-1 font-semibold bg-neutral-700 hover:bg-neutral-500"><p><MdRateReview className="inline text-2xl"/>Reviews</p></li></Link>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to={'/catalog'}>
                    <h5 className="hover:outline-3 px-2 py-1 outline-black text-xl text-normal font-black rounded-lg tooltip tooltip-primary tooltip-right cursor-pointer" data-tip="Catalogo Lootly">Lootly</h5>
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