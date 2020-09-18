import React from 'react';
import {
  PanelContent,
  InteractiveRiskChart,
  UpdateWhenVisible,
} from '../../../Components';
import { useRiskSummary } from '../../../Hooks';
import HealthReportTitle from '../../../Components/HealthReportTitle';
import styled from 'styled-components';
import { HealthRisksModel } from '@doctorlink/traversal-core';

const AgeOptions = [50, 60, 70, 80, 90, 100, 110];

const Header = styled.div`
  line-height: 2;
`;

export interface RiskScoresProps {
  riskSummary: HealthRisksModel;
}

export const RiskScores: React.FC<RiskScoresProps> = ({ riskSummary }) => {
  return (
    <PanelContent>
      <Header>
        <HealthReportTitle>My health risks</HealthReportTitle>
      </Header>
      <UpdateWhenVisible offset={{ top: -30 }}>
        <InteractiveRiskChart riskSummary={riskSummary} />
      </UpdateWhenVisible>
    </PanelContent>
  );
};

export const RiskScoresConnected: React.FC<{
  traversalId: string;
}> = ({ traversalId }) => {
  const riskSummary = useRiskSummary(traversalId, AgeOptions);
  if (!riskSummary) return null;
  return <RiskScores riskSummary={riskSummary} />;
};
