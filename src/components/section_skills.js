import * as React from "react"
import styled from "styled-components"
import { SiJavascript, SiAdobecreativecloud } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaReact, FaSketch, FaUsers } from 'react-icons/fa';
import { AnimatedLogo } from "./animations/animated-logo";



const SkillsParent = styled.section`
    background-color: var(--surface_base);
    padding: 100px 10%;

    h2 {
        margin: 0;
    }

    p {
        margin: 0;
        font-size: 1.7rem;

        @media (max-width: 500px) {
            font-size: 1.3rem;
        }
    }
`

const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 60px;
    margin-top: 60px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 500px) {
        row-gap: 100px;
    }
`

const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
    p {
        font-size: 1.3rem;
        margin: auto;
        margin-top: 10px;
        text-align: center;
    }

    svg {
        font-size: 4.2rem;
    }

    //this targets the lottie animation container
    div {
        width: 100px;
        height: 75px;
        filter: saturate(0%)
    }


`

export const Skills = () => {
    return(
        <SkillsParent id="section_skills">
            <h2>Skills</h2>
            <p>Suffice to say I'm a visual person</p>
            <SkillGrid>
                <SkillContainer>
                    <FaHtml5 />
                    <p>HTML</p>
                </SkillContainer>
                <SkillContainer>
                    <FaCss3Alt />
                    <p>CSS</p>
                </SkillContainer>
                <SkillContainer>
                    <SiJavascript />
                    <p>JavaScript</p>
                </SkillContainer>
                <SkillContainer>
                    <FaReact />
                    <p>React</p>
                </SkillContainer>
                <SkillContainer>
                    <SiAdobecreativecloud />
                    <p>Adobe Creative Cloud</p>
                </SkillContainer>
                <SkillContainer>
                    <FaSketch />
                    <p>Sketch</p>
                </SkillContainer>
                <SkillContainer>
                    <FaUsers />
                    <p>UX Design Process</p>
                </SkillContainer>
                <SkillContainer>
                    {/* imports the lottie animation */}
                    <AnimatedLogo />
                    <p>Lottie Animations</p>
                </SkillContainer>
            </SkillGrid>
        </SkillsParent>
    )
}