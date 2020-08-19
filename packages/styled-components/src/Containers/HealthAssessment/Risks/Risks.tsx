import React from 'react';
import { connect } from 'react-redux';
import {
  Panel,
  PanelContainer,
  PanelBlocks,
  PanelBox,
} from '../../../Components';
import {
  riskConclusionsSelector,
  riskExplanationsSelector,
} from '@doctorlink/traversal-redux';
import Explanations from '../Conclusions/Explanations';
import CheckableConclusionsPanel from '../Conclusions/CheckableConclusionsPanel';
import RiskScores from './RiskScores';
import { Conclusion, RootState } from '@doctorlink/traversal-core';

const Risks: React.FC<{
  traversalId: string;
  riskConclusions: Conclusion[];
  riskExplanations: Conclusion[];
}> = ({ traversalId, riskConclusions, riskExplanations }) => {
  return (
    <PanelBlocks>
      <PanelContainer float="right">
        <PanelBox>
          <RiskScores traversalId={traversalId} />
        </PanelBox>
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
  );
};

const mapStateToProps = (state: RootState) => ({
  riskConclusions: riskConclusionsSelector(state),
  riskExplanations: riskExplanationsSelector(state),
});
export default connect(mapStateToProps)(Risks);
