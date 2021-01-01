import * as React from "react"
import styled from "styled-components"
import { useContext } from 'react';
import { ThemeContext } from 'styled-components'


const HeroContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f580;
    background-image: ${props => props.theme.heroBackground};

    p {
        font-size: 1.7rem;
    }
    

`

const ButtonContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;

    button {
        margin: 0 30px;
    }

`

const BackgroundVideo = styled.video`
    position: fixed;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    z-index: -100;
    top: 0;
    left: 0;

`

const BackgroundNight = styled.img`
    opacity: ${props => props.theme.heroDarkMode};
    position: fixed;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    z-index: -50;
`

const Test = styled.h3`
    color: ${props => props.theme.test};

`


 export const Hero = (props) => {
     const themeContext = useContext(ThemeContext);
     console.log("Current theme: ", themeContext.themeName)

     const theme = themeContext.themeName;



    return (
        <HeroContainer>
            <h1>Hey, I'm Andrew</h1>
            <p>I'm a web developer, UI designer, and multimedia producer</p>
            <ButtonContainer>
                <button>View Projects</button>
                <button>Get in Touch</button>
            </ButtonContainer>
            <BackgroundNight src={require("./../images/seattle-night.webp")}></BackgroundNight>
            <BackgroundVideo autoPlay muted loop poster={require("./../images/seattle-day.webp")}>
                <source src={require("./../videos/seattle-animated.webm")}
                        type="video/webm"></source>
            </BackgroundVideo>

            <Test>{theme}</Test>

        </HeroContainer>
    )
}

