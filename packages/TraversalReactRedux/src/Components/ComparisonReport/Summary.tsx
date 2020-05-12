import React from 'react';
import { PanelBlocks, Panel, PanelContent, PanelConclusion } from '..';
import HealthReportPanelHeader from '../HealthReportPanelHeader';
import { NotAvailableContent } from './NotAvailableContent';
import SummaryLine, { ISummaryLine } from './SummaryLine';
import SummaryPanelContainer from '../SummaryPanelContainer';

export interface ISummary {
  risk: ISummaryLine[];
  wellness: ISummaryLine[];
  myNumbers: ISummaryLine[];
}

const Summary: React.FC<{ summary: ISummary }> = ({ summary }) => {
  let risks = convertToArray(summary.risk);
  let wellness = convertToArray(summary.wellness);
  let myNumbers = convertToArray(summary.myNumbers);
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
              {!!risks ? (
                risks.map((risk: any) => (
                  <PanelConclusion>
                    <SummaryLine summaryLine={...risk} />
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
              {!!wellness ? (
                wellness.map((wn: any) => (
                  <PanelConclusion>
                    <SummaryLine summaryLine={...wn} />
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
              {!!myNumbers ? (
                myNumbers.map((myNumber: any) => (
                  <PanelConclusion>
                    <SummaryLine summaryLine={...myNumber} />
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

function convertToArray(obj: any) {
  return Object.keys(obj).map(key => ({
    key: key,
    value: obj[key],
  }));
}

export default Summary;
