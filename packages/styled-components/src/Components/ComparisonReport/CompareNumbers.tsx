import React from 'react';
import { PanelBlocks, PanelContainer, Panel, PanelContent } from '..';
import HealthReportPanelHeader from '../HealthReportPanelHeader';
import NumberConclusions from '../../Containers/HealthAssessment/Conclusions/NumberConclusions';
import { NotAvailableContent } from './NotAvailableContent';

const CompareNumbers: React.FC<{
  currentNumbers: any;
  pastNumbers: any;
}> = ({ currentNumbers, pastNumbers }) => {
  return (
    <PanelBlocks style={{ minHeight: '500px' }}>
      <PanelContainer>
        <Panel>
          <HealthReportPanelHeader>
            Your Current Numbers
          </HealthReportPanelHeader>
          <PanelContent>
            {currentNumbers ? (
              <NumberConclusions conclusions={currentNumbers} />
            ) : (
              <NotAvailableContent>No data available</NotAvailableContent>
            )}
          </PanelContent>
        </Panel>
      </PanelContainer>
      <PanelContainer>
        <Panel>
          <HealthReportPanelHeader>Your Past Numbers</HealthReportPanelHeader>
          <PanelContent>
            {pastNumbers ? (
              <NumberConclusions conclusions={pastNumbers} />
            ) : (
              <NotAvailableContent>No data available</NotAvailableContent>
            )}
          </PanelContent>
        </Panel>
      </PanelContainer>
    </PanelBlocks>
  );
};

export default CompareNumbers;
