import React from 'react'

export const themes = {
    dark: {
        color: 'white',
        background: 'black',
    },
    red: {
        color: 'black',
        background: 'red'
    }
}

const ThemeColorBackground = React.createContext('themes.dark')

export default ThemeColorBackground
