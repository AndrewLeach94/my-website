import * as React from "react"
import styled from "styled-components"


const CaseStudyContainer = styled.section`
    background-color: limegreen;
    display: flex;
    height: 100vh;

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
        /* margin: 16px 0; */
        max-width: 75%;
        grid-row: 1;
        grid-column: 2;
    }

    p {
        /* margin-bottom: 50px; */
        max-width: 75%;
        grid-column: 2;
        grid-row: 2;
    }


`

const Bullet = styled.div`
	width: 20px;
	height: 20px;
	background-color: var(--primary_base);
    /* margin-top: 16px;
    margin-right: 10px; */
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
        </CaseStudyContainer>
    )
}