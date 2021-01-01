import { createGlobalStyle } from "styled-components"

// Dynamic theme elements are defined here

export const defaultTheme = {
    body: "var(--surface_base-default)",
    fontColor: "var(--on_surface-light)",
    buttonBackground: "var(--primary_base-default)",
    buttonBorder: "solid 1px var(--primary_base-default)",
};

export const darkTheme = {
    body: "#000",
    fontColor: "#fff",
    buttonBackground: "var(--primary_base-darkTheme)",
    buttonBorder: "dotted 1px #4f90ff",
    buttonShadow: "0 0 5px 0px #4f90ffd1",
};

// The global styles are defined here 

export const GlobalStyles = createGlobalStyle `

    :root {
        --surface_base-default: #F3F3F3;
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