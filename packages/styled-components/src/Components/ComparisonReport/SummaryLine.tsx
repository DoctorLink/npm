import React from 'react';
import DisplayText from '../DisplayText';
import TickIcon from './TickIcon';
import CrossIcon from './CrossIcon';
import styled from 'styled-components';

export interface ISummaryLine {
  key: string;
  value: string;
}

const SummaryLine: React.FC<{
  summaryLine: ISummaryLine;
}> = ({ summaryLine }) => {
  let text = summaryLine.value;
  switch (summaryLine.value) {
    case 'NotApplicable':
      text = 'Not applicable';
      break;
    case 'NoChange':
      text = 'No Change';
      break;
    default:
      break;
  }

  const SummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 0 15px 0;
    box-shadow: 0 1px 0 0 #e2e2e2;
    &:last-of-type {
      box-shadow: none;
      padding: 15px 0 0 0;
    }
    &:first-of-type {
      border-top: 1px solid #e2e2e2;
    }
  `;

  const SummaryKey = styled(DisplayText)`
    padding-left: 0px;
    width: 50%;
  `;

  const SummaryValue = styled(DisplayText)`
    text-align: right;
    width: 40%;
  `;

  const Icon = styled(DisplayText)`
    width: 10%;
  `;

  return (
    <SummaryRow>
      <SummaryKey>{summaryLine.key}</SummaryKey>
      <SummaryValue>{text}</SummaryValue>
      <Icon>
        {summaryLine.value === 'Better' ? (
          <TickIcon />
        ) : summaryLine.value === 'Worse' ? (
          <CrossIcon />
        ) : (
          <></>
        )}
      </Icon>
    </SummaryRow>
  );
};

export default SummaryLine;
