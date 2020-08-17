import React from 'react';
import { PanelConclusion } from '../../../Components';
import { InfoIconConnected as InfoButton } from '../../InfoIcon';
import { Conclusion } from './Conclusion';

const NonCheckableConclusion: React.FC<{
  conclusion: any;
}> = ({ conclusion }) => (
  <Conclusion>
    <div>{conclusion.displayText}</div>
    <InfoButton explanation={conclusion.explanation} />
  </Conclusion>
);

const NonCheckableConclusions: React.FC<{
  conclusions: any;
}> = ({ conclusions }) => {
  if (conclusions.length === 0) {
    return null;
  }

  return (
    <>
      {conclusions.map((conc: any) => (
        <PanelConclusion key={conc.assetId}>
          <NonCheckableConclusion conclusion={conc} />
        </PanelConclusion>
      ))}
    </>
  );
};

export default NonCheckableConclusions;
