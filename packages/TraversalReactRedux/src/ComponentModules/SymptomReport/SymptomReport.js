import React from 'react'
import { PoseGroup } from 'react-pose'
import colors from '../../Theme/base/colors'
import InfoIcon from '../../Components/InfoIcon'
import PanelBlocks from '../../Components/SymptomReportPanelBlocks'
import PanelContainer from '../../Components/SymptomReportPanelContainer'
import Panel from '../../Components/SymptomReportPanel'
import PanelHeader from '../../Components/SymptomReportPanelHeader'
import PanelTitle from '../../Components/SymptomReportPanelTitle'
import PanelContent from '../../Components/SymptomReportPanelContent'
import PanelConclusion from '../../Components/SymptomReportPanelConclusion'
import BodyText from '../../Components/SymptomReportBodyText'
import ConclusionTitle from '../../Components/SymptomReportConclusionTitle'
import SVG from '../../Components/SymptomReportSVG'

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
                    <PanelHeader color={colors.brand100}>
                        <PanelTitle>{symptomReport.reasonConclusionTitle}</PanelTitle>
                    </PanelHeader>
                    {symptomReport.reasonConclusions.map((conclusion, i) =>
                        (<PanelConclusion key={i}>
                            <ConclusionTitle>{conclusion.displayText}</ConclusionTitle>
                            <InfoIcon inline={true} onClick={showExplanation} explanation={conclusion.explanation} />
                            <BodyText>{conclusion.truncated}</BodyText>
                        </PanelConclusion>))}
                </Panel>)}
                {symptomReport.otherConclusions && symptomReport.otherConclusions.length > 0 && (<Panel>
                    <PanelHeader color={colors.brand100}>
                        <PanelTitle>{symptomReport.otherConclusionTitle}</PanelTitle>
                    </PanelHeader>
                    {symptomReport.otherConclusions.map((conclusion, i) =>
                        (<PanelConclusion key={i}>
                            <ConclusionTitle>{conclusion.displayText}</ConclusionTitle>
                            <InfoIcon inline={true} onClick={showExplanation} explanation={conclusion.explanation} />
                        </PanelConclusion>))}
                </Panel>)}
                {symptomReport.informationConclusions && symptomReport.informationConclusions.length > 0 && (<Panel>
                    <PanelHeader color={colors.brand100}>
                        <PanelTitle>{symptomReport.informationConclusionTitle}</PanelTitle>
                    </PanelHeader>
                    {symptomReport.informationConclusions.map((conclusion, i) =>
                        (<PanelConclusion key={i}>
                            <ConclusionTitle>{conclusion.displayText}</ConclusionTitle>
                            <InfoIcon inline={true} onClick={showExplanation} explanation={conclusion.explanation} />
                        </PanelConclusion>))}
                </Panel>)}
            </PanelContainer>
            <PanelContainer key='reasons'>
                {symptomReport.reasonBullets && symptomReport.reasonBullets.length > 0 && (<Panel>
                    <PanelHeader color={colors.lightBlue100}>
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