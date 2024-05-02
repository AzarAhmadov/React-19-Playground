import { FC, createContext, useState, use, ReactNode } from 'react'

type ThemeContextProps = {
    children: ReactNode;
}

// Create a context object
const ThemeContext = createContext<any>(null);

// Create a provider component
const ThemeProvider: FC<ThemeContextProps> = ({ children }) => {

    // State to hold the current theme
    const [theme, setTheme] = useState('light');

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        // Provide the theme and toggleTheme function to the children
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );

}

const ThemedCard = () => {

    // Access the theme context using the use() hook
    const { theme, toggleTheme } = use(ThemeContext);

    return (
        <div className={`card-container ${theme === 'light' ? 'light' : 'dark'}`}>
            <div className='card'>
                <h3> Card title </h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic aspernatur fugit ipsam dolore. Reprehenderit, temporibus!
                </p>
                <button onClick={toggleTheme}>
                    {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </button>
            </div>
        </div>
    )
}

const UseExampleContext: FC = () => {
    return (
        <ThemeProvider>
            <ThemedCard />
        </ThemeProvider>
    )
}

export default UseExampleContext
