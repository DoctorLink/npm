import React from 'react';
import { NotAvailableContent } from './NotAvailableContent';
import {
  StyledPanelContent,
  StyledReportTitle,
  ComparisonPanel,
} from './SummaryPanel';
import { WellnessScore } from '@doctorlink/traversal-core';
import { CSSProperties } from 'styled-components';
import { WellbeingChart } from '../WellbeingChart';

interface CompareWellbeingChartProps {
  title?: string;
  scores: WellnessScore[];
  mobileView?: boolean;
  style: CSSProperties;
}

const CompareWellbeingChart: React.FC<CompareWellbeingChartProps> = ({
  title,
  scores,
  mobileView,
  ...props
}) => {
  return (
    <ComparisonPanel {...props}>
      {title && !mobileView && <StyledReportTitle>{title}</StyledReportTitle>}
      <StyledPanelContent>
        {scores ? (
          <WellbeingChart scores={scores} />
        ) : (
          <NotAvailableContent>No data available</NotAvailableContent>
        )}
      </StyledPanelContent>
    </ComparisonPanel>
  );
};

export default CompareWellbeingChart;
