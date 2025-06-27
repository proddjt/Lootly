import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import SessionContext from "../../Context/SessionContext";
import FullscreenLoader from "../FullscreenLoader";

function UserRoutes(){
    const { session, loading } = useContext(SessionContext);
    if (loading) {
        return <FullscreenLoader />
    }
    if (session) {
        return <Outlet />;
    }
    return <Navigate to="/login" />;
}

export default UserRoutes