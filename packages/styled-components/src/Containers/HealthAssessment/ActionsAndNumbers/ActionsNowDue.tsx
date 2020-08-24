import React from 'react';
import { HealthReportTitle, PanelContent } from '../../../Components';
import NonCheckableConclusions from '../Conclusions/NonCheckableConclusions';
import { Conclusion } from '@doctorlink/traversal-core';

export const ActionsNowDue: React.FC<{
  actionConclusions: Conclusion[];
}> = ({ actionConclusions }) => {
  return (
    <PanelContent>
      <HealthReportTitle>Now due</HealthReportTitle>
      <NonCheckableConclusions conclusions={actionConclusions} />
    </PanelContent>
  );
};
