import React from 'react';
import { NumberConclusion as NumberConclusionModel } from '@doctorlink/traversal-core';
import { PanelConclusion } from '../../../Components';
import { InfoIconConnected as InfoButton } from '../../InfoIcon';
import {
  Conclusion,
  ConclusionContent,
  NumberConclusionContent,
} from './Conclusion';

const NumberConclusion: React.FC<{ conclusion: NumberConclusionModel }> = ({
  conclusion,
}) => (
  <Conclusion>
    <NumberConclusionContent>
      <ConclusionContent>{conclusion.displayText}</ConclusionContent>
      <ConclusionContent>
        <strong>{conclusion.value}</strong>
      </ConclusionContent>
    </NumberConclusionContent>
    <InfoButton explanation={conclusion.explanation} />
  </Conclusion>
);

const NumberConclusions: React.FC<{
  conclusions: NumberConclusionModel[];
}> = ({ conclusions }) => {
  return (
    <>
      {conclusions.map((conc) => (
        <PanelConclusion key={conc.assetId}>
          <NumberConclusion conclusion={conc} />
        </PanelConclusion>
      ))}
    </>
  );
};

export default NumberConclusions;
