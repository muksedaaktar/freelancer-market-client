import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImg from "../../assets/login.jpg";
import { AuthContext } from "../../contexts/AuthContexts";
import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

  const { signInUser, signInWithGoogle } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // redirect path
  const from = location.state || "/";

  // Email Password Login
  const handleLogin = (e) => {

    e.preventDefault();

    setErrorMessage("");

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {

        console.log(result.user);

        toast.success("Login Successful 🎉");

        navigate(from);
      })
      .catch((error) => {

        console.log(error);

        setErrorMessage("Invalid email or password");

        toast.error(error.message);
      });
  };

  // Google Login
  const handleGoogleLogin = () => {

    signInWithGoogle()
      .then((result) => {

        console.log(result.user);

        toast.success("Google Login Successful 🎉");

        navigate(from);
      })
      .catch((error) => {

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
            src={loginImg}
            alt="Login"
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
              Welcome Back
            </h1>

            <p className="text-center text-gray-500 mb-6">
              Login to your DevHire account
            </p>

            <form onSubmit={handleLogin}>

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

              {/* Forget Password */}
              <div className="text-right mb-3">
                <a className="text-sm text-primary hover:underline cursor-pointer">
                  Forget Password?
                </a>
              </div>

              {/* Error Message */}
              {
                errorMessage && (
                  <p className="text-red-500 text-sm mb-3">
                    {errorMessage}
                  </p>
                )
              }

              {/* Login Button */}
              <button className="btn btn-primary w-full mb-4">
                Login
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

            {/* Register Redirect */}
            <p className="text-center mt-5 text-sm">

              Don&apos;t have an account?

              <Link
                to="/register"
                className="text-primary font-semibold ml-1 hover:underline"
              >
                Register
              </Link>

            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;