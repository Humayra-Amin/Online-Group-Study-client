import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Spinner/Spinner";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [spinLoading, setSpinLoading] = useState(true);

    useEffect(() => {
        if (!spinLoading) {
            setSpinLoading(false)
        }
    }, [spinLoading])


    if (loading) {
        return <Spinner></Spinner>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;