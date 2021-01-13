import * as React from "react"
import { useState, useEffect } from 'react';
import styled from "styled-components"

const CollectionParent = styled.section`
    position: relative;
    height: 600px;
    background-color: var(--surface_base);
    margin-bottom: 600px;
    overflow: hidden;


`

const CollectionContainer = styled.div`
    position: absolute;
    left: 0;
    display: flex;
    flex-flow: row nowrap;

    img {
        height: 600px;
    }

`

export const RecordCollection = (props) => {

    const collectionContainer = document.querySelector("#record-collection-container");

    const [pressed, setPressed] = useState(false);
    const [cursorStyle, setCursorStyle] = useState("none");
    const [coordinates, setCoordinates] = useState("");

    const handlePressedStatus = (e) => {
        setPressed(!pressed);
        setCoordinates(e.nativeEvent.offsetX - collectionContainer.offsetLeft)
        console.log(coordinates);
    }


    const triggerGrabCursor = () => {
        setCursorStyle("grab");
    }

    const triggerGrabbingCursor = (e) => {
        setCursorStyle("grabbing");
        e.preventDefault(); // prevents all the nastiness that comes with holding a mouse click
    };



    useEffect(() => {
    })


    return(
        <CollectionParent onMouseDown={handlePressedStatus} onMouseOver={triggerGrabCursor} style={{cursor: cursorStyle}}
        >
            <CollectionContainer id="record-collection-container" onMouseDown={triggerGrabbingCursor} onMouseUp={triggerGrabCursor}>
                <img src={require("./../images/dookie.webp")} alt="dookie album cover"/>
                <img src={require("./../images/ill-communication.webp")} alt="ill-communication album cover"/>
                <img src={require("./../images/london-calling.webp")} alt="london-calling album cover"/>
                <img src={require("./../images/war.webp")} alt="u2 album cover"/>
                <img src={require("./../images/definitely-maybe.webp")} alt="oasis album cover"/>
            </CollectionContainer>
        </CollectionParent>
    )
}