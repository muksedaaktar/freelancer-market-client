import { FcGoogle } from "react-icons/fc";
import registerImg from "../../assets/register.jpg";
import { AuthContext } from "../../contexts/AuthContexts";
import { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const Register = () => {

    const { signInWithGoogle, createUser } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = (e) => {

        e.preventDefault();

        setErrorMessage("");

        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        // Password Validation

        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setErrorMessage("Password must contain at least one uppercase letter");
            return;
        }

        if (!/[a-z]/.test(password)) {
            setErrorMessage("Password must contain at least one lowercase letter");
            return;
        }

        // Create User

        createUser(email, password)
            .then(async result => {

                console.log(result.user);
                const currentUser = auth.currentUser;

                await updateProfile(currentUser, {
                    displayName: name,
                    photoURL: photo
                });

                console.log("Firebase user:", currentUser);

                const newUser = {
                    name,
                    email,
                    image: photo
                };

                // Save to backend
                const res = await fetch('https://freelancer-market-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                });

                const data = await res.json();
                console.log("Saved user:", data);

                toast.success("Account Created Successfully 🎉");

                navigate('/');

            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            });
    };

    const handleGoogleLogin = () => {

        signInWithGoogle()
            .then(result => {

                console.log(result.user);

                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }

                // create user in the database
                fetch('https://freelancer-market-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Data after user save', data);

                        toast.success("Google Login Successful");
                        navigate('/');
                    })


            })
            .catch(error => {

                console.log(error);

                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 overflow-hidden">
            <div className="hero-content flex-col lg:flex-row-reverse gap-16">

                {/* Image Section */}
                <div
                    className="w-full lg:w-[60%] flex justify-center"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                >
                    <img
                        src={registerImg}
                        alt="Register"
                        className="w-full max-w-xl mx-auto"
                    />
                </div>

                {/* Form Section */}
                <div
                    className="card bg-base-100 w-full max-w-md shadow-2xl"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                >
                    <div className="card-body">

                        <h1 className="text-4xl font-bold text-center mb-2">
                            Register Now
                        </h1>

                        <p className="text-center text-gray-500 mb-6">
                            Create your freelancer account
                        </p>

                        <form onSubmit={handleRegister}>

                            {/* Name */}
                            <div className="form-control mb-4">

                                <label className="label">
                                    <span className="label-text font-semibold">
                                        Full Name
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            {/* Photo URL */}
                            <div className="form-control mb-4">

                                <label className="label">
                                    <span className="label-text font-semibold">
                                        Photo URL
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Enter photo URL"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="form-control mb-4">

                                <label className="label">
                                    <span className="label-text font-semibold">
                                        Email
                                    </span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="form-control mb-2">

                                <label className="label">
                                    <span className="label-text font-semibold">
                                        Password
                                    </span>
                                </label>

                                <div className="relative">

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter your password"
                                        className="input input-bordered w-full"
                                        required
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-4 text-gray-500"
                                    >
                                        {
                                            showPassword
                                                ? <FaEyeSlash size={18} />
                                                : <FaEye size={18} />
                                        }
                                    </button>

                                </div>
                            </div>

                            {/* Error Message */}
                            {
                                errorMessage && (
                                    <p className="text-red-500 text-sm mb-3">
                                        {errorMessage}
                                    </p>
                                )
                            }

                            {/* Register Button */}
                            <button className="btn btn-primary w-full mb-4">
                                Register
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="divider">OR</div>

                        {/* Google Login */}
                        <button
                            onClick={handleGoogleLogin}
                            className="btn bg-white text-black border border-gray-300 hover:bg-gray-100 w-full"
                        >
                            <FcGoogle className="text-2xl" />
                            Continue with Google
                        </button>

                        {/* Login Redirect */}
                        <p className="text-center mt-5 text-sm">
                            Already have an account?

                            <Link
                                to="/login"
                                className="text-primary font-semibold ml-1 hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;