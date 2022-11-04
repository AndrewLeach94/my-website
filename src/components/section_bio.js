import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"
import Photo from "./../images/paris.webp"

const BioParent = styled.section`
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    background-color: var(--surface_base);
    padding: 11.25rem 3.75rem;

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
        bottom: 160px;
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
            <b>I'm Andrew - Formerly known as the advertising and video guy.</b>
            <br></br>
            <br></br>
            I began my tech career in UX Design and soon realized I loved the code going into designs just as much as the design itself.
            <br></br>
            <br></br>
            <i>Front-End Designer?</i> <i>UX Developer?</i> <i>UI Developer?</i> Ther are a lot of different titles for what I do. Either way, as long as I'm designing and building UI components and the user experience, laying out some clean front-end architecture, (and even cleaning out all that CSS mucking up the code), I'm in my happy place. 
            <br></br>
            <br></br>
            Outside of tech, I'm an avid bass guitarist. I also play regular guitar and a little bit of drums.
            (I'd play more if my neighbors would let me.)
        </p>
        <img src={Photo} alt="me in paris" />
        </BioParent>
    )
}