import React from 'react';
import Layout from "./Layout";
import ThemeContext, {themes} from "./theme-context";
import './App.css'

function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Layout/>
        </ThemeContext.Provider>
    );
}

export default App
