import React from 'react';
import { connect } from 'react-redux';
import {
  Panel,
  PanelContainer,
  PanelBlocks,
  HealthReportTitle,
  PanelContent,
} from '../../../Components';
import {
  replaceLineBreaks,
  Conclusion,
  RootState,
} from '@doctorlink/traversal-core';
import {
  healthAgeConclusionsSelector,
  healthAgeExplanationSelector,
} from '@doctorlink/traversal-redux';
import CheckableConclusions from '../Conclusions/CheckableConclusions';
import HealthAgeIndicator from './HealthAgeIndicator';
import { PanelBox } from '../../../Components';
import CheckableConclusionHeader from '../../../Components/CheckableConclusionHeader';

interface HealthAgeProps {
  traversalId: string;
  healthAgeConclusions: Conclusion[];
  explanation: string | null;
}

const HealthAge: React.FC<HealthAgeProps> = ({
  traversalId,
  healthAgeConclusions,
  explanation,
}) => {
  return (
    <>
      <PanelBlocks>
        <PanelContainer>
          <PanelBox>
            <HealthAgeIndicator traversalId={traversalId} />
          </PanelBox>
          <CheckableConclusionHeader />
          <Panel>
            <PanelContent>
              <CheckableConclusions conclusions={healthAgeConclusions} />
            </PanelContent>
          </Panel>
        </PanelContainer>
        {explanation && (
          <PanelContainer>
            <Panel>
              <PanelContent>
                <HealthReportTitle>Your health age explained</HealthReportTitle>
                <div
                  dangerouslySetInnerHTML={{
                    __html: replaceLineBreaks(explanation),
                  }}
                />
              </PanelContent>
            </Panel>
          </PanelContainer>
        )}
      </PanelBlocks>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  healthAgeConclusions: healthAgeConclusionsSelector(state),
  explanation: healthAgeExplanationSelector(state),
});
export default connect(mapStateToProps)(HealthAge);
