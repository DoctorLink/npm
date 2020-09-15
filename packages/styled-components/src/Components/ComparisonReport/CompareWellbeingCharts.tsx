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
  return (
    <StyledPanelBlock>
      {mobileView && <ComparisonReportTitle>Lifestyle</ComparisonReportTitle>}
      {mobileView ? (
        <CompareWellbeingChart
          title={active === 'current' ? currentTitle : previousTitle}
          scores={active === 'current' ? currentScores : previousScores}
          mobileView={mobileView}
        />
      ) : (
        <React.Fragment>
          <CompareWellbeingChart
            style={{ marginRight: '8px' }}
            title={currentTitle}
            scores={currentScores}
            mobileView={mobileView}
          />
          <CompareWellbeingChart
            style={{ marginLeft: '8px' }}
            title={previousTitle}
            scores={previousScores}
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

export default CompareWellbeingCharts;
