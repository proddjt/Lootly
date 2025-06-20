function NavUserAvatar (){
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[yellow]">
                <li><a>Visualizza profilo</a></li>
                <li><a>I miei preferiti</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    )
}

export default NavUserAvatar