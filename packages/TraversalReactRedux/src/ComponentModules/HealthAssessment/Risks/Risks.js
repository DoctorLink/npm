import React from 'react'
import { connect } from 'react-redux';
import { PoseGroup } from 'react-pose';
import { Panel, PanelContainer, NavigationButtons } from '../../../Components';
import RiskExplanations from './RiskExplanations';
import CheckableConclusionsPanel from '../Conclusions/CheckableConclusionsPanel';
import RiskScores from './RiskScores';

const Risks = ({ traversalId, healthAssessment, conclusions }) => {
    const { conclusionIds } = healthAssessment;

    return (
        <PoseGroup animateOnMount={true}>
            <PanelContainer key="risk" float="right">
                <Panel>
                    <RiskScores traversalId={traversalId} />
                </Panel>
            </PanelContainer>
            <PanelContainer key="conclusions">
                <CheckableConclusionsPanel traversalId={traversalId} checkableConclusions={conclusionIds.riskConclusions} />
            </PanelContainer>
            <PanelContainer key="explanations">
                <Panel>
                    <RiskExplanations conclusions={conclusions} />
                </Panel>
            </PanelContainer>
            <NavigationButtons
                key="nav"
                previousRoute={`/traversal/${traversalId}/health-age`}
                nextRoute={`/traversal/${traversalId}/wellbeing`}
            />
        </PoseGroup>
    )
}

const mapStateToProps = state => ({
    healthAssessment: state.healthAssessment,
    conclusions: state.conclusion && state.conclusion.conclusions || []
});
export default connect(mapStateToProps)(Risks);
