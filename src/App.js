import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Layout from "./Layout";
import ThemeContext, {themes} from "./theme-context";

function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Layout/>
        </ThemeContext.Provider>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement)

export default App
