import React from 'react';
import { PanelContainer, PanelContent, PanelBox } from '../../../Components';
import NumberConclusions from '../Conclusions/NumberConclusions';
import HealthReportTitle from '../../../Components/HealthReportTitle';
import styled from 'styled-components';
const StyledContent = styled(PanelContent)`
  line-height: 3;
  @media screen and (max-width: 799px) {
    margin-top: -16px;
  }
`;
export const MyNumbers: React.FC<{ numbersConclusions: any }> = ({
  numbersConclusions,
}) => {
  const title = 'My numbers';
  return (
    <StyledContent title={title}>
      <HealthReportTitle style={{ marginBottom: '10px' }}>
        {title}
      </HealthReportTitle>
      <NumberConclusions conclusions={numbersConclusions} />
    </StyledContent>
  );
};
