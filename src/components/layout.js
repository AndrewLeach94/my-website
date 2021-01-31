import React from "react"
import { useState, useEffect } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Navigation } from "./navBar"
import { Footer } from "./footer"
import { FaSun, FaRegMoon } from 'react-icons/fa';
import "fontsource-barlow"
import "fontsource-trocchi"


// Dynamic theme elements are defined here

export const lightTheme = {
    lightThemeName: "light",

    surfaceLighter: "#FFF",
    surfaceBase: "#F3F3F3",

    fontColor: "#121212",

    primaryColorLighter: "#D21A1A",
    primaryColor: "#B63232",
    
    // button styles
    buttonBorder: "solid 1px var(--primary_base)",
    buttonBackground: "#B63232", //same as primary
    buttonShadow: "none",

    //homepage hero background
    heroNightImageOpacity: "0%",
    heroBackgroundColor: "#f5f5f594",

    //homepage case study background overlay
    caseStudyVideoOverlay: "linear-gradient(144deg,rgba(182,50,50,0.84) 0%,rgba(243,243,243,0.85) 50%)",

};

export const darkTheme = {
    darkThemeName: "dark",

    surfaceLighter: "#1c1b1bb8",
    surfaceBase: "#121212", //recomended by Material Design
    fontColor: "#f3f3f3",

    primaryColorLighter: "#926eff",
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
        
        --primary_lighter: ${props => props.theme.primaryColorLighter};
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
        transition: 0.4s;
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-size: 1.3rem;
      font-weight: 700;
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
        background-color: var(--primary_base);
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
        padding-bottom: 4px;

        :hover {
          border-bottom: 4px solid var(--primary_base);
          padding-bottom: 0;
        }
    }

    section {
      padding: 0 20px;

    }

`

// this component handles all the styled components prefersDarkModeing logic 
export default function Layout({ children }) {
    

  /* It should be noted that I "force" the prefersDarkMode into light mode in the gatsby-ssr file during the 
  initial render of the page. Currently a bug somewhere between styled-components and gatsby hydration
  ONLY applies the correct global styles when dark mode is loaded on the server side. Ideally I'd like
  to come back to this and find a better workaround other than forcing the site in light mode on 
  initial render and the useEffect alternatives that produce a flicker when serving pages 
  are a bigger no-no*/
  const getSavedState = () => {
    if (typeof window != "undefined") {
      return JSON.parse(localStorage.getItem("prefersDarkMode"));
    }
  }

  const [prefersDarkMode, setPrefersDarkMode] = useState(getSavedState());
  
  // after a prefersDarkMode is applied, the settings are saved to local storage to be received when component mounts
  const swapTheme = () => {
      setPrefersDarkMode(!prefersDarkMode);
  }


  useEffect(() => {
    if (prefersDarkMode === true) {
      localStorage.setItem("prefersDarkMode", true);
    } else {
      localStorage.setItem("prefersDarkMode", false);
    }
  });
  
  

  return (
    <React.Fragment>
      <ThemeProvider theme={prefersDarkMode === true ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navigation swapTheme={swapTheme} buttonIcon={prefersDarkMode ? <FaRegMoon /> : <FaSun />} />
          {children}
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}