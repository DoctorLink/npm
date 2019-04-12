import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import InfoIcon from '../InfoIcon'
import themeColors from '../../Theme/base/colors'

const colors = {
    danger: '#e42817',
    moderate: '#ffa200',
    normal: 'green',
    conclusions: themeColors.brand100,
    reasonBullets: themeColors.lightBlue100
}

const PosedBlocks = posed.div({
    enter: {
        staggerChildren: 200,
        delayChildren: 200
    }
})

const PanelBlocks = styled(PosedBlocks)`
    margin: 0 -10px;
`

const PosedPanel = posed.div({
    enter: {
        opacity: 1,
        y: '0%'
    },
    exit: {
        y: '100%',
        opacity: 0,
    }
})

const PanelContainer = styled(PosedPanel)`
    box-sizing: border-box;
    padding: 0 10px;
    float: ${p => p.float || 'left'};

    @media screen and (min-width: 800px) {    
        width: 50%;
    }
`

const Panel = styled(PosedPanel)`
    border-radius: 4px;
    background-color: white;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin-bottom: 30px;
    overflow: hidden;
    margin-right: 10px;

`

const PanelHeader = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    background-color: ${p => p.color || '#666'};

    @media screen and (min-width: 800px) {    
        padding-left: 24px;
        padding-right: 24px;
    }
`

const PanelTitle = styled.span`
    color: ${p => p.color || 'white'};
    font-size: 0.875rem;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    font-size: 1.5rem;
`

const PanelContent = styled.div`
    box-sizing: border-box;
    padding: 16px;
    
    &:last-child {
        /* padding-bottom: 24px; */
    }

    @media screen and (min-width: 800px) {    
        padding-left: 24px;
        padding-right: 24px;
    }
`

const PanelConclusion = styled(PanelContent)`
    border-bottom: 1px solid #cacaca;
    &:last-of-type {
        border-bottom: none;
    }
`

const BodyText = styled.p`
    margin: 0;
    display: block;
    color: rgba(0, 0, 0, 0.87);
    font-size: 1rem;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    font-weight: ${p => p.bold ? 'bold' : 'normal'};
`

const ConclisionTitle = styled.h6`
    font-family: 'Noto Sans', sans-serif;
    display: inline;
    font-weight: normal;
    font-size: 1.25rem;

    ::after {
        content: " "
    }
`

const SVG = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
  stroke-linecap: round; 
  stroke-linejoin: round;
  margin-right: 10px;
`
const Icon = ({ state }) => {
    if (state === 1) return (<SVG width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12" y2="16"></line>
    </SVG>)

    if (state === 2) return (<SVG width="24" height="24" viewBox="0 0 24 24">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12" y2="17"></line>
    </SVG>)

    return (<SVG width="24" height="24" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </SVG>)
}


export default ({ conclusion, showExplanation }) => {
    const { symptomReport } = conclusion;
    const level = () => {
        switch (symptomReport.messageLevel) {
            case 3:
                return colors.normal
            case 2:
                return colors.moderate
            default:
                return colors.danger
        }
    }
    return (<PoseGroup animateOnMount={true}>
        <Panel fullWidth={true} key="header">
            <PanelHeader color={level()}>
                <Icon state={symptomReport.messageLevel} />
                <PanelTitle>{symptomReport.messageTitle}</PanelTitle>
            </PanelHeader>
            <PanelContent>
                <BodyText dangerouslySetInnerHTML={{ __html: symptomReport.messageDescription }}></BodyText>
            </PanelContent>
        </Panel>
        <PanelBlocks key='bullets'>
            <PanelContainer float={'right'} animateOnMount={true}>
                {symptomReport.dangerBullets && symptomReport.dangerBullets.length > 0 && (<Panel>
                    <PanelHeader color={colors.danger}>
                        <PanelTitle>{symptomReport.dangerBulletTitle}</PanelTitle>
                    </PanelHeader>
                    {symptomReport.dangerBullets.map((bullet, i) =>
                        (<PanelConclusion key={i}>
                            <BodyText>{bullet.displayText}</BodyText>
                        </PanelConclusion>))}
                </Panel>)}
                {symptomReport.contactBullets && symptomReport.contactBullets.length > 0 && (<Panel>
                    <PanelHeader color={colors.moderate}>
                        <PanelTitle>{symptomReport.contactBulletTitle}</PanelTitle>
                    </PanelHeader>
                    {symptomReport.contactBullets.map((bullet, i) =>
                        (<PanelConclusion key={i}>
                            <BodyText>{bullet.displayText}</BodyText>
                        </PanelConclusion>))}
                </Panel>)}
            </PanelContainer>
            <PanelContainer key='concs'>
                {symptomReport.reasonConclusions && symptomReport.reasonConclusions.length > 0 && (<Panel>
                    <PanelHeader color={colors.conclusions}>
                        <PanelTitle>{symptomReport.reasonConclusionTitle}</PanelTitle>
                    </PanelHeader>
                    {symptomReport.reasonConclusions.map((conclusion, i) =>
                        (<PanelConclusion key={i}>
                            <ConclisionTitle>{conclusion.displayText}</ConclisionTitle>
                            <InfoIcon inline={true} onClick={showExplanation} explanation={conclusion.explanation} />
                            <BodyText>{conclusion.truncated}</BodyText>
                        </PanelConclusion>))}
                </Panel>)}
                {symptomReport.otherConclusions && symptomReport.otherConclusions.length > 0 && (<Panel>
                    <PanelHeader color={colors.conclusions}>
                        <PanelTitle>{symptomReport.otherConclusionTitle}</PanelTitle>
                    </PanelHeader>
                    {symptomReport.otherConclusions.map((conclusion, i) =>
                        (<PanelConclusion key={i}>
                            <ConclisionTitle>{conclusion.displayText}</ConclisionTitle>
                            <InfoIcon inline={true} onClick={showExplanation} explanation={conclusion.explanation} />
                        </PanelConclusion>))}
                </Panel>)}
                {symptomReport.informationConclusions && symptomReport.informationConclusions.length > 0 && (<Panel>
                    <PanelHeader color={colors.conclusions}>
                        <PanelTitle>{symptomReport.informationConclusionTitle}</PanelTitle>
                    </PanelHeader>
                    {symptomReport.informationConclusions.map((conclusion, i) =>
                        (<PanelConclusion key={i}>
                            <ConclisionTitle>{conclusion.displayText}</ConclisionTitle>
                            <InfoIcon inline={true} onClick={showExplanation} explanation={conclusion.explanation} />
                        </PanelConclusion>))}
                </Panel>)}
            </PanelContainer>
            <PanelContainer key='reasons'>
                {symptomReport.reasonBullets && symptomReport.reasonBullets.length > 0 && (<Panel>
                    <PanelHeader color={colors.reasonBullets}>
                        <PanelTitle>{symptomReport.reasonBulletTitle}</PanelTitle>
                    </PanelHeader>
                    {symptomReport.reasonBullets.map((bullet, i) =>
                        (<PanelConclusion key={i}>
                            <BodyText bold={i === 0}>{bullet.displayText}</BodyText>
                        </PanelConclusion>))}
                </Panel>)}
            </PanelContainer>
        </PanelBlocks>
    </PoseGroup>)
}