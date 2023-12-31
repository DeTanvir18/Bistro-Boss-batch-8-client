import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const NavBar = () => {
    const { user, logOut } = useAuth();
    // console.log(user?.photoURL);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Successfully Logged Out",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.log(error))

    }

    const navOptions = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salads'>Order Food</NavLink></li>
        <li><NavLink to='/secret'>Secret</NavLink></li>
        {
            user ?
                <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut} className="btn btn-ghost btn-xs">Logout</button>
                </>
                :
                <>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </>
        }
    </>


    return (
        <>
            <div className="navbar fixed z-20 bg-opacity-40 bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;