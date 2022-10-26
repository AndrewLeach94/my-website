import * as React from "react"
import styled, { keyframes } from "styled-components"
import Dookie from "./../images/albums/dookie.webp"
import IllCommunication from "./../images/albums/ill-communication.webp"
import LondonCalling from "./../images/albums/london-calling.webp"
import War from "./../images/albums/war.webp"
import DefinitelyMaybe from "./../images/albums/definitely-maybe.webp"
import BlueAlbum from "./../images/albums/blue-album.webp"
import SgtPepper from "./../images/albums/sgt-pepper.webp"
import The1975 from "./../images/albums/1975.webp"

const CollectionParent = styled.section`
    position: relative;
    background-color: var(--surface_base);
    overflow: hidden;
    padding: 0;

    h3 {
        padding-left: 60px;
        position: absolute;
        background-color: var(--surface_base);
        z-index: 2;
        padding: 8px 20px;
        font-size: 1.7rem;
        bottom: 0;
        opacity: 85%;
        backdrop-filter: blur(10px); //there is a bug in chrome desktop at time of writing where nested filters like this don't work
        border-top-right-radius: 8px;

        @media (max-width: 900px) {
            font-size: 1.3rem;
        }
    }


    ::before {
        content: '';
        position: absolute;
        left: 0;
        height: 100%;
        width: 10%;
        background: linear-gradient(90deg, var(--surface_base) 0%, #0000 100%);
        z-index: 1;
    }

    ::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 10%;
        background: linear-gradient(-90deg, var(--surface_base) 0%, #0000 100%);
        z-index: 1;
    }

    @media (max-width: 600px) {
        display: none;
    }
`

const scrollWideScreen = keyframes`
    from {
        transform: translateX(0)
    }

    to {
        /* we're saying "scroll until the end of the image container hits the left of the screen"
        First equation must match the image width...then multiplied by the number of images */
        transform: translateX(calc((-100vw / 4) * 8)); 
    }

`

const CollectionContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    animation: ${scrollWideScreen} 25s linear infinite;
    height: calc(100vw / 4); //height needs to be identical to the image width

    img {
        opacity: 70%;
        width: calc(100vw / 4); // I want 4 images to evenly fill the whole screen
        height: calc(100vw / 4); // height needs to be identical to the calculated width
        transition: 0.4s;
        filter: saturate(0%);

        :hover {
            transform: scale(0.95) rotate(2deg);
            opacity: 100%;
            box-shadow: 4px 3px 10px 0px #000000a3;
            cursor: pointer;
            transition: 0.4s;
            filter: saturate(100%);

        }

    }
`


export const RecordCollection = (props) => {

    return(
        <CollectionParent >
            <h3>Oh yeah, a peek at my record collection</h3>
            <CollectionContainer >
                {/* Remember to adjust the animation equation when adding or removing albums*/}
                <a href="https://www.youtube.com/watch?v=OR7R9Kuw2fY" target="_blank" rel="noreferrer noopener">
                    <img src={Dookie} alt="dookie album cover"/>
                </a>

                <a href="https://www.youtube.com/watch?v=JhqyZeUlE8U" target="_blank" rel="noreferrer noopener">
                    <img src={IllCommunication} alt="ill-communication album cover"/>
                </a>

                <a href="https://www.youtube.com/watch?v=eNot47WRBFk" target="_blank" rel="noreferrer noopener">
                    <img src={LondonCalling} alt="london-calling album cover"/>
                </a>

                <a href="https://www.youtube.com/watch?v=jeYCyCaK_5k" target="_blank" rel="noreferrer noopener">
                    <img src={War} alt="u2 album cover"/>
                </a>

                <a href="https://www.youtube.com/watch?v=pbIRQR6FkhU" target="_blank" rel="noreferrer noopener">
                    <img src={DefinitelyMaybe} alt="oasis album cover"/>
                </a>
                
                <a href="https://www.youtube.com/watch?v=8RFTB5vgV_4" target="_blank" rel="noreferrer noopener">
                    <img src={BlueAlbum} alt="weezer album cover"/>
                </a>
                
                <a href="https://www.youtube.com/watch?v=HtUH9z_Oey8" target="_blank" rel="noreferrer noopener">
                    <img src={SgtPepper} alt="Sgt. Pepper album cover"/>
                </a>
                                
                <a href="https://www.youtube.com/watch?v=wYYQpTbBSBM" target="_blank" rel="noreferrer noopener">
                    <img src={The1975} alt="the 1975 album cover"/>
                </a>



                {/* These are the "loop illusion" elements. Their purpose is only to fill the space between the end of the loop before it resets */}
                <a href="https://www.youtube.com/watch?v=OR7R9Kuw2fY" target="_blank" rel="noreferrer noopener">
                    <img src={Dookie} alt="dookie album cover"/>
                </a>

                <a href="https://www.youtube.com/watch?v=JhqyZeUlE8U" target="_blank" rel="noreferrer noopener">
                    <img src={IllCommunication} alt="ill-communication album cover"/>
                </a>

                <a href="https://www.youtube.com/watch?v=eNot47WRBFk" target="_blank" rel="noreferrer noopener">
                    <img src={LondonCalling} alt="london-calling album cover"/>
                </a>

                <a href="https://www.youtube.com/watch?v=jeYCyCaK_5k" target="_blank" rel="noreferrer noopener">
                    <img src={War} alt="u2 album cover"/>
                </a>

            </CollectionContainer>
        </CollectionParent>
    )
}