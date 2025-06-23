import { Outlet } from "react-router"
import NavBar from "./Components/Navbar/Navbar"

function Layout() {
    return(
        <>
            <div className="px-5">
                <NavBar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout