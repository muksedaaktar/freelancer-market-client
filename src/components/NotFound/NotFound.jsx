import { Link } from "react-router-dom";
import bgImage from "../../assets/404.avif";

const NotFound = () => {
    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgImage})`
            }}
        >

            {/* Overlay (important for readability) */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-white">

                <h1 className="text-7xl font-extrabold text-primary">
                    404
                </h1>

                <h2 className="text-2xl font-bold mt-4">
                    Page Not Found
                </h2>

                <p className="text-white/80 mt-2 max-w-md">
                    The page you are looking for doesn’t exist.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-block btn btn-primary px-8"
                >
                    Go Back Home
                </Link>

            </div>

        </div>
    );
};

export default NotFound;