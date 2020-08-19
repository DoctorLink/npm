import React from 'react';
import { connect } from 'react-redux';
import { Panel, PanelContainer, PanelBlocks } from '../../../Components';
import {
  wellnessConclusionsSelector,
  wellnessExplanationsSelector,
} from '@doctorlink/traversal-redux';
import CheckableConclusionsPanel from '../Conclusions/CheckableConclusionsPanel';
import Explanations from '../Conclusions/Explanations';
import WellbeingScores from './WellbeingScores';
import { RootState, Conclusion } from '@doctorlink/traversal-core';

interface WellbeingProps {
  traversalId: string;
  wellnessConclusions: Conclusion[];
  wellnessExplanations: Conclusion[];
}

const Wellbeing: React.FC<WellbeingProps> = ({
  traversalId,
  wellnessConclusions,
  wellnessExplanations,
}) => {
  return (
    <>
      <h2>Global Health Check Scores</h2>
      <PanelBlocks>
        <PanelContainer float="right">
          <Panel>
            <WellbeingScores traversalId={traversalId} />
          </Panel>
        </PanelContainer>
        <PanelContainer>
          <CheckableConclusionsPanel
            traversalId={traversalId}
            conclusions={wellnessConclusions}
          />
        </PanelContainer>
        <PanelContainer>
          <Panel>
            <Explanations
              title="Your lifestyle scores explained"
              explanations={wellnessExplanations}
            />
          </Panel>
        </PanelContainer>
      </PanelBlocks>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  wellnessConclusions: wellnessConclusionsSelector(state),
  wellnessExplanations: wellnessExplanationsSelector(state),
});
export default connect(mapStateToProps)(Wellbeing);
