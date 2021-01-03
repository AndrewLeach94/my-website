import * as React from "react"
import styled from "styled-components"
import { SiJavascript, SiAdobecreativecloud } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaReact, FaSketch, FaUsers } from 'react-icons/fa';

const SkillsParent = styled.section`
    background-color: var(--surface_base);
    padding: 100px 10%;

    h2 {
        margin: 0;
    }
`

const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`

const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
    p {
        font-size: 1.7rem;
        margin: auto;
        margin-top: 10px;
    }

    svg {
        font-size: 4.2rem;
    }

    img {
        max-width: 50%;
        max-height: 50%;
    }

`

export const Skills = () => {
    return(
        <SkillsParent id="section_skills">
            <h2>Skills</h2>
            <p>Safe to say I'm a visual person</p>
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
                    <p>Adobe CC</p>
                </SkillContainer>
                <SkillContainer>
                    <FaSketch />
                    <p>Sketch</p>
                </SkillContainer>
                <SkillContainer>
                    <FaUsers />
                    <p>UX Process</p>
                </SkillContainer>
                <SkillContainer>
                    <p>Lottie Animations</p>
                </SkillContainer>
            </SkillGrid>
        </SkillsParent>
    )
}