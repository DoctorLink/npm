import React from 'react';
import { connect } from 'react-redux';
import { Panel, PanelContainer, PanelBlocks } from '../../../Components';
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
    <>
      <h2>Global Health Check Scores</h2>
      <PanelBlocks>
        <PanelContainer float="right">
          <Panel>
            <RiskScores traversalId={traversalId} />
          </Panel>
        </PanelContainer>
        <PanelContainer>
          <CheckableConclusionsPanel
            traversalId={traversalId}
            conclusions={riskConclusions}
          />
        </PanelContainer>
        <PanelContainer>
          <Panel>
            <Explanations
              title="Your risks explained"
              explanations={riskExplanations}
            />
          </Panel>
        </PanelContainer>
      </PanelBlocks>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  riskConclusions: riskConclusionsSelector(state),
  riskExplanations: riskExplanationsSelector(state),
});
export default connect(mapStateToProps)(Risks);
