import React from 'react';
import { NotAvailableContent } from './NotAvailableContent';
import SummaryLine, { ISummaryLine } from './SummaryLine';
import SummaryPanelContainer from '../SummaryPanelContainer';
import { HealthComparisonSummary } from '@doctorlink/traversal-core';
import ComparisonReportTitle from '../ComparisonReportTitle';
import SummaryDivider from '../SummaryDivider';
import { StyledPanelBox, StyledPanelContent } from './SummaryPanel';

const Summary: React.FC<{ summary: HealthComparisonSummary }> = ({
  summary,
}) => {
  const risks = convertToArray(summary.risk);
  const wellness = convertToArray(summary.wellness);
  const myNumbers = convertToArray(summary.myNumbers);
  return (
    <>
      <SummaryPanelContainer>
        <StyledPanelBox>
          <ComparisonReportTitle>Health risk summary</ComparisonReportTitle>
          <StyledPanelContent>
            {risks ? (
              risks.map((risk) => (
                <SummaryLine key={risk.key} summaryLine={risk} />
              ))
            ) : (
              <NotAvailableContent>No data available</NotAvailableContent>
            )}
          </StyledPanelContent>
        </StyledPanelBox>
        <SummaryDivider />
      </SummaryPanelContainer>

      <SummaryPanelContainer>
        <StyledPanelBox>
          <ComparisonReportTitle>Lifestyle summary</ComparisonReportTitle>
          <StyledPanelContent>
            {wellness ? (
              wellness.map((wn) => (
                <SummaryLine key={wn.key} summaryLine={wn} />
              ))
            ) : (
              <NotAvailableContent>No data available</NotAvailableContent>
            )}
          </StyledPanelContent>
        </StyledPanelBox>
        <SummaryDivider />
      </SummaryPanelContainer>

      <SummaryPanelContainer>
        <StyledPanelBox>
          <ComparisonReportTitle>My numbers summary</ComparisonReportTitle>
          <StyledPanelContent>
            {myNumbers ? (
              myNumbers.map((myNumber) => (
                <SummaryLine key={myNumber.key} summaryLine={myNumber} />
              ))
            ) : (
              <NotAvailableContent>No data available</NotAvailableContent>
            )}
          </StyledPanelContent>
        </StyledPanelBox>
      </SummaryPanelContainer>
    </>
  );
};

function convertToArray(obj: Record<string, string>): ISummaryLine[] {
  return Object.keys(obj).map((key) => ({
    key: key,
    value: obj[key],
  }));
}

export default Summary;
