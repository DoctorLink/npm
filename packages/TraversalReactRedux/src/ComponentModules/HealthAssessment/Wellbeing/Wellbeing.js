import React from 'react'
import { connect } from "react-redux";
import { PoseGroup } from 'react-pose';
import { Panel, PanelContainer, NavigationButtons } from '../../../Components';
import CheckableConclusionsPanel from '../Conclusions/CheckableConclusionsPanel';
import WellbeingScores from "./WellbeingScores";

const Wellbeing = ({ traversalId, conclusionIds }) => {
    return (
        <PoseGroup animateOnMount={true}>
            <PanelContainer key="chart" float="right">
                <Panel>
                    <WellbeingScores traversalId={traversalId} />
                </Panel>
            </PanelContainer>
            <PanelContainer key="conclusions">
                <CheckableConclusionsPanel traversalId={traversalId} checkableConclusions={conclusionIds.wellnessConclusions} />
            </PanelContainer>
            <NavigationButtons
                key="nav"
                previousRoute={`/traversal/${traversalId}/risks`}
            />
        </PoseGroup>
    )
}

const mapStateToProps = state => ({
    conclusionIds: state.healthAssessment.conclusionIds
});
export default connect(mapStateToProps)(Wellbeing);
