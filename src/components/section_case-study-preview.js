import * as React from "react"
import  styled from "styled-components"



const CaseStudyContainer = styled.section`
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 100vh;
    padding: 0 60px;

    background: ${props => props.theme.caseStudyVideoOverlay}; //video overlay


    video {
        position: absolute;
        object-fit: cover;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    button {
        max-width: 40%;
    }

    :hover {
    }

`

const HeadingColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 80px;
`

const FeatureColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const DetailWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 20fr;
    margin: 25px 0;

    h3 {
        font-size: 1.7rem;
        grid-row: 1;
        grid-column: 2;
    }

    p {
        font-size: 1.3rem;
        max-width: 75%;
        grid-column: 2;
        grid-row: 2;
    }


`

const Bullet = styled.div`
	width: 20px;
	height: 20px;
	background-color: var(--primary_base);
    margin-right: 20px;
    align-self: center;
`

const Background = styled.div`

    background-color: black;

`


export const CaseStudyPromo = (props) => {
    return(
            <CaseStudyContainer id={"case-study-" + props.caseStudyId}>
                <HeadingColumn>
                    <h2>{props.title}</h2>
                    <button>{props.ctaMessage}</button>
                </HeadingColumn>
                <FeatureColumn>
                    <DetailWrapper>
                        <Bullet></Bullet>
                        <h3>{props.featureHeader1}</h3>
                        <p>{props.featureDetails1}</p>
                    </DetailWrapper>
                    <DetailWrapper>
                        <Bullet></Bullet>
                        <h3>{props.featureHeader2}</h3>
                        <p>{props.featureDetails2}</p> 
                    </DetailWrapper>
                </FeatureColumn>
                <video loop autoPlay muted poster={require("./../images/placeholders/torsh-design-system.webp")}>
                    <source src={require("./../videos/TORSH-Design-System-Promo.webm")} type="video/webm"></source>
                </video>
            </CaseStudyContainer>
    )
}