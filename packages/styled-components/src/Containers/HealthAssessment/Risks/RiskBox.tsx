import React from 'react';
import { connect } from 'react-redux';
import { PanelContainer, PanelBlocks, PanelBox } from '../../../Components';
import {
  riskConclusionsSelector,
  riskExplanationsSelector,
} from '@doctorlink/traversal-redux';
import RiskScores from './RiskScores';

const RiskBox: React.FC<{
  traversalId: any;
  riskConclusions: any;
  riskExplanations: any;
}> = ({ traversalId }) => {
  return (
    <PanelBlocks>
      <PanelContainer>
        <PanelBox>
          <RiskScores traversalId={traversalId} />
        </PanelBox>
      </PanelContainer>
    </PanelBlocks>
  );
};
const mapStateToProps = (state: any) => ({
  riskConclusions: riskConclusionsSelector(state),
  riskExplanations: riskExplanationsSelector(state),
});
export default connect(mapStateToProps)(RiskBox);
