import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { NavBar } from "./navBar"
import { useState } from "react"


// Dynamic theme elements are defined here

export const defaultTheme = {
    themeName: "default",

    body: "#F3F3F3",
    fontColor: "#121212",

    primaryColor: "#B63232",
    
    // button styles
    buttonBorder: "solid 1px var(--primary_base)",
    buttonBackground: "#B63232", //same as primary
    buttonShadow: "none",

    //homepage hero background
    heroNightImageOpacity: "0%",
    heroBackgroundColor: "#f5f5f580",

    //homepage case study background overlay
    caseStudyVideoOverlay: "linear-gradient(144deg,rgba(182,50,50,0.84) 0%,rgba(243,243,243,0.85) 50%)",

};

export const darkTheme = {
    themeName: "dark",

    body: "#121212", //recomended by Material Design
    fontColor: "#f3f3f3",

    primaryColor: "#3f00ff",

    //button styles
    buttonBackground: "#3f00ffb3",
    buttonBorder: "solid 1px #5215ff",
    buttonShadow: "0 0 5px 2px #476dff",
    
    //home page hero background
    heroNightImageOpacity: "100%",
    heroBackgroundColor: "#0000009e",

    //homepage case study background overlay
    caseStudyVideoOverlay: "linear-gradient(144deg,rgba(64, 20, 199, 0.65) 0%,rgba(0, 0, 0, 0.90) 70%)",

};


//the global styles are listed here so they can be wrapped in a gatsby layout component 

export const GlobalStyles = createGlobalStyle`
      :root {
        --surface_base: ${props => props.theme.body};
        --primary_base: ${props => props.theme.primaryColor};
        
        --on_primary: #F3F3F3;
        --on_surface: ${props => props.theme.fontColor};
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

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }

    h1 {
        font-size: 5.61rem;
        
        @media (max-width: 500px) {
          font-size: 3.1rem;
          text-align: center;
        }
    }

    h2 {
        font-size: 4.21rem;

        @media (max-width: 500px) {
          font-size: 3.1rem;
          text-align: center;
        }
    }

    p {
      @media (max-width: 500px) {
          font-size: 1rem;
        }

    }

    button {
        min-width: 100px;
        font-size: 1rem;
        font-family: 'Courier Prime', monospace;
        padding: 15px 20px;
        color: var(--on_primary);
        background-color: ${props => props.theme.buttonBackground};
        border: ${props => props.theme.buttonBorder};
        border-radius: 3px;
    }

    button:hover {
        box-shadow: ${props => props.theme.buttonShadow};
    }

    section {
      padding: 0 20px;

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