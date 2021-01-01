import * as React from "react"
import styled from "styled-components"
import { ThemeToggler } from "./atoms/theme-toggler";

const NavBody = styled.nav`
    position: fixed;
    display: flex;
    background: #434343;
    color: var(--on_primary);
    justify-content: flex-end;
    width: 100vw;
    z-index: 1000;

    ul {
        display: flex;
    }

    li {
        margin: 0 30px;
        list-style: none;

    }

`;


export const NavBar = (props) => {
    return(
        <NavBody>
            <ul>
                <a>
                    <li>Home</li>
                </a>
                <a>
                    <li>Projects</li>
                </a>
                <a>
                    <li>About</li>
                </a>
                <a>
                    <li>Contact</li>
                </a>
            </ul>
            <ThemeToggler />
        </NavBody>
    )
}