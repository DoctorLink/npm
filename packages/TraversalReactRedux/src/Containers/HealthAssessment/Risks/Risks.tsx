import React from 'react';
import { connect } from 'react-redux';
import { PoseGroup } from 'react-pose';
import { Panel, PanelContainer } from '../../../Components';
import {
  riskConclusionsSelector,
  riskExplanationsSelector,
} from '../../../Selectors/healthAssessment';
import Explanations from '../Conclusions/Explanations';
import CheckableConclusionsPanel from '../Conclusions/CheckableConclusionsPanel';
import RiskScores from './RiskScores';

const Risks: React.FC<{
  traversalId: any;
  riskConclusions: any;
  riskExplanations: any;
}> = ({ traversalId, riskConclusions, riskExplanations }) => {
  return (
    <PoseGroup animateOnMount={true}>
      <PanelContainer key="risk" float="right">
        <Panel>
          <RiskScores traversalId={traversalId} />
        </Panel>
      </PanelContainer>
      <PanelContainer key="conclusions">
        <CheckableConclusionsPanel
          traversalId={traversalId}
          conclusions={riskConclusions}
        />
      </PanelContainer>
      <PanelContainer key="explanations">
        <Panel>
          <Explanations
            title="Your risks explained"
            explanations={riskExplanations}
          />
        </Panel>
      </PanelContainer>
    </PoseGroup>
  );
};

const mapStateToProps = (state: any) => ({
  riskConclusions: riskConclusionsSelector(state),
  riskExplanations: riskExplanationsSelector(state),
});
export default connect(mapStateToProps)(Risks);
