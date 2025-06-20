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
                <li><a>Accedi</a></li>
            </ul>
        </div>
    )
}

export default NavGuestAvatar