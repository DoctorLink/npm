import React from 'react';
import {
  Panel,
  PanelContainer,
  HealthReportPanelHeader,
  PanelContent,
} from '../../../Components';
import NonCheckableConclusions from '../Conclusions/NonCheckableConclusions';

export const ActionsNowDue: React.FC<{
  actionConclusions: any;
}> = ({ actionConclusions }) => {
  return (
    <PanelContainer>
      <Panel>
        <HealthReportPanelHeader>Now due</HealthReportPanelHeader>
        <PanelContent>
          <NonCheckableConclusions conclusions={actionConclusions} />
        </PanelContent>
      </Panel>
    </PanelContainer>
  );
};
