import React from 'react';
import { SummaryPanelContainer } from '..';
import RiskChart from '../RiskChart/RiskChart';
import { NotAvailableContent } from './NotAvailableContent';
import {
  StyledPanelBox,
  StyledPanelContent,
  StyledPanelBlock,
  StyledReportTitle,
} from './SummaryPanel';
import { HealthRiskModel } from '@doctorlink/traversal-core';
import styled from 'styled-components';

const StyledSummaryPanelContainer = styled(SummaryPanelContainer)`
  width: 50%;
`;

const CompareRiskCharts: React.FC<{
  currentScores: HealthRiskModel[];
  pastScores: HealthRiskModel[];
  currentTitle: string;
  pastTitle: string;
}> = ({ currentScores, pastScores, currentTitle, pastTitle }) => {
  return (
    <StyledPanelBlock>
      <StyledSummaryPanelContainer>
        <StyledPanelBox>
          <StyledReportTitle>{currentTitle}</StyledReportTitle>
          <StyledPanelContent>
            {currentScores ? (
              <RiskChart risks={currentScores} />
            ) : (
              <NotAvailableContent>No data available</NotAvailableContent>
            )}
          </StyledPanelContent>
        </StyledPanelBox>
      </StyledSummaryPanelContainer>
      <StyledSummaryPanelContainer>
        <StyledPanelBox>
          <StyledReportTitle>{pastTitle}</StyledReportTitle>
          <StyledPanelContent>
            {pastScores ? (
              <RiskChart risks={pastScores} />
            ) : (
              <NotAvailableContent>No data available</NotAvailableContent>
            )}
          </StyledPanelContent>
        </StyledPanelBox>
      </StyledSummaryPanelContainer>
    </StyledPanelBlock>
  );
};

export default CompareRiskCharts;
