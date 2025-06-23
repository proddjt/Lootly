import { RiLoginBoxLine } from "react-icons/ri";
import { Link } from "react-router";

function NavGuestAvatar (){
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                    alt="Tailwind CSS Navbar component"
                    src="https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg" />
                </div>
            </div>
            <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[yellow]">
                <Link to={'/login'}><li className="py-1 font-semibold bg-neutral-700 hover:bg-neutral-500"><p><RiLoginBoxLine className="inline text-2xl"/>Accedi</p></li></Link>
            </ul>
        </div>
    )
}

export default NavGuestAvatar