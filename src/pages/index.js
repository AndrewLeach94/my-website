import * as React from "react"
import { HomePage } from "./home"
import {defaultTheme, darkTheme, GlobalStyles } from "../themes"
import { ThemeProvider } from "styled-components"


const IndexPage = () => {

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  )
}

export default IndexPage
