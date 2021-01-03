import * as React from "react"
import { HomePage } from "./home"
import Layout from "../components/layout"




const IndexPage = (props) => {
  return (
    <div id="App">
      {/* the layout component contains all the global CSS and theme functionality*/}
      <Layout >
        <HomePage />
      </Layout>
    </div>
  )
}

export default IndexPage
