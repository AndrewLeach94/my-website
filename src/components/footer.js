import * as React from "react"
import styled from "styled-components"
import { FiCoffee } from 'react-icons/fi'


const FooterParent = styled.footer`
    background-color: #121212;
    color: var(--on_primary);
    display: flex;
    justify-content: flex-end;
    padding: 0 4rem;
    text-align: center;

    a {
        color: inherit;
    }

    svg {
        margin-left: 0.25rem;
    }

    @media (max-width: 600px) {
        justify-content: center;
        align-content: center;
        padding: 0 1rem;
        
        p {
            font-size: 0.8rem;
        }
    }

`

export const Footer = (props) => {
    return(
        <FooterParent>
            <p>Andrew Leach © 2021 - Built on <a target="_blank" rel="noreferrer" href="https://www.gatsbyjs.com/" >GatsbyJS</a> and <FiCoffee /></p>
        </FooterParent>
    )
}