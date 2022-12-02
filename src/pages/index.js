import * as React from "react"
import HomePage from "./home"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"





const IndexPage = (props) => {
  return (
    <div id="App">
      <Helmet>
        <title>Andrew Leach Design</title>
      </Helmet>
        <HomePage />
    </div>
  )
}

IndexPage.Layout = Layout
export default IndexPage
