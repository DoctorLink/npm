import React from 'react';
import { Conclusion } from '@doctorlink/traversal-core';
import {
  Panel,
  PanelContainer,
  HealthReportTitle,
  PanelContent,
} from '../../../Components';
import NonCheckableConclusions from '../Conclusions/NonCheckableConclusions';

export const AdditionalInfo: React.FC<{
  additionalConclusions: Conclusion[];
}> = ({ additionalConclusions }) => {
  return (
    <PanelContainer>
      <Panel>
        <PanelContent>
          <HealthReportTitle>Additional Information</HealthReportTitle>
          <NonCheckableConclusions conclusions={additionalConclusions} />
        </PanelContent>
      </Panel>
    </PanelContainer>
  );
};
