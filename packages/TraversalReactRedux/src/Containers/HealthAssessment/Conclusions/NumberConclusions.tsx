import React from 'react';
import { PanelConclusion } from '../../../Components';
import InfoButton from '../../InfoIcon';
import {
  Conclusion,
  ConclusionContent,
  NumberConclusionContent,
} from './Conclusion';

const NumberConclusion: React.FC<{
  conclusion: any;
}> = ({ conclusion }) => (
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
  conclusions: any;
}> = ({ conclusions }) => {
  return (
    <>
      {conclusions.map((conc: any) => (
        <PanelConclusion key={conc.assetId}>
          <NumberConclusion conclusion={conc} />
        </PanelConclusion>
      ))}
    </>
  );
};

export default NumberConclusions;
