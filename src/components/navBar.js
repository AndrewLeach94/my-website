import * as React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const NavParent = styled.div`
    position: absolute;
    top: 0;

    input[type=checkbox] {
        display: none;
    }


    #hamburger-icon {
        display: none;
        position: fixed;
        left: 20px;
        top: 30px;
        z-index: 2000;

        width: 30px;
        height: 4px;
        background-color: var(--on_surface);
        border-radius: 2px;
        transition: 0.2s;

        ::before {
            content: '';
            display: block;
            width: 30px;
            height: 4px;
            background-color: var(--on_surface);
            top: -10px;
            position: absolute;
            border-radius: 2px;
            transition: 0.2s;
        }
        ::after {
            content: '';
            display: block;
            width: 30px;
            height: 4px;
            background-color: var(--on_surface);
            top: 10px;
            position: absolute;
            border-radius: 2px;
            transition: 0.2s;
        }

        
        @media (max-width: 720px) {
            display: block;
        }

    }

    // this handles the logic bringing the meny into view
    input:checked ~ nav {
            transform: translateY(0);

            opacity: 1;
            transition: .5s;
        }

    input:checked + label #hamburger-icon {
        background: transparent;
        transition: 0.2s;

        ::before {
            background-color: var(--on_primary);
            transform: translate(0px, 10px) rotate(-45deg);
            transition: 0.2s;
        }

        ::after {
            background-color: var(--on_primary);
            transform: translate(0px, -10px) rotate(45deg);
            transition: 0.2s;
        }
    }


`


const NavBar = styled.nav`
    position: fixed;
    display: flex;
    background: #121212;
    color: var(--on_primary);
    justify-content: flex-end;
    width: 100vw;
    z-index: 1000;

    ul {
        display: flex;
        justify-content: space-evenly;
    }

    li {
        padding: 0 30px;
        list-style: none;
        color: var(--on_primary);

    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @media (max-width: 1000px) {
        justify-content: center;
        font-size: 1rem;
    }

    @media (max-width: 720px) {
        transform: translateY(-150%);
        opacity: 0;
        transition: .5s;


        display: flex;
        justify-content: center;
        font-size: 1rem;
        flex-flow: column nowrap;
        background-color: var(--primary_base);
        width: 100vw;
        height: 100vh;
        align-items: center;
        text-align: center;

        ul {
            display: flex;
            flex-flow: column nowrap;
            margin: 0;
            padding: 0;
        }

        li {
            margin: 20px 0;
            height: auto;
        }

        }

    `;

    const ThemeSelectContainer = styled.div`
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 60px 0 30px;

        div {
            position: absolute;
            display: flex;
            flex-direction: column;
            top: 100%;
            left: 0;
            display: none;

            button {
                background: var(--surface_base);
                border: none;
                box-shadow: none;
                color: var(--on_surface);

                :hover {
                    background: var(--surface_lighter);
                }
            }
        }

        :hover {
            div {
                display: inherit;
            }
        }
    
    `


export const Navigation = (props) => {  

    // these are the theme functions passed in as props
    const { applyLightTheme, applyDarkTheme, applySystemTheme } = props;

    const [showMenu, setShowMenu] = useState(false);
    const [checkboxActive, setCheckboxActive] = useState(false);
    


    //this function disables scrolling if the mobile menu is active
    const handleScroll = () => {
        if (window.innerWidth <= 720 && showMenu === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }

    const handleCheckbox = () => {
        setShowMenu(!showMenu);
        setCheckboxActive(!checkboxActive);
    }

    const handleMobileLinkClick = () => {
        if (window.innerWidth <= 720) {
            setShowMenu(false);
            setCheckboxActive(false);
        }
    }
    

    useEffect(() => {
        handleScroll();
     })
    

    return(
        <NavParent>
            {/* eslint-disable */}
            <input id={"open-menu"} type="checkbox" onChange={handleCheckbox} checked={checkboxActive} aria-label="Open/Close Navigation"></input>
            <label htmlFor={"open-menu"}><div id="hamburger-icon"></div></label>
            {/* eslint-disable */}
            <NavBar >
                <ul>
                    <li><Link to="/#home" onClick={() => handleMobileLinkClick()}>Home</Link></li>
                    <li><Link to="/#case-study-1" onClick={() => handleMobileLinkClick()}>Projects</Link></li>
                    <li><Link to ="/#about" onClick={() => handleMobileLinkClick()}>About</Link></li>
                    <li><Link to="/#contact" onClick={() => handleMobileLinkClick()}>Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
                <ThemeSelectContainer>Select Theme
                    <div>
                        <button onClick={() => applyLightTheme()}>Light</button>
                        <button onClick={() => applyDarkTheme()}>Dark</button>
                        <button onClick={() => applySystemTheme()}>System Preference</button>
                    </div>
                </ThemeSelectContainer>
            </NavBar>
        </NavParent>
    )}