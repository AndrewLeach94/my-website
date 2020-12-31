import * as React from "react"
import styled from "styled-components"

const HeroContainer = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 1.7rem;
    }
    

`

export const Hero = (props) => {
    return (
        <HeroContainer>
            <h1>Hey I'm Andrew</h1>
            <p>I'm a web developer, UI designer, and multimedia producer</p>
            <button>View Projects</button>
        </HeroContainer>
    )
}
