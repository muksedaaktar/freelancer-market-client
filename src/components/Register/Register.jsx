import { FcGoogle } from "react-icons/fc";
import registerImg from "../../assets/register.jpg";
import { AuthContext } from "../../contexts/AuthContexts";
import { use } from "react";

const Register = () => {


    const { signInWithGoogle } = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
    .then(result => {
            console.log(result.user)
        })
    .catch(error => {
        console.log(error)
    })
    // console.log("Google Login");
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
                    className="w-full max-w-md mx-auto"
                />
            </div>

            {/* Form Section */}
            <div
                className="card bg-base-100 w-full max-w-md shadow-2xl animate-slideRight"
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
                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">
                                    Password
                                </span>
                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

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
                        <span className="text-primary font-semibold cursor-pointer ml-1">
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
);
};

export default Register;