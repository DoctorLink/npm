import React, { useState } from 'react';
import { NumberConclusion } from '@doctorlink/traversal-core';
import CompareMyNumber from './CompareMyNumber';
import { StyledPanelBlock } from './SummaryPanel';
import ToggleAssessment from './ToggleAssessment';
import ComparisonReportTitle from '../ComparisonReportTitle';

const CompareNumbers: React.FC<{
  currentNumbers: NumberConclusion[];
  previousNumbers: NumberConclusion[];
  currentTitle?: string;
  previousTitle?: string;
  mobileView?: boolean;
}> = ({
  currentNumbers,
  previousNumbers,
  currentTitle,
  previousTitle,
  mobileView,
}) => {
  const [active, setActive] = useState('current');
  const marginLeft = !mobileView ? '8px' : '0px';
  const marginRight = !mobileView ? '8px' : '0px';
  return (
    <StyledPanelBlock>
      {mobileView && (
        <ComparisonReportTitle>Your numbers</ComparisonReportTitle>
      )}
      {(active === 'current' || !mobileView) && (
        <CompareMyNumber
          style={{ marginRight: marginRight }}
          title={currentTitle}
          numbers={currentNumbers}
          mobileView={mobileView}
        />
      )}
      {(active === 'previous' || !mobileView) && (
        <CompareMyNumber
          style={{ marginLeft: marginLeft }}
          title={previousTitle}
          numbers={previousNumbers}
          mobileView={mobileView}
        />
      )}
      {mobileView && (
        <ToggleAssessment
          active={active}
          onSetActive={setActive}
          currentTitle={currentTitle}
          previousTitle={previousTitle}
        />
      )}
    </StyledPanelBlock>
  );
};

export default CompareNumbers;
