import { Outlet } from "react-router"
import NavBar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer"

function Layout() {
    return(
        <>
            <div className="px-5 main-bg">
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Layout