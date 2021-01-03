import * as React from "react"
import { Hero } from "../components/hero"
import { Skills } from "../components/section_skills"


export const HomePage = () => {
    return(
        <div id="homePage">
            <Hero />
            <Skills />
        </div>
    )
};