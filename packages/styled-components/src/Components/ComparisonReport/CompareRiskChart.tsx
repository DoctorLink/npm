import React from 'react';
import RiskChart from '../RiskChart/RiskChart';
import { NotAvailableContent } from './NotAvailableContent';
import { StyledPanelContent, StyledReportTitle } from './SummaryPanel';
import { HealthRiskModel } from '@doctorlink/traversal-core';
import styled, { CSSProperties } from 'styled-components';
import PanelBox from '../PanelBox';

const StyledPanelBox = styled(PanelBox)`
  @media screen and (min-width: 800px) {
    width: 49.22%;
    float: left;
  }
`;

interface CompareRiskChartProps {
  title: string;
  risks: HealthRiskModel[];
  style: CSSProperties;
}

const CompareRiskChart: React.FC<CompareRiskChartProps> = ({
  title,
  risks,
  ...props
}) => {
  return (
    <StyledPanelBox {...props}>
      {title && <StyledReportTitle>{title}</StyledReportTitle>}
      <StyledPanelContent>
        {risks ? (
          <RiskChart risks={risks} />
        ) : (
          <NotAvailableContent>No data available</NotAvailableContent>
        )}
      </StyledPanelContent>
    </StyledPanelBox>
  );
};

export default CompareRiskChart;
