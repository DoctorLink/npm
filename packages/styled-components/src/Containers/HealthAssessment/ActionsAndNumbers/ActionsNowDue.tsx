import React from 'react';
import {
  Panel,
  PanelContainer,
  HealthReportTitle,
  PanelContent,
} from '../../../Components';
import NonCheckableConclusions from '../Conclusions/NonCheckableConclusions';
import { Conclusion } from '@doctorlink/traversal-core';

export const ActionsNowDue: React.FC<{
  actionConclusions: Conclusion[];
}> = ({ actionConclusions }) => {
  return (
    <PanelContainer>
      <Panel>
        <PanelContent>
          <HealthReportTitle>Now due</HealthReportTitle>
          <NonCheckableConclusions conclusions={actionConclusions} />
        </PanelContent>
      </Panel>
    </PanelContainer>
  );
};
