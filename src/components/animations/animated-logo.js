import * as React from "react"
import { useEffect, createRef } from "react"
import lottie from "lottie-web"
import animation from "../../images/animated-logo.json";


export const AnimatedLogo = (props) => {

    const animationContainer = createRef();
    
    useEffect(() => {
        const anim = lottie.loadAnimation({

        container: animationContainer.current,
        renderer: 'svg',
        autoplay: true,
        loop: true,
        animationData: animation,
       });
       return () => anim.destroy();
    })

    return (
        <div className="animation-container" ref={animationContainer}></div> 
    )
}