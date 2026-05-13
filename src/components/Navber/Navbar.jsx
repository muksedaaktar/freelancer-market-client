import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContexts";
import logoImg from "../../assets/logo-f.avif"
const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser().catch();
    };

    const links = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            <li>
                <NavLink to="/allJobs">All Jobs</NavLink>
            </li>

            {user && (
                <li>
                    <NavLink to="/myJobs">My Jobs</NavLink>
                </li>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">

            {/* START */}
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex">
                    <img className="w-14 h-14 rounded-2xl" src={logoImg} alt="" />
                    <a className="btn diplomata btn-ghost text-2xl flex gap-0">
                        <span className="text-primary">De</span>
                        <span className="text-primary"><span className="text-black">vH</span>ire</span>
                    </a>
                </div>


            </div>

            {/* CENTER */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {/* END */}
            {/* END */}
            <div className="navbar-end">

                {user ? (
                    <div className="flex items-center gap-3">

                        {/* User Avatar with tooltip */}
                        <div className="relative group">
                            <img
                                src={user.photoURL || "https://i.ibb.co/2n0qQkZ/user.png"}
                                alt="user"
                                className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                            />

                            {/* Hover Name */}
                            <div className="absolute right-0 top-12 hidden group-hover:block bg-base-200 text-sm px-3 py-1 rounded shadow whitespace-nowrap">
                                {user.displayName || "No Name Set"}
                            </div>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={handleSignOut}
                            className="btn btn-primary btn-outline"
                        >
                            Logout
                        </button>

                    </div>
                ) : (
                    <>
                        <Link to="/register" className="btn btn-primary px-8 text-white text-lg rounded-xl shadow-lg hover:scale-105 transition duration-300">
                            Register
                        </Link>

                        <Link to="/login" className="btn btn-outline btn-primary ml-2 px-8 text-lg rounded-xl hover:scale-105 transition duration-300">
                            Login
                        </Link>
                    </>
                )}

            </div>

        </div>
    );
};

export default Navbar;