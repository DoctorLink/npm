import React from 'react';
import { PanelBlocks, PanelContainer, Panel } from '..';
import RiskChart from '../RiskChart/RiskChart';
import HealthReportPanelHeader from '../HealthReportPanelHeader';
import { NotAvailableContent } from './NotAvailableContent';

const CompareRiskCharts: React.FC<{
  currentScores: any;
  pastScores: any;
}> = ({ currentScores, pastScores }) => {
  return (
    <PanelBlocks style={{ minHeight: '520px' }}>
      <PanelContainer float="left">
        <HealthReportPanelHeader>Current Risk</HealthReportPanelHeader>
        <Panel>
          {currentScores ? (
            <RiskChart risks={currentScores} />
          ) : (
            <NotAvailableContent>No data available</NotAvailableContent>
          )}
        </Panel>
      </PanelContainer>
      <PanelContainer float="right">
        <HealthReportPanelHeader>Past Risk</HealthReportPanelHeader>
        <Panel>
          {pastScores ? (
            <RiskChart risks={pastScores} />
          ) : (
            <NotAvailableContent>No data available</NotAvailableContent>
          )}
        </Panel>
      </PanelContainer>
    </PanelBlocks>
  );
};

export default CompareRiskCharts;
