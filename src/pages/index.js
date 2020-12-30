import * as React from "react"
import { useState } from "react"
import { HomePage } from "./home"
import {defaultTheme, darkTheme, GlobalStyles } from "../themes"
import { ThemeProvider } from "styled-components"


const IndexPage = () => {
  const [theme, setTheme] = useState("default");

  const themeToggler = () => {
    if (theme === "default" ? setTheme("dark") : setTheme("default"));
  };

  return (
    <ThemeProvider theme={theme === "default" ? defaultTheme : darkTheme}>
      <GlobalStyles />
      <HomePage />
      <button onClick={() => themeToggler()}>Change Theme</button>
    </ThemeProvider>
  )
}

export default IndexPage
