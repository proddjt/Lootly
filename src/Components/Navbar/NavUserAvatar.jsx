import { RiUserSettingsFill, RiPokerHeartsFill, RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router";

function NavUserAvatar ({signOut}){
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    loading='lazy'/>
                </div>
            </div>
            <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[yellow]">
                <Link to={'/profile'}><li className="py-1 font-semibold bg-neutral-700 hover:bg-neutral-500"><p><RiUserSettingsFill className="inline text-2xl"/>Il mio profilo</p></li></Link>
                <Link to={'/reviews'}><li className="py-1 font-semibold bg-neutral-700 hover:bg-neutral-500"><p><RiPokerHeartsFill className="inline text-2xl"/>I miei preferiti</p></li></Link>
                <button className="text-start" onClick={signOut}><li className="py-1 font-semibold bg-neutral-700 hover:bg-neutral-500"><p><RiLogoutBoxLine className="inline text-2xl"/>Logout</p></li></button>
            </ul>
        </div>
    )
}

export default NavUserAvatar