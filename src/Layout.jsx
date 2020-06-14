import React, {useContext} from "react";
import ThemeColorBackground from "./theme-context";

const Layout = () => {

    const theme = useContext(ThemeColorBackground)

    return (
        <div style={theme}>
            <p id='theme'>here you can easily change "theme" by using React hook<h2>useContext</h2></p>
        </div>
    )
};

export default Layout

