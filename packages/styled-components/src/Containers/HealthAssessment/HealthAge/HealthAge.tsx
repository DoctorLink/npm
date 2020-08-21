import React from 'react';
import { connect } from 'react-redux';
import {
  Panel,
  PanelContainer,
  PanelBlocks,
  HealthReportPanelHeader,
  PanelContent,
} from '../../../Components';
import { replaceLineBreaks } from '@doctorlink/traversal-core';
import {
  healthAgeConclusionsSelector,
  healthAgeExplanationSelector,
} from '@doctorlink/traversal-redux';
import CheckableConclusions from '../Conclusions/CheckableConclusions';
import HealthAgeIndicator from './HealthAgeIndicator';
import { PanelBox } from '../../../Components';
import CheckableConclusionHeader from '../../../Components/CheckableConclusionHeader';

const HealthAge: React.FC<{
  traversalId: any;
  healthAgeConclusions: any;
  explanation: any;
}> = ({ traversalId, healthAgeConclusions, explanation }) => {
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
              <HealthReportPanelHeader>
                Your health age explained
              </HealthReportPanelHeader>
              <PanelContent>
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

const mapStateToProps = (state: any) => ({
  healthAgeConclusions: healthAgeConclusionsSelector(state),
  explanation: healthAgeExplanationSelector(state),
});
export default connect(mapStateToProps)(HealthAge);
