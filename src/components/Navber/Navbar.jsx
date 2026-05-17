import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContexts";
import logoImg from "../../assets/logo-f.avif";

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser().catch(err => console.log(err));
    };

    const links = (
        <>

            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `font-semibold text-[16px] transition duration-300 ${isActive
                            ? "text-primary border-b-2 border-primary"
                            : "hover:text-primary"
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/allJobs"
                    className={({ isActive }) =>
                        `font-semibold text-[16px] transition duration-300 ${isActive
                            ? "text-primary border-b-2 border-primary"
                            : "hover:text-primary"
                        }`
                    }
                >
                    All Jobs
                </NavLink>
            </li>

            {user && (
                <>
                    <li>
                        <NavLink
                            to="/addjob"
                            className={({ isActive }) =>
                                `font-semibold text-[16px] transition duration-300 ${isActive
                                    ? "text-primary border-b-2 border-primary"
                                    : "hover:text-primary"
                                }`
                            }
                        >
                            Add Job
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/myJobs"
                            className={({ isActive }) =>
                                `font-semibold text-[16px] transition duration-300 ${isActive
                                    ? "text-primary border-b-2 border-primary"
                                    : "hover:text-primary"
                                }`
                            }
                        >
                            My Jobs
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/acceptedTask"
                            className={({ isActive }) =>
                                `font-semibold text-[16px] transition duration-300 ${isActive
                                    ? "text-primary border-b-2 border-primary"
                                    : "hover:text-primary"
                                }`
                            }
                        >
                             Accepted Tasks
                        </NavLink>
                    </li>
                </>
            )}

        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">

            {/* START */}
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        ☰
                    </div>

                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <div className="flex">
                    <img className="w-14 h-14 rounded-2xl" src={logoImg} alt="" />
                    <span className="text-2xl font-bold">
                        <span className="text-primary">De</span>
                        <span className="text-primary">
                            <span className="text-black">vH</span>ire
                        </span>
                    </span>
                </div>

            </div>

            {/* CENTER */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {/* END */}
            <div className="navbar-end">

                {user ? (
                    <div className="flex items-center gap-3">

                        <div className="relative group">
                            <img
                                src={user.photoURL || "https://i.ibb.co/2n0qQkZ/user.png"}
                                alt="user"
                                className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                            />

                            <div className="absolute right-0 top-12 hidden group-hover:block bg-base-200 text-sm px-3 py-1 rounded shadow">
                                {user.displayName || "No Name Set"}
                            </div>
                        </div>

                        <button
                            onClick={handleSignOut}
                            className="btn btn-primary btn-outline"
                        >
                            Logout
                        </button>

                    </div>
                ) : (
                    <>
                        <Link to="/register" className="btn btn-primary">
                            Register
                        </Link>

                        <Link to="/login" className="btn btn-outline btn-primary ml-2">
                            Login
                        </Link>
                    </>
                )}

            </div>

        </div>
    );
};

export default Navbar;