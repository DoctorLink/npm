import React from 'react';
import { NumberConclusion as NumberConclusionModel } from '@doctorlink/traversal-core';
import { InfoIconConnected as InfoButton } from '../../InfoIcon';
import { ConclusionContent } from './Conclusion';
import styled from 'styled-components';
import { WarningIcon } from '../../../Components';

const NumberTextContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`;

const IconContent = styled.div`
  padding-left: 10px;
`;

const NameContent = styled.div`
  margin-bottom: 3px;
`;

const NumberConclusion: React.FC<{ conclusion: NumberConclusionModel }> = ({
  conclusion,
}) => (
  <ConclusionContent>
    <NumberTextContent>
      <NameContent>{conclusion.displayText}</NameContent>
      {conclusion.color && (
        <IconContent>
          <WarningIcon color={conclusion.color} />
        </IconContent>
      )}
    </NumberTextContent>
    <div>{conclusion.value}</div>
    <InfoButton explanation={conclusion.explanation} />
  </ConclusionContent>
);

const NumberConclusions: React.FC<{
  conclusions: NumberConclusionModel[];
}> = ({ conclusions }) => {
  return (
    <div>
      {conclusions.map((conc) => (
        <div key={conc.assetId}>
          <NumberConclusion conclusion={conc} />
        </div>
      ))}
    </div>
  );
};

export default NumberConclusions;
