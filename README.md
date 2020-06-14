Motivation: to better understand concept of how we can use in react `useContext` hook [orignal info](https://reactjs.org/docs/hooks-reference.html#usecontext)
<img src="https://monosnap.com/image/lhWM7moUhrSPB5I0xFJHVj73bYahLZ"/>

#### When to Use Context
> Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the

## First - create the themes which you want to use
```javascript
export const themes = {
    dark: {
        color: 'white',
        background: 'black',
    },
    light: {
        color: 'black',
        background: 'white'
    }
}
```
## Second - add component `Layout.jsx` with `useContext` hook, which will return style of your selected theme
```javascript
const Layout = () => {
    const theme = useContext(ThemeColorBackground)

    return (
        <div style={theme}>
            <p id='theme'>here you can easily change "theme" by using React hook<h5>useContext(themes.dark)</h5></p>
        </div>
    )
};
```

## Third and last - add new layout theme to your main `App.js` with `.Provider` key and value e.g.`value={themes.dark}` or `value={themes.red}
```javascript
function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Layout/>
        </ThemeContext.Provider>
    );
}
```

### Usage:
- `yarn start`
- ![demo](useContextGif.gif)
