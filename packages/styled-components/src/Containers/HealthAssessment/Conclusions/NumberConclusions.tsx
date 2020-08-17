import React from 'react';
import { WarningIcon } from '../../../Components';
import { InfoIconConnected as InfoButton } from '../../InfoIcon';
import { Conclusion, NumberConclusionContent } from './Conclusion';
import colors from '../../../Theme/base/colors';
import styled from 'styled-components';

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

const StyledInfoButton = styled(InfoButton)`
  &&& {
    .button {
      top: -10px;
    }
  }
`;

const NumberConclusion: React.FC<{
  conclusion: any;
}> = ({ conclusion }) => {
  return (
    <Conclusion>
      <NumberConclusionContent>
        <NumberTextContent>
          <NameContent>{conclusion.displayText}</NameContent>
          {conclusion.color && (
            <IconContent>
              <WarningIcon color={conclusion.color} />
            </IconContent>
          )}
        </NumberTextContent>
        <div>{conclusion.value}</div>
        <StyledInfoButton explanation={conclusion.explanation} />
      </NumberConclusionContent>
    </Conclusion>
  );
};

const NumberConclusions: React.FC<{
  conclusions: any;
}> = ({ conclusions }) => {
  return (
    <>
      {conclusions.map((conc: any) => (
        <div key={conc.assetId}>
          <NumberConclusion conclusion={conc} />
        </div>
      ))}
    </>
  );
};

export default NumberConclusions;
