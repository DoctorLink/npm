import React from 'react';
import {
  ConclusionContainer,
  ConclusionContent,
  ComparisonContent,
} from '../../Containers/HealthAssessment/Conclusions/Conclusion';

export interface ISummaryLine {
  key: string;
  value: string;
}

const SummaryLine: React.FC<{
  summaryLine: ISummaryLine;
}> = ({ summaryLine }) => {
  let clr = 'black';
  switch (summaryLine.value) {
    case 'Better':
      clr = 'green';
      break;
    case 'Worse':
      clr = 'red';
      break;
    case 'NoChange':
      clr = 'grey';
      break;
    default:
      break;
  }

  let text = summaryLine.value;
  switch (summaryLine.value) {
    case 'NotApplicable':
      text = 'NA';
      break;
    case 'NoChange':
      text = 'No Change';
      break;
    default:
      break;
  }

  return (
    <ConclusionContainer>
      <ConclusionContent>
        <ComparisonContent>{summaryLine.key}</ComparisonContent>
        <ComparisonContent>
          <strong style={{ color: clr }}>{text}</strong>
        </ComparisonContent>
      </ConclusionContent>
    </ConclusionContainer>
  );
};

export default SummaryLine;
