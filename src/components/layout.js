import React from "react"
import { useState, useEffect } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Navigation } from "./navBar"
import "fontsource-barlow"
import "fontsource-trocchi"


// Dynamic theme elements are defined here

export const defaultTheme = {
    themeName: "default",

    surfaceLighter: "#FFF",
    surfaceBase: "#F3F3F3",

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

    surfaceLighter: "#1c1b1bb8",
    surfaceBase: "#121212", //recomended by Material Design
    fontColor: "#f3f3f3",

    primaryColor: "#3f00ff",

    //button styles
    buttonBackground: "#3f00ffb3",
    buttonBorder: "dotted 1px #6e3fff;",
    buttonShadow: "0 0 10px 1px #476dffa1",
    
    //home page hero background
    heroNightImageOpacity: "100%",
    heroBackgroundColor: "#0000009e",

    //homepage case study background overlay
    caseStudyVideoOverlay: "linear-gradient(144deg,rgba(64, 20, 199, 0.65) 0%,rgba(0, 0, 0, 0.90) 70%)",

};


//the global styles are listed here so they can be wrapped in a gatsby layout component 

export const GlobalStyles = createGlobalStyle`
      :root {
        --surface_lighter: ${props => props.theme.surfaceLighter};
        --surface_base: ${props => props.theme.surfaceBase};
        
        --primary_base: ${props => props.theme.primaryColor};
        
        --on_primary: #F3F3F3;
        --on_surface: ${props => props.theme.fontColor};
    }

    html {
        font-size: 16px;
        line-height: 1.5;
        font-family: 'Barlow', sans-serif;
    }

    body {
        margin: 0;
        color: var(--on_surface);
        background-color: var(--surface_base);
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }

    h1 {
      font-family: 'Trocchi', sans-serif;
      font-size: 5.61rem;
        
        @media (max-width: 500px) {
          font-size: 3.1rem;
          text-align: center;
        }
    }

    h2 {
        font-size: 4.21rem;
        font-family: 'Trocchi', sans-serif;

        @media (max-width: 500px) {
          font-size: 3.1rem;
        }
    }

    p {
        font-size: 1rem;
    }

    button {
        min-width: 100px;
        font-size: 1rem;
        padding: 15px 20px;
        color: var(--on_primary);
        background-color: ${props => props.theme.buttonBackground};
        border: ${props => props.theme.buttonBorder};
        border-radius: 3px;
    }

    button:hover {
        box-shadow: ${props => props.theme.buttonShadow};
    }



    .button_primary {
        text-decoration: none;
        text-align: center;
        min-width: 5rem;
        max-width: 10rem;
        font-size: 1rem;
        padding: 15px 20px;
        color: var(--on_primary);
        background-color: ${props => props.theme.buttonBackground};
        border: ${props => props.theme.buttonBorder};
        border-radius: 5px;
        transition: 0.2s;

        :hover {
          box-shadow: ${props => props.theme.buttonShadow};
          transition: 0.5s;
        }
    }

    .button_secondary {
        display: inline-block;
        text-decoration: none;
        font-size: 1rem;
        padding-bottom: 5px;
        font-weight: 700;
        color: var(--on_surface);
        margin-bottom: 4px;

        :hover {
          border-bottom: 4px solid var(--primary_base);
          margin-bottom: 0;
        }
    }

    



    section {
      padding: 0 20px;

    }

`

// this component handles all the styled components themeing logic 
export default function Layout({ children }) {
    
// this logic sets up the theme swap functionality - the swap function is passed to the navBar component
  const [theme, setTheme] = useState("default");

  
  //this function automatically set the theme to the user's operating system setting
  const checkUserTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
      setTheme("dark");
    }
  };


  const swapTheme = () => {
    if (theme === "default" ? setTheme("dark") : setTheme("default"));
  };

  useEffect(() => {
    checkUserTheme();
    
    //watch for user changes
    window.addEventListener("change", checkUserTheme);

    return function cleanUp() {
      window.removeEventListener("change", checkUserTheme);
    }
    
  })


  return (
    <React.Fragment>
      <ThemeProvider theme={theme === "default" ? defaultTheme : darkTheme}>
      <GlobalStyles />
        <Navigation changeTheme={swapTheme}/>
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}