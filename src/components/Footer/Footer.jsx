// import { Link } from "react-router";
import {
    FaFacebook,
    FaYoutube,
    FaLinkedin,
    FaTwitter,
    FaGithub,
} from "react-icons/fa";
import logoImg from "../../assets/logo-f.avif";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-10">

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 p-10">

                {/* Brand */}

                <aside className="flex items-center gap-4">

                    {/* Logo */}
                    <img
                        src={logoImg}
                        alt="logo"
                        className="w-14 h-14 object-contain"
                    />

                    {/* Text */}
                    <div>
                        <h2 className="text-2xl font-bold leading-tight">
                            <span className="text-primary">De</span>
                            <span>
                                <span className="text-purple-700">vH</span>ire
                            </span>
                        </h2>

                        <p className="text-sm opacity-70">
                            Find your dream job or hire top talent easily.
                        </p>
                    </div>

                </aside>


                {/* Services */}
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Job Posting</a>
                    <a className="link link-hover">Job Search</a>
                    <a className="link link-hover">Career Guidance</a>
                </nav>

                {/* Legal */}
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Use</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookies Policy</a>
                </nav>

                {/* Social */}
                <nav>
                    <h6 className="footer-title">Social</h6>

                    <div className="flex gap-4 text-xl mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"
                            className="hover:text-blue-600 transition">
                            <FaFacebook />
                        </a>

                        <a href="https://youtube.com" target="_blank" rel="noreferrer"
                            className="hover:text-red-600 transition">
                            <FaYoutube />
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                            className="hover:text-blue-700 transition">
                            <FaLinkedin />
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noreferrer"
                            className="hover:text-sky-500 transition">
                            <FaTwitter />
                        </a>

                        <a href="https://github.com" target="_blank" rel="noreferrer"
                            className="hover:text-gray-800 transition">
                            <FaGithub />
                        </a>
                    </div>
                </nav>
            </div>

            {/* Bottom */}
            <div className="text-center py-4 border-t border-base-300 text-sm opacity-70">
                © {new Date().getFullYear()} DevHire. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;