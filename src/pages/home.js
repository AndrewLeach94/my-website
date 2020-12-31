import * as React from "react"
import { NavBar } from "../components/navBar"
import { Hero } from "../components/hero"


export const HomePage = () => {
    return(
        <div id="homePage">
            <NavBar />
            <Hero />
        </div>
    )
};