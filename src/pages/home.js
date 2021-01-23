import * as React from "react"
import { Hero } from "../components/hero"
import { Skills } from "../components/section_skills"
import { Bio } from "../components/section_bio"
import { CaseStudyPromo, CaseStudyPromoReversed } from "../components/section_case-study-preview"
import { RecordCollection } from "../components/record-collection"
import { ContactSection } from "../components/section_contact"

import designSystemPromo from "./../videos/TORSH-Design-System-Promo.webm"
import designSystemPromoPlaceholder from "./../images/placeholders/torsh-design-system.webp"
import CVPromo from "./../videos/cv-builder.webm"
import CVPromoPlaceholder from "./../images/placeholders/cv-builder.webp"
import weatherNowPromo from "./../videos/weather-now.webm"
import weatherNowPromoPlaceholder from "./../images/placeholders/weather-now.webp"
import Layout from "../components/layout"


 const HomePage = () => {
    return(
        <div id="homePage">
        <Layout>
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

                source={designSystemPromo}
                poster={designSystemPromoPlaceholder}
                URL=""
            />
            <CaseStudyPromoReversed
                caseStudyId= "2"
                title="Resume Builder"
                ctaMessage="View Project"
                
                featureHeader1="Built in React"
                featureDetails1="I figured a configurable resume builder would be an excellent opportunity to get up to speed with component states."
                
                featureHeader2="Easy to Use"
                featureDetails2="Sections of the resume can be easily modified with the ability to add, edit, and delete content."

                source={CVPromo}
                poster={CVPromoPlaceholder}
                URL="https://github.com/AndrewLeach94/cv-builder"
            />
            <CaseStudyPromo 
                caseStudyId= "3"
                title="Weather Now"
                ctaMessage="View Project"
                
                featureHeader1="Powered by the OpenWeather API"
                featureDetails1="This web app pulls real-time weather conditions from OpenWeather. Metric and imperial units are supported."
                
                featureHeader2="Dynamic Weather Backgrounds"
                featureDetails2="Full-screen weather backgrounds update as the weather changes."

                source={weatherNowPromo}
                poster={weatherNowPromoPlaceholder}
                URL="https://github.com/AndrewLeach94/weather-app"
            />
            <Bio />
            <RecordCollection />
            <ContactSection />
        </Layout>
        </div>
    )
};

export default HomePage