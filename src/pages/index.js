import * as React from "react"
import HomePage from "./home"
import { Helmet } from "react-helmet"





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

export default IndexPage
