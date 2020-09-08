import React from 'react';
import RiskChart from '../RiskChart/RiskChart';
import { NotAvailableContent } from './NotAvailableContent';
import {
  StyledPanelContent,
  StyledReportTitle,
  ComparisonPanel,
} from './SummaryPanel';
import { HealthRiskModel } from '@doctorlink/traversal-core';
import { CSSProperties } from 'styled-components';

interface CompareRiskChartProps {
  title?: string;
  risks: HealthRiskModel[];
  style: CSSProperties;
}

const CompareRiskChart: React.FC<CompareRiskChartProps> = ({
  title,
  risks,
  ...props
}) => {
  return (
    <ComparisonPanel {...props}>
      {title && <StyledReportTitle>{title}</StyledReportTitle>}
      <StyledPanelContent>
        {risks ? (
          <RiskChart risks={risks} />
        ) : (
          <NotAvailableContent>No data available</NotAvailableContent>
        )}
      </StyledPanelContent>
    </ComparisonPanel>
  );
};

export default CompareRiskChart;
