import React from 'react';
import { PanelContent } from '../../../Components';
import NumberConclusions from '../Conclusions/NumberConclusions';
import HealthReportTitle from '../../../Components/HealthReportTitle';
import styled from 'styled-components';
import { NumberConclusion } from '@doctorlink/traversal-core';

const StyledContent = styled(PanelContent)`
  line-height: 3;
  @media screen and (max-width: 799px) {
    margin-top: -16px;
  }
`;
export const MyNumbers: React.FC<{
  numbersConclusions: NumberConclusion[];
}> = ({ numbersConclusions }) => {
  const title = 'My numbers';
  return (
    <StyledContent title={title}>
      <HealthReportTitle>{title}</HealthReportTitle>
      <NumberConclusions conclusions={numbersConclusions} />
    </StyledContent>
  );
};
