import React from 'react'
import { connect } from 'react-redux';
import { PoseGroup } from 'react-pose';
import { Panel, PanelContainer, HealthReportPanelHeader, PanelContent } from '../../../Components';
import { myNumbersSelector } from "../../../Selectors/healthAssessment";
import NumberConclusions from "../Conclusions/NumberConclusions";

const MyNumbers = ({ numbersConclusions }) => {
    return (
        <PoseGroup animateOnMount={true}>
            <PanelContainer key="numbers">
                <Panel>
                    <HealthReportPanelHeader>Your numbers</HealthReportPanelHeader>
                    <PanelContent>
                        <NumberConclusions conclusions={numbersConclusions} />
                    </PanelContent>
                </Panel>
            </PanelContainer>
        </PoseGroup>
    )
}

const mapStateToProps = state => ({
    numbersConclusions: myNumbersSelector(state)
});
export default connect(mapStateToProps)(MyNumbers);
