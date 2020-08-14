import React from 'react';
import { PanelBlocks, Panel, PanelContent, PanelConclusion } from '..';
import HealthReportPanelHeader from '../HealthReportPanelHeader';
import { NotAvailableContent } from './NotAvailableContent';
import SummaryLine, { ISummaryLine } from './SummaryLine';
import SummaryPanelContainer from '../SummaryPanelContainer';
import { HealthComparisonSummary } from '@doctorlink/traversal-core';

export interface ISummary {
  risk: ISummaryLine[];
  wellness: ISummaryLine[];
  myNumbers: ISummaryLine[];
}

const Summary: React.FC<{ summary: HealthComparisonSummary }> = ({
  summary,
}) => {
  const risks = convertToArray(summary.risk);
  const wellness = convertToArray(summary.wellness);
  const myNumbers = convertToArray(summary.myNumbers);
  const myNumbersSummaryHeight = myNumbers.length === 0 ? 230 : 670;
  return (
    <>
      <PanelBlocks>
        <SummaryPanelContainer>
          <Panel>
            <HealthReportPanelHeader>
              Your Risks Summary
            </HealthReportPanelHeader>
            <PanelContent>
              {risks ? (
                risks.map((risk: any) => (
                  <PanelConclusion key={risk.key}>
                    <SummaryLine summaryLine={risk} />
                  </PanelConclusion>
                ))
              ) : (
                <NotAvailableContent>No data available</NotAvailableContent>
              )}
            </PanelContent>
          </Panel>
        </SummaryPanelContainer>
      </PanelBlocks>
      <PanelBlocks>
        <SummaryPanelContainer>
          <Panel>
            <HealthReportPanelHeader>
              Your Wellness Summary
            </HealthReportPanelHeader>
            <PanelContent>
              {wellness ? (
                wellness.map((wn: any) => (
                  <PanelConclusion key={wn.key}>
                    <SummaryLine summaryLine={wn} />
                  </PanelConclusion>
                ))
              ) : (
                <NotAvailableContent>No data available</NotAvailableContent>
              )}
            </PanelContent>
          </Panel>
        </SummaryPanelContainer>
      </PanelBlocks>
      <PanelBlocks style={{ minHeight: myNumbersSummaryHeight + 'px' }}>
        <SummaryPanelContainer>
          <Panel>
            <HealthReportPanelHeader>
              Your Numbers Summary
            </HealthReportPanelHeader>
            <PanelContent>
              {myNumbers ? (
                myNumbers.map((myNumber: any) => (
                  <PanelConclusion key={myNumber.key}>
                    <SummaryLine summaryLine={myNumber} />
                  </PanelConclusion>
                ))
              ) : (
                <NotAvailableContent>No data available</NotAvailableContent>
              )}
            </PanelContent>
          </Panel>
        </SummaryPanelContainer>
      </PanelBlocks>
    </>
  );
};

function convertToArray(obj: Record<string, string>) {
  return Object.keys(obj).map((key) => ({
    key: key,
    value: obj[key],
  }));
}

export default Summary;
