import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { NavBar } from "./navBar"
import { useState } from "react"


// Dynamic theme elements are defined here

export const defaultTheme = {
    themeName: "default",

    body: "#F3F3F3",
    fontColor: "var(--on_surface-light)",
    
    // button styles
    buttonBackground: "var(--primary_base-default)",
    buttonBorder: "solid 1px var(--primary_base-default)",

    //homepage hero background
    heroNightImageOpacity: "0%",
    heroBackgroundColor: "#f5f5f580",

};

export const darkTheme = {
    themeName: "dark",

    body: "#000",
    fontColor: "#fff",

    //button styles
    buttonBackground: "var(--primary_base-darkTheme)",
    buttonBorder: "dotted 1px #4f90ff",
    buttonShadow: "0 0 5px 0px #4f90ffd1",
    
    //home page hero background
    heroNightImageOpacity: "100%",
    heroBackgroundColor: "#0000009e",
};


//the global styles are listed here so they can be wrapped in a gatsby layout component 

export const GlobalStyles = createGlobalStyle`
      :root {
        --surface_base: ${props => props.theme.body};
        --primary_base-default: #B63232;
        --primary_base-darkTheme: #001F54;
        
        --on_primary: #F3F3F3;
        --on_surface-light: #2C2C2C;
    }

    html {
        font-size: 16px;
        line-height: 1.5;
        font-family: 'Courier Prime', monospace;
    }

    body {
        margin: 0;
        color: ${props => props.theme.fontColor};
        background-color: ${props => props.theme.body};
    }

    h1 {
        font-size: 5.61rem;
    }

    h2 {
        font-size: 4.21rem;
    }

    button {
        font-size: 1rem;
        font-family: 'Courier Prime', monospace;
        padding: 15px 20px;
        color: var(--on_primary);
        background-color: ${props => props.theme.buttonBackground};
        border: ${props => props.theme.buttonBorder};
    }

    button:hover {
        box-shadow: ${props => props.theme.buttonShadow};
    }

`
export default function Layout({ children }) {
    
// this logic sets up the theme swap functionality - the swap function is passed to the navBar component
  const [theme, setTheme] = useState("default");

  const swapTheme = () => {
    if (theme === "default" ? setTheme("dark") : setTheme("default"));
  };


  return (
    <React.Fragment>
      <ThemeProvider theme={theme === "default" ? defaultTheme : darkTheme}>
      <GlobalStyles />
        <NavBar changeTheme={swapTheme}/>
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}