import React from 'react';
import { connect } from 'react-redux';
import {
  Panel,
  PanelContainer,
  PanelBlocks,
  HealthReportPanelHeader,
  PanelContent,
} from '../../../Components';
import { additionalConclusionsSelector } from '../../../Selectors/healthAssessment';
import NonCheckableConclusions from '../Conclusions/NonCheckableConclusions';

const AdditionalInfo: React.FC<{
  additionalConclusions: any;
}> = ({ additionalConclusions }) => {
  return (
    <>
      <h2>Global Health Check Scores</h2>
      <PanelBlocks>
        <PanelContainer>
          <Panel>
            <HealthReportPanelHeader>
              Additional Information
            </HealthReportPanelHeader>
            <PanelContent>
              <NonCheckableConclusions conclusions={additionalConclusions} />
            </PanelContent>
          </Panel>
        </PanelContainer>
      </PanelBlocks>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  additionalConclusions: additionalConclusionsSelector(state),
});
export default connect(mapStateToProps)(AdditionalInfo);
