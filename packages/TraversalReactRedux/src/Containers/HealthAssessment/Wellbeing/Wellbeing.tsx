import React from 'react';
import { connect } from 'react-redux';
import { PoseGroup } from 'react-pose';
import { Panel, PanelContainer } from '../../../Components';
import {
  wellnessConclusionsSelector,
  wellnessExplanationsSelector,
} from '../../../Selectors/healthAssessment';
import CheckableConclusionsPanel from '../Conclusions/CheckableConclusionsPanel';
import Explanations from '../Conclusions/Explanations';
import WellbeingScores from './WellbeingScores';

const Wellbeing: React.FC<{
  traversalId: any;
  wellnessConclusions: any;
  wellnessExplanations: any;
}> = ({ traversalId, wellnessConclusions, wellnessExplanations }) => {
  return (
    <PoseGroup animateOnMount={true}>
      <PanelContainer key="chart" float="right">
        <Panel>
          <WellbeingScores traversalId={traversalId} />
        </Panel>
      </PanelContainer>
      <PanelContainer key="conclusions">
        <CheckableConclusionsPanel
          traversalId={traversalId}
          conclusions={wellnessConclusions}
        />
      </PanelContainer>
      <PanelContainer key="explanations">
        <Panel>
          <Explanations
            title="Your lifestyle scores explained"
            explanations={wellnessExplanations}
          />
        </Panel>
      </PanelContainer>
    </PoseGroup>
  );
};

const mapStateToProps = (state: any) => ({
  wellnessConclusions: wellnessConclusionsSelector(state),
  wellnessExplanations: wellnessExplanationsSelector(state),
});
export default connect(mapStateToProps)(Wellbeing);
