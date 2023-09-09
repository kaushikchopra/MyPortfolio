import { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeState = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle dark/light mode
    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeState;

function useDarkTheme() {
    return useContext(ThemeContext);
}

export { useDarkTheme };
