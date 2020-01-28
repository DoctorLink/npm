import React from 'react'
import { Panel, PanelContainer, HealthReportPanelHeader, PanelContent } from '../../../Components';
import NumberConclusions from "../Conclusions/NumberConclusions";

export const MyNumbers = ({ numbersConclusions }) => {
    return (
        <PanelContainer>
            <Panel>
                <HealthReportPanelHeader>Your numbers</HealthReportPanelHeader>
                <PanelContent>
                    <NumberConclusions conclusions={numbersConclusions} />
                </PanelContent>
            </Panel>
        </PanelContainer>
    )
}
