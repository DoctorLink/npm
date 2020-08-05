import React from 'react';
import {
  Panel,
  HealthReportPanelHeader,
  PanelContent,
} from '../../../Components';
import CheckableConclusions from './CheckableConclusions';

const CheckableConclusionsPanel: React.FC<{
  traversalId: any;
  conclusions: any;
}> = ({ conclusions }) => (
  <Panel>
    <HealthReportPanelHeader>
      See the impact of making the following changes to your lifestyle
    </HealthReportPanelHeader>
    <PanelContent>
      <CheckableConclusions conclusions={conclusions} />
    </PanelContent>
  </Panel>
);

export default CheckableConclusionsPanel;
