import React from 'react';
import styled from 'styled-components';
import { Conclusion } from '@doctorlink/traversal-core';
import { InfoIconConnected as InfoButton } from '../../InfoIcon';

const ConclusionList = styled.ul`
  list-style: inside;
  padding-left: 0;
`;

const ConclusionItem = styled.li`
  padding-bottom: 10px;
`;

const NonCheckableConclusion: React.FC<{
  conclusion: Conclusion;
}> = ({ conclusion }) => (
  <ConclusionItem>
    {conclusion.displayText}
    <InfoButton explanation={conclusion.explanation} />
  </ConclusionItem>
);

const NonCheckableConclusions: React.FC<{
  conclusions: Conclusion[];
}> = ({ conclusions }) => {
  if (conclusions.length === 0) {
    return null;
  }

  return (
    <ConclusionList>
      {conclusions.map((conc: Conclusion) => (
        <NonCheckableConclusion key={conc.assetId} conclusion={conc} />
      ))}
    </ConclusionList>
  );
};

export default NonCheckableConclusions;
