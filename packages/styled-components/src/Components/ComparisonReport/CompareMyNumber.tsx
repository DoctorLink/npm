import React from 'react';
import { NotAvailableContent } from './NotAvailableContent';
import {
  StyledPanelContent,
  StyledReportTitle,
  ComparisonPanel,
} from './SummaryPanel';
import { NumberConclusion } from '@doctorlink/traversal-core';
import { CSSProperties } from 'styled-components';
import NumberConclusions from '../../Containers/HealthAssessment/Conclusions/NumberConclusions';

interface CompareMyNumberProps {
  title?: string;
  numbers: NumberConclusion[];
  style: CSSProperties;
}

const CompareMyNumber: React.FC<CompareMyNumberProps> = ({
  title,
  numbers,
  ...props
}) => {
  return (
    <ComparisonPanel {...props}>
      {title && <StyledReportTitle>{title}</StyledReportTitle>}
      <StyledPanelContent>
        {numbers ? (
          <NumberConclusions conclusions={numbers} />
        ) : (
          <NotAvailableContent>No data available</NotAvailableContent>
        )}
      </StyledPanelContent>
    </ComparisonPanel>
  );
};

export default CompareMyNumber;
