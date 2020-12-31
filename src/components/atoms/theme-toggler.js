import * as React from "react"
import { useState } from "react"
import {defaultTheme, darkTheme, GlobalStyles } from "../../themes"
import { ThemeProvider } from "styled-components"


export const ThemeToggler = () => {
  const [theme, setTheme] = useState("default");

  const swapTheme = () => {
    if (theme === "default" ? setTheme("dark") : setTheme("default"));
  };

  return (
    <ThemeProvider theme={theme === "default" ? defaultTheme : darkTheme}>
    <GlobalStyles />
    <button onClick={() => swapTheme()}>Change Theme</button>
  </ThemeProvider>
  )
};