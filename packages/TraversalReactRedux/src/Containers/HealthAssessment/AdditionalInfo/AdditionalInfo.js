import React from 'react'
import { connect } from 'react-redux';
import { PoseGroup } from 'react-pose';
import { Panel, PanelContainer, HealthReportPanelHeader, PanelContent } from '../../../Components';
import { additionalConclusionsSelector } from "../../../Selectors/healthAssessment";
import NonCheckableConclusions from "../Conclusions/NonCheckableConclusions";

const AdditionalInfo = ({ additionalConclusions }) => {
    return (
        <PoseGroup animateOnMount={true}>
            <PanelContainer key="conclusions">
                <Panel>
                    <HealthReportPanelHeader>Additional Information</HealthReportPanelHeader>
                    <PanelContent>
                        <NonCheckableConclusions conclusions={additionalConclusions} />
                    </PanelContent>
                </Panel>
            </PanelContainer>
        </PoseGroup>
    )
}

const mapStateToProps = state => ({
    additionalConclusions: additionalConclusionsSelector(state),
});
export default connect(mapStateToProps)(AdditionalInfo);
