import React from 'react';
import { Conclusion } from '@doctorlink/traversal-core';
import { InfoIconConnected as InfoButton } from '../../InfoIcon';
import { ConclusionContent } from './Conclusion';

const NonCheckableConclusion: React.FC<{
  conclusion: Conclusion;
}> = ({ conclusion }) => (
  <ConclusionContent>
    <div>{conclusion.displayText}</div>
    <InfoButton explanation={conclusion.explanation} />
  </ConclusionContent>
);

const NonCheckableConclusions: React.FC<{
  conclusions: Conclusion[];
}> = ({ conclusions }) => {
  if (conclusions.length === 0) {
    return null;
  }

  return (
    <>
      {conclusions.map((conc) => (
        <NonCheckableConclusion key={conc.assetId} conclusion={conc} />
      ))}
    </>
  );
};

export default NonCheckableConclusions;
