import * as React from "react"
import { Hero } from "../components/hero"
import { Skills } from "../components/section_skills"
import { CaseStudyPromo } from "../components/section_case-study-preview"


export const HomePage = () => {
    return(
        <div id="homePage">
            <Hero />
            <Skills />
            <CaseStudyPromo 
                caseStudyId= "1"
                title="Torsh Design System"
                ctaMessage="Read Case Study"
                
                featureHeader1="Central Source of Truth"
                featureDetails1="A design system built in Sketch to reduce inconsistencies in a growing design team."
                
                featureHeader2="Designed to Scale"
                featureDetails2="Defining the simplest UI 'atoms' saves a headache or two when the need comes to update complex components."
            />
        </div>
    )
};