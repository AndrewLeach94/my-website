import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { FaBars } from 'react-icons/fa' 

const NavBar = styled.nav`
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

    @media (max-width: 1000px) {
        justify-content: center;
        font-size: 1rem;
    }

    @media (max-width: 720px) {
        justify-content: center;
        font-size: 1rem;
        flex-flow: column nowrap;
        background-color: var(--primary_base);
        width: 100vw;
        height: 100vh;
        align-items: center;
        text-align: center;

        ul {
            flex-flow: column nowrap;
            margin: 0;
            padding: 0;
        }

        li {
            margin: 20px 0;
        }

        }

    `;

    const visibleMenu = {
        justifyContent: "center",
        fontSize: "1rem",
        flexFlow: "column nowrap",
        backgroundColor: "var(--primary_base)",
        width: "50vw",
        height: "100vh",
        position: "absolute",
        left: "0",
    
        // ul {
        //     flex-flow: column nowrap;
        //     margin: 0;
        // }
    
        // li {
        //     margin: 20px 0;
        // }    
    }

    const hiddenMenu = {
        backgroundColor: "pink",
    }


export const Navigation = (props) => {  

    const { changeTheme } = props;

    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    

    return(
        <header>
            <FaBars onClick={() => setDisplayMobileMenu(!displayMobileMenu)} />
            <NavBar >
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                <button onClick={() => changeTheme()}>Change Theme</button>
            </NavBar>
        </header>
    )
}