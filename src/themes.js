import { createGlobalStyle } from "styled-components"

export const defaultTheme = {
    body: "#fff",
    fontColor: "000",
};

export const darkTheme = {
    body: "#000",
    fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle `

    body {
        color: ${props => props.theme.fontColor};
        background-color: ${props => props.theme.body};
    }
`