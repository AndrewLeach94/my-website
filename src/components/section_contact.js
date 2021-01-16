import * as React from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const ContactParent = styled.section`
    background-color: var(--surface_lighter);
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    padding: 180px 20px;
    clip-path: polygon(100% 0px, 100% 100%, 0% 100%, 0% 0%, 50% 20vh);
    font-size: 2.3rem;

    h2 {
        font-size: 5.61rem;
        background: linear-gradient(-90deg, #0000 50% , var(--primary_base) 50%);
        background-size: 200%;
        background-position-x: -100%;
        padding: 0 20px;
        transition: 0.2s;
        border-radius: 3px;


        :hover {
            background-position-x: -200%;
            color: var(--on_primary);
            transition: 0.2s;
            cursor: pointer;
            transform: scale(1.02);
        }

    }

    a {
        color: inherit;
        outline: none;
        display: inline-table;
        align-self: center;
        text-decoration: none;
    }

    @media (min-height: 900px) {
        clip-path: polygon(100% 0px, 100% 100%, 0% 100%, 0% 0%, 50% 15vh);

    }

    @media (max-width: 560px) {
        font-size: 1.3rem;

        h2 {
            font-size: 2.3rem;
        }

    }
`

const IconContainer = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    transition: 0.5s;

    svg {
        font-size: 2.3rem;
        margin: 0 15px;
    }

    a {
        :hover {
            color: var(--primary_base);
            transition: 0.5s;
        }
    }

`

const Background = styled.div`
    background-color: var(--surface_base);

`

// this hack is necessary since clip-path cuts of the box shadow of the element
const ShadowWrapper = styled.div`
    filter: drop-shadow(0px -2px 10px #00000029);
`

export const ContactSection = (props) => {
    return(
        <Background>
            <ShadowWrapper>
                <ContactParent>
                    <p>I'm available for work.</p>
                    <a href="mailto:andrew_leach@outlook.com">
                        <h2>Let's talk!</h2>
                    </a>
                    <IconContainer>
                        <a href="https://github.com/AndrewLeach94" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/andrew-leach-design/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/andrewleach94" target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a>
                    </IconContainer>
                </ContactParent>
            </ShadowWrapper>
        </Background>

    )
}