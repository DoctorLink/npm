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
  return (
    <StyledPanelBlock>
      {mobileView && (
        <ComparisonReportTitle>Your numbers</ComparisonReportTitle>
      )}
      {mobileView ? (
        <CompareMyNumber
          title={active === 'current' ? currentTitle : previousTitle}
          numbers={active === 'current' ? currentNumbers : previousNumbers}
          mobileView={mobileView}
        />
      ) : (
        <React.Fragment>
          <CompareMyNumber
            style={{ marginRight: '8px' }}
            title={currentTitle}
            numbers={currentNumbers}
            mobileView={mobileView}
          />
          <CompareMyNumber
            style={{ marginLeft: '8px' }}
            title={previousTitle}
            numbers={previousNumbers}
            mobileView={mobileView}
          />
        </React.Fragment>
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
