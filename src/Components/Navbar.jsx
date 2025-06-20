import { Link } from "react-router"
import NavUserAvatar from "./NavUserAvatar"
import NavGuestAvatar from "./NavGuestAvatar"

function NavBar(){
    const user = null
    return (
        <div className="navbar bg-[yellow] shadow-sm rounded-xl mt-2 text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle tooltip tooltip-right tooltip-primary" data-tip="Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                    tabIndex={0}
                    className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[yellow]">
                        <Link to={'/'}><li>Home</li></Link>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl text-normal font-black rounded-lg tooltip tooltip-right tooltip-primary" data-tip="Torna su" href="#">Lootly</a>
            </div>
            <div className="navbar-end gap-5">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto text-black border-2 border-black rounded-lg"/>
                { user ? <NavUserAvatar /> : <NavGuestAvatar /> }
            </div>
        </div>
    )
}

export default NavBar