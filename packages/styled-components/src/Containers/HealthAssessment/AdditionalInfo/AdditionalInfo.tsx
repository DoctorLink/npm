import React from 'react';
import { Conclusion } from '@doctorlink/traversal-core';
import { HealthReportTitle, PanelContent } from '../../../Components';
import NonCheckableConclusions from '../Conclusions/NonCheckableConclusions';

export const AdditionalInfo: React.FC<{
  additionalConclusions: Conclusion[];
}> = ({ additionalConclusions }) => {
  return (
    <PanelContent>
      <HealthReportTitle>Additional Information</HealthReportTitle>
      <NonCheckableConclusions conclusions={additionalConclusions} />
    </PanelContent>
  );
};
