import React from 'react';
import { NumberConclusion } from '@doctorlink/traversal-core';
import CompareMyNumber from './CompareMyNumber';
import { StyledPanelBlock } from './SummaryPanel';

const CompareNumbers: React.FC<{
  currentNumbers: NumberConclusion[];
  pastNumbers: NumberConclusion[];
  currentTitle?: string;
  pastTitle?: string;
}> = ({ currentNumbers, pastNumbers, currentTitle, pastTitle }) => {
  return (
    <StyledPanelBlock>
      <CompareMyNumber
        style={{ marginRight: '8px' }}
        title={currentTitle}
        numbers={currentNumbers}
      />
      <CompareMyNumber
        style={{ marginLeft: '8px' }}
        title={pastTitle}
        numbers={pastNumbers}
      />
    </StyledPanelBlock>
  );
};

export default CompareNumbers;
