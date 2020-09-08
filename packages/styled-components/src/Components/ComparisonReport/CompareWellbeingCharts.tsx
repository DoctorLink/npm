import React from 'react';
import { StyledPanelBlock } from './SummaryPanel';
import { WellnessScore } from '@doctorlink/traversal-core';
import CompareWellbeingChart from './CompareWellbeingChart';

const CompareWellbeingCharts: React.FC<{
  currentScores: WellnessScore[];
  pastScores: WellnessScore[];
  currentTitle?: string;
  pastTitle?: string;
}> = ({ currentScores, pastScores, currentTitle, pastTitle }) => {
  return (
    <StyledPanelBlock>
      <CompareWellbeingChart
        style={{ marginRight: '8px' }}
        title={currentTitle}
        scores={currentScores}
      />
      <CompareWellbeingChart
        style={{ marginLeft: '8px' }}
        title={pastTitle}
        scores={pastScores}
      />
    </StyledPanelBlock>
  );
};

export default CompareWellbeingCharts;
