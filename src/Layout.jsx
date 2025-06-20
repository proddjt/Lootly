import NavBar from "./Components/Navbar"

function Layout({ children }) {
    return(
        <>
            <div className="px-5">
                <NavBar />
                {children}
            </div>
        </>
    )
}

export default Layout