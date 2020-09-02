import React from 'react';
import { PanelContent } from '..';
import { NotAvailableContent } from './NotAvailableContent';
import SummaryLine, { ISummaryLine } from './SummaryLine';
import SummaryPanelContainer from '../SummaryPanelContainer';
import { HealthComparisonSummary } from '@doctorlink/traversal-core';
import ComparisonReportTitle from '../ComparisonReportTitle';
import PanelBox from '../PanelBox';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';
import SummaryDivider from '../SummaryDivider';

const StyledPanelContent = styled(PanelContent)`
  padding: 16px 0;
  @media screen and (min-width: 800px) {
    padding: ${(p) => p.theme.panelcontent.padding}px
      ${(p) => p.theme.panelcontent.padding}px;
  }
`;

StyledPanelContent.defaultProps = {
  theme: defaultTheme,
};

const StyledPanelBox = styled(PanelBox)`
  overflow: auto;
  @media screen and (min-width: 800px) {
    min-height: 470px;
    max-height: 485px;
  }
  padding-top: 15px;
`;

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
