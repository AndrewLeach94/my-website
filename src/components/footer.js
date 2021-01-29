import * as React from "react"
import styled from "styled-components"

const FooterParent = styled.footer`
    background-color: #121212;
    color: var(--on_primary);
    display: flex;
    justify-content: flex-end;
    padding-right: 4rem;

    a {
        color: inherit;
    }

`

export const Footer = (props) => {
    return(
        <FooterParent>
            <p>Handcrafted by me! Built on <a target="_blank" rel="noreferrer" href="https://www.gatsbyjs.com/" >GatsbyJS</a></p>
        </FooterParent>
    )
}