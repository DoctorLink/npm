import React from 'react';
import styled from 'styled-components';
import { minimumRiskColor, changeableRiskColor } from './riskChartSettings';
import { HealthRiskModel } from '@doctorlink/traversal-core';
import { LabelledBar, chartSettings } from '../HorizontalBarChart';

const StyledRect = styled.rect`
  transition: width 0.3s, x 0.3s;
`;

interface RiskBarProps {
  risk: HealthRiskModel;
  highlightRisk?: string;
}

const RiskBar: React.FC<RiskBarProps> = ({ risk, highlightRisk }) => {
  if (isNaN(risk.current)) {
    return null;
  }
  const { minimum, current } = risk;
  const changeable = current - minimum;
  const minimumWidth = `${minimum.toFixed(1)}%`;
  const changeableWidth = `${changeable.toFixed(1)}%`;
  const { barHeight } = chartSettings;
  const opacity = highlightRisk && highlightRisk !== risk.name ? 0.2 : 1;
  return (
    <g>
      <title>
        Current: {current}%, minimum: {minimum}%
      </title>
      <StyledRect
        fill={minimumRiskColor}
        opacity={opacity}
        width={minimumWidth}
        height={barHeight}
        x={0}
      />
      <StyledRect
        fill="url(#diagonalstripes)"
        opacity={opacity}
        width={changeableWidth}
        height={barHeight - 0.2}
        x={minimumWidth}
        y={0.1}
        strokeWidth=".2"
        stroke={changeableRiskColor}
      />
    </g>
  );
};

export interface RiskBarsProps {
  risks: HealthRiskModel[];
  highlightRisk?: string;
  x: number;
  y: number;
}

export const RiskBars: React.FC<RiskBarsProps> = ({
  risks,
  highlightRisk,
  x,
  y,
}) => {
  return (
    <svg x={x} y={y}>
      {risks.map((risk, i) => (
        <LabelledBar key={risk.name} name={risk.name} index={i}>
          <RiskBar risk={risk} highlightRisk={highlightRisk} />
        </LabelledBar>
      ))}
    </svg>
  );
};
