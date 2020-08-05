import React from 'react';
import { PanelBlocks, PanelContainer, Panel } from '..';
import HealthReportPanelHeader from '../HealthReportPanelHeader';
import { WellbeingChart } from '../WellbeingChart/WellbeingChart';
import { NotAvailableContent } from './NotAvailableContent';

const CompareWellbeingCharts: React.FC<{
  currentScores: any;
  pastScores: any;
}> = ({ currentScores, pastScores }) => {
  return (
    <PanelBlocks style={{ minHeight: '470px' }}>
      <PanelContainer float="left">
        <HealthReportPanelHeader>Current Wellbeing</HealthReportPanelHeader>
        <Panel>
          {currentScores ? (
            <WellbeingChart scores={currentScores} />
          ) : (
            <NotAvailableContent>No data available</NotAvailableContent>
          )}
        </Panel>
      </PanelContainer>
      <PanelContainer float="right">
        <HealthReportPanelHeader>Past Wellbeing</HealthReportPanelHeader>
        <Panel>
          {pastScores ? (
            <WellbeingChart scores={pastScores} />
          ) : (
            <NotAvailableContent>No data available</NotAvailableContent>
          )}
        </Panel>
      </PanelContainer>
    </PanelBlocks>
  );
};

export default CompareWellbeingCharts;
