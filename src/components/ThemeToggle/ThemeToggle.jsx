import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="btn btn-circle btn-outline border-0"
            title="Toggle Theme"
        >
            {theme === "light" ? <FaMoon className="text-yellow-200 text-xl" /> : <FaSun className="text-white text-xl" />}
        </button>
    );
};

export default ThemeToggle;