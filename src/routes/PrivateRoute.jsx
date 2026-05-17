import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContexts";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    }

    // not logged in → redirect to login
    if (!user) {
        return <Navigate to="/login" state={location.pathname} replace />;
    }

    // logged in → show page
    return children;
};

export default PrivateRoute;