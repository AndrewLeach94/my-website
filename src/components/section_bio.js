import * as React from "react"
import styled from "styled-components"

const BioParent = styled.section`
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    background-color: var(--surface_base);
    padding: 180px 60px;

    p {
        width: 50%;
        font-size: 1.3rem;
    }

    h2 {
        width: 50%;
        text-align: center;
        z-index: 1;
    }

    img {
        position: absolute;
        width: 300px;
        right: 10%;
        bottom: 120px;
        filter: saturate(0%);
        opacity: 70%;

    }

    @media (max-width: 900px) {
        flex-direction: column;

        p {
            width: auto;
        }

        h2 {
            width: auto;
        }

        img {
            top: 30px;
            bottom: auto;
            opacity: 50%;
        }
    }

    @media (max-width: 500px) {
        padding: 120px 30px;
        img {
            left: auto;
            right: auto;
            width: 250px;
            opacity: 30%;
        }

        p {
            padding-top: 30px;
            font-size: 1rem;
        }
    }
`


export const Bio = (props) => {
    //fetch instagram feed will go here

    
    return(
        <BioParent id="about">
        <h2>
            Who Am I <br></br>Anyway?
        </h2>

        <p>
            I grew up just outside Seattle , went to college in New Orleans, and lived in Ireland for a couple years. 

            I initially began my career in multimedia and marketing before shifting towards UX but always told myself I'd become a developer if my career hit the fan.

            ... and then COVID happened. So here I am today!

            When I'm not developing UI's, you can find me creating music and editing video.
        </p>
        <img src={require("./../images/paris.webp")} alt="me in paris" />
        </BioParent>
    )
}