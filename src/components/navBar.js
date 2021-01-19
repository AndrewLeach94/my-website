import * as React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import {useTransition, animated} from 'react-spring'
import debounce from 'lodash.debounce';


const NavBar = styled.nav`
    position: fixed;
    display: flex;
    background: #121212;
    color: var(--on_primary);
    justify-content: flex-end;
    width: 100vw;
    z-index: 1000;

    ul {
        display: table;
        margin: 0;
    }

    li {
        display: table-cell;
        padding: 0 30px;
        list-style: none;
        color: var(--on_primary);
        height: 56px;
        vertical-align: middle;
        transition: 0.2s;

        :hover {
            background-color: #2b2b2b;
            transition: 0.2s;
        }
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

    const OpenMenuContainer = styled.div`
        display: none;
        position: fixed;
        left: 20px;
        top: 30px;
        z-index: 2000;

        input[type=checkbox] {
            display: none;
        }

        div {
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
        }

        input:checked + label div {
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


        @media (max-width: 720px) {
            display: block;
        }
    
    `

export const Navigation = (props) => {  

    const { changeTheme } = props;

    const [showMenu, setShowMenu] = useState(false);
    
    const transitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: "translateY(-500px)"  },
        enter: { position: "fixed", zIndex: 1000, opacity: 1, transform: "translateY(0px)"},
        leave: { opacity: 0, transform: "translateY(-500px)" },
    })

    // throttles the event listener so it doesn't run on every pixel change hogging memory
    const handleResize = debounce(() => {
        if ((window.innerWidth <= 720) ? setShowMenu(false) : setShowMenu(true));
    }, 500)    

    const checkIfDesktop = () => {
        if (window.innerWidth >= 720) {
            setShowMenu(true);
        }
    };

    //this function disables scrolling if the mobile menu is active
    const handleScroll = () => {
        if (window.innerWidth <= 720 && showMenu === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }

    const handleMobileLinkClick = () => {
        if (window.innerWidth <= 720) {
            setShowMenu(false);
        }
    }
    

    useEffect(() => {
        //display the navBar if desktop is detected
        checkIfDesktop();
        handleScroll();

        window.addEventListener("resize", handleResize);
         return () => {
            window.removeEventListener("resize", handleResize);
         }
     })
    

    return(
        <header>
            <OpenMenuContainer >
                <input id="open-menu" type="checkbox" onChange={() => setShowMenu(!showMenu)}></input>
                <label htmlFor="open-menu"><div></div></label>
            </OpenMenuContainer>

        {   transitions.map(({ item, key, props }) =>
                item && <animated.div 
                key={key} 
                style={props}
                >
                <NavBar >
                    <ul>
                        <li><a onClick={() => handleMobileLinkClick()} href="#home">Home</a></li>
                        <li><a onClick={() => handleMobileLinkClick()} href="#case-study-1">Projects</a></li>
                        <li><a onClick={() => handleMobileLinkClick()} href="#about">About</a></li>
                        <li><a onClick={() => handleMobileLinkClick()} href="#contact">Contact</a></li>
                        <li>Blog</li>
                    </ul>
                    <button onClick={() => changeTheme()}>Change Theme</button>
                </NavBar>
                    </animated.div>
            )
        }
        </header>
    )
}