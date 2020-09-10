import React, { useState } from 'react';
import { StyledPanelBlock } from './SummaryPanel';
import { WellnessScore } from '@doctorlink/traversal-core';
import CompareWellbeingChart from './CompareWellbeingChart';
import ToggleAssessment from './ToggleAssessment';
import ComparisonReportTitle from '../ComparisonReportTitle';

const CompareWellbeingCharts: React.FC<{
  currentScores: WellnessScore[];
  previousScores: WellnessScore[];
  currentTitle?: string;
  previousTitle?: string;
  mobileView?: boolean;
}> = ({
  currentScores,
  previousScores,
  currentTitle,
  previousTitle,
  mobileView,
}) => {
  const [active, setActive] = useState('current');
  const marginLeft = !mobileView ? '8px' : '0px';
  const marginRight = !mobileView ? '8px' : '0px';
  return (
    <StyledPanelBlock>
      {mobileView && <ComparisonReportTitle>Life style</ComparisonReportTitle>}
      {(active === 'current' || !mobileView) && (
        <CompareWellbeingChart
          style={{ marginRight: marginRight }}
          title={currentTitle}
          scores={currentScores}
          mobileView={mobileView}
        />
      )}
      {(active === 'previous' || !mobileView) && (
        <CompareWellbeingChart
          style={{ marginLeft: marginLeft }}
          title={previousTitle}
          scores={previousScores}
          mobileView={mobileView}
        />
      )}
      <ToggleAssessment
        active={active}
        onSetActive={setActive}
        currentTitle={currentTitle}
        previousTitle={previousTitle}
      />
    </StyledPanelBlock>
  );
};

export default CompareWellbeingCharts;
