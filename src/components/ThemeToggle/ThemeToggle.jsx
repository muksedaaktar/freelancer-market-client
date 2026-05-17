import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="btn btn-circle btn-outline"
            title="Toggle Theme"
        >
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
    );
};

export default ThemeToggle;