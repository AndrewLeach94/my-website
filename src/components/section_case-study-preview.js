import * as React from "react"
import  styled from "styled-components"



const CaseStudyContainer = styled.section`
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 100vh;
    padding: 60px 60px;

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
        margin-top: 20px;
        max-width: 40%;
    }

    h3 {
        font-size: 1.7rem;
    }

    p {
        font-size: 1.3rem;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;
        row-gap: 60px;
        height: auto;
    }

    @media (max-width: 500px) {

        padding: 60px 30px;

        p {
            font-size: 1rem;
        }

        h3 {
            font-size: 1.3rem
        }

        button {
            margin-top: 30px;
            max-width: none;
        }

    }


`

const HeadingColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 80px;

    @media (max-width: 900px) {
        justify-content: center;
        align-items: center;
        text-align: center;
        grid-row: 1;
        padding: 0;
    }
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
        grid-row: 1;
        grid-column: 2;
    }

    p {
        max-width: 75%;
        grid-column: 2;
        grid-row: 2;
    }

    @media (max-width: 900px) {
        p {
            max-width: none;
        }
        
    }

`

const Bullet = styled.div`
	width: 20px;
	height: 20px;
	background-color: var(--primary_base);
    margin-right: 20px;
    align-self: center;
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
                    <source src={props.source} type="video/webm"></source>
                </video>
            </CaseStudyContainer>
    )
}
export const CaseStudyPromoAlt = (props) => {
    return(
            <CaseStudyContainer id={"case-study-" + props.caseStudyId}>
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
                <HeadingColumn>
                    <h2>{props.title}</h2>
                    <button>{props.ctaMessage}</button>
                </HeadingColumn>
                <video loop autoPlay muted poster={props.poster}>
                    <source src={props.source} type="video/webm"></source>
                </video>
            </CaseStudyContainer>
    )
}