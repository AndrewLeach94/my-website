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
    background-color: ${props => props.theme.heroBackgroundColor};
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
    opacity: ${props => props.theme.heroNightImageOpacity};
    position: fixed;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    z-index: -50;
`

 export const Hero = (props) => {

    return (
        <HeroContainer>
            <h1>Hey, I'm Andrew</h1>
            <p>I'm a web developer and multimedia designer</p>
            <ButtonContainer>
                <button>View Projects</button>
                <button>Get in Touch</button>
            </ButtonContainer>
            <BackgroundNight src={require("./../images/seattle-night.webp")}></BackgroundNight>
            <BackgroundVideo autoPlay muted loop poster={require("./../images/seattle-day.webp")}>
                <source src={require("./../videos/seattle-animated.webm")}
                        type="video/webm"></source>
            </BackgroundVideo>
        </HeroContainer>
    )
}
