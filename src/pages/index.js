import * as React from "react"
import { HomePage } from "./home"
import {defaultTheme, GlobalStyles } from "../themes"
import { ThemeProvider } from "styled-components"


const IndexPage = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  )
}

export default IndexPage
