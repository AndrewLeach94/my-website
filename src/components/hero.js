import * as React from "react"
import styled from "styled-components"
import SeattleVideo from "./../videos/seattle-animated.webm"
import SeattlePoster from "./../images/placeholders/seattle-day.webp"
import SeattleDay from "./../images/placeholders/seattle-night.webp"

const HeroContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: ${props => props.theme.heroBackgroundColor};
    background-image: ${props => props.theme.heroBackground};

    p {
        font-size: 1.7rem;
        text-align: center;

        @media (max-width: 500px) {
            font-size: 1.3rem;
        }
    }
    

`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 500px) {
        flex-flow: column;
    }

    .button_primary {
        margin: 0 30px;

        @media (max-width: 500px) {
            margin: 30px 0;
        }
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

    @media (max-width: 500px) {
        object-fit: contain;
        left: 25%;
        transform: scale(3.5);
    }

`

const BackgroundNight = styled.img`
    opacity: ${props => props.theme.heroNightImageOpacity};
    position: fixed;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    z-index: -50;

    @media (max-width: 500px) {
        object-fit: contain;
        left: 25%;
        transform: scale(3.5);
    }

`

 export const Hero = (props) => {

    return (
        <HeroContainer id="home">
            <h1>Hey! I'm Andrew</h1>
            <p>I'm a Front-End and Multimedia Designer from Seattle</p>
            <ButtonContainer>
                <a href="#case-study-1" className="button_primary">View Projects</a>
                <a href="#contact" className="button_primary">Get in Touch</a>
            </ButtonContainer>
            <BackgroundNight alt="Seattle" src={SeattleDay} />
            <BackgroundVideo autoPlay muted loop poster={SeattlePoster}>
                <source src={SeattleVideo} type="video/webm"></source>
            </BackgroundVideo>
        </HeroContainer>
    )
}

