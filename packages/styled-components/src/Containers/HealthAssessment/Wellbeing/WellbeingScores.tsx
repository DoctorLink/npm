import React from 'react';
import styled from 'styled-components';
import {
  HealthReportTitle,
  PanelContent,
  WellbeingChart,
  UpdateWhenVisible,
} from '../../../Components';
import { useWellness } from '../../../Hooks';

const StyledPanelContent = styled(PanelContent)`
  @media screen and (max-width: 799px) {
    margin-top: -16px;
  }
`;

const WellbeingScores: React.FC<{
  traversalId: string;
}> = ({ traversalId }) => {
  const wellness = useWellness(traversalId);
  return (
    <StyledPanelContent>
      <HealthReportTitle>My lifestyle and wellbeing scores</HealthReportTitle>
      <UpdateWhenVisible offset={{ top: -50 }}>
        <WellbeingChart scores={wellness.scores} />
      </UpdateWhenVisible>
    </StyledPanelContent>
  );
};

export default WellbeingScores;
