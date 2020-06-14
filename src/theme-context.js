import React from 'react'
import {black, white} from "color-name";

export const themes = {
    dark: {
        color: white,
        backGround: black,
    },
    light: {
        color: black,
        background: white
    }
}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext
