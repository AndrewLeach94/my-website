import * as React from "react"
import { Hero } from "../components/hero"
import { Skills } from "../components/section_skills"
import { Bio } from "../components/section_bio"
import { CaseStudyPromo, CaseStudyPromoReversed } from "../components/section_case-study-preview"
import { RecordCollection } from "../components/record-collection"
import { ContactSection } from "../components/section_contact"

import designSystemPromo from "./../videos/TORSH-Design-System-Promo.webm"
import designSystemPromoPlaceholder from "./../images/placeholders/torsh-design-system.webp"
import NOLATransitPromo from "./../videos/nola-transit.webm"
import NOLATransitPlaceholder from "./../images/placeholders/nola-transit.webp"
import weatherNowPromo from "./../videos/weather-now.webm"
import weatherNowPromoPlaceholder from "./../images/placeholders/weather-now.webp"
import forgotPasswordPromo from "./../videos/forgot-password.webm"
import forgotPasswordPromoPlaceholder from "./../images/placeholders/forgot-password.webp"
import Layout from "../components/layout"


 const HomePage = () => {
    return(
        <div id="homePage">
        <Layout>
            <Hero />
            <Skills />
            <CaseStudyPromo 
                caseStudyId= "1"
                title="NOLA Live Transit UI Overhaul"
                ctaMessage="View Website"
                
                featureHeader1="Designed for New Orleanians on the Move"
                featureDetails1="Users hunting for a bus need an app they could quickly reference from their phones."
                
                featureHeader2="Single Page Layout"
                featureDetails2="Designed specifically for every user action to be focused on a single page."
                
                source={NOLATransitPromo}
                poster={NOLATransitPlaceholder}
                URL="https://nolatransit.fly.dev/"
            />
            <CaseStudyPromo 
                caseStudyId= "2"
                title="Torsh Design System"
                ctaMessage="Read Case Study"
                
                featureHeader1="Central Source of Truth"
                featureDetails1="A design system built in Sketch to reduce inconsistencies in a growing design team."
                
                featureHeader2="Designed to Scale"
                featureDetails2="Defining the simplest UI 'atoms' saves a headache or two when the need comes to update complex components."

                source={designSystemPromo}
                poster={designSystemPromoPlaceholder}
                URL="./blog/torsh-design-system"
            />
            <CaseStudyPromo 
                caseStudyId= "3"
                title="WeatherNow"
                ctaMessage="View Project"
                
                featureHeader1="Powered by the OpenWeather API"
                featureDetails1="This web app pulls real-time weather conditions from OpenWeather. Metric and imperial units are supported."
                
                featureHeader2="Dynamic Weather Backgrounds"
                featureDetails2="Full-screen weather backgrounds update as the weather changes."

                source={weatherNowPromo}
                poster={weatherNowPromoPlaceholder}
                URL="https://github.com/AndrewLeach94/weather-app"
            />
            <CaseStudyPromoReversed 
                caseStudyId= "4"
                title="Forgot Password Redesign"
                ctaMessage="Read Case Study"
                
                featureHeader1="Redesigned for Clarity"
                featureDetails1="I improved the overall password reset UX that eased the pressure on customer support."
                
                featureHeader2="Utilized the Entire UX Process"
                featureDetails2="From early user-flow maps and wireframes to visual design and A/B testing, I covered the whole spectrum with this assignment."

                source={forgotPasswordPromo}
                poster={forgotPasswordPromoPlaceholder}
                URL="./blog/forgot-password-redesign"
            />
            <Bio />
            <RecordCollection />
            <ContactSection />
        </Layout>
        </div>
    )
};

export default HomePage