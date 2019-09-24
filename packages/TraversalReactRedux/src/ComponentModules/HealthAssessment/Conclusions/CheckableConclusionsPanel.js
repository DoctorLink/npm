import React from 'react'
import { Panel, HealthReportPanelHeader, PanelContent } from '../../../Components';
import CheckableConclusions from './CheckableConclusions';

const RiskConclusions = ({ traversalId, checkableConclusions }) => (
    <Panel>
        <HealthReportPanelHeader>
            See the impact of making the following changes to your lifestyle
            </HealthReportPanelHeader>
        <PanelContent>
            <CheckableConclusions traversalId={traversalId} checkableConclusions={checkableConclusions} />
        </PanelContent>
    </Panel>
)

export default RiskConclusions;
