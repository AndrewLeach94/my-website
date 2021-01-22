import * as React from "react"
import styled from "styled-components"
import headshot from "./../images/headshot.webp"

const BioParent = styled.div`
    position: relative;
    display: flex;
    background: var(--surface_lighter);
    padding: 1rem;
    width: 60vw;
    border-radius: 20px;
    box-shadow: 0px 0px 10px #0000001c;

    figcaption {
        padding: 0 1.75rem 0 10rem;
    }

    @media (max-width: 1072px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 1rem;

        figcaption {
            margin-top: 1.75rem;
            padding: 0 1.75rem;
        }
    }

    @media (max-width: 836px) {
        width: 85vw;
    }

    @media (max-width: 500px) {
        figcaption {
            padding: 0 1.5rem;
        }
    }


`

const HeadshotContainer = styled.figure`
    position: absolute;
    left: 0;
    bottom: -25%; 
    width: 10rem;
    height: 10rem;
    margin: 0;
    background-position: center top;
    background-size: 10rem; //background size, height, and width need to match 
    background-image: url(${headshot});
    border-radius: 100%;
    filter: saturate(0%);
    box-shadow: 2px 2px 10px 1px #00000052;    
    
    @media (max-width: 1072px) {
        position: static;

    }
    `


export const BlogBio = (props) => {
    return(
        <BioParent>
            <HeadshotContainer role="img" aria-label="headshot" alt="my headshot"></HeadshotContainer>
            <figcaption>Andrew Leach is a UX/UI developer and multimedia designer from Seattle. He 
                began his career editing video but now finds himself designing and developing web 
                applications. When he's not hacking away in a code editor, you can find him playing bass guitar.
            </figcaption>
        </BioParent>

    )
}