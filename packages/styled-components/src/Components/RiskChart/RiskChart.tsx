import React from 'react';
import styled from 'styled-components';
import { RiskBars } from './RiskBars';
import { changeableRiskColor } from './riskChartSettings';
import { ChartKey } from './ChartKey';
import { GridLines, chartSettings } from '../HorizontalBarChart';
import DiagonalStripes from './DiagonalStripes';
import { HealthRiskModel } from '@doctorlink/traversal-core';

const {
  fontSize,
  barInterval,
  gridlineLabelHeight,
  barLabelWidth,
  barWidth,
  barHeight,
} = chartSettings;

const StyledSvg = styled.svg`
  font-size: ${fontSize};
  width: 100%;
  display: block;
  margin: auto;
  padding-top: 15px;
  @media screen and (max-width: 355px) {
    height: 200px;
  }
`;

interface RiskChartProps {
  risks: HealthRiskModel[];
}

const RiskChart: React.FC<RiskChartProps> = ({ risks }) => {
  const chartHeight = risks.length * barInterval;
  const keyHeight = barInterval * 1.7;
  const keyTop = gridlineLabelHeight + chartHeight + 6;
  const svgHeight = keyTop + keyHeight - 4;
  const svgWidth = barLabelWidth + barWidth + 8;
  return (
    <StyledSvg
      viewBox={`0, 0, ${svgWidth}, ${svgHeight}`}
      preserveAspectRatio="none"
    >
      <title>Your health risks</title>
      <DiagonalStripes height={barHeight} lineColor={changeableRiskColor} />
      <GridLines
        x={barLabelWidth}
        y={0}
        width={barWidth}
        lineLength={chartHeight}
      />
      <RiskBars risks={risks} x={0} y={gridlineLabelHeight} />
      <ChartKey x={0} y={keyTop} />
    </StyledSvg>
  );
};

export default RiskChart;
