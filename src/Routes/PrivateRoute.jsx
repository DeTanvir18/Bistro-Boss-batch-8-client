import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to login first to get there!",
        footer: '<a href="#"></a>'
      });
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;