import React from 'react';
import styled from 'styled-components';
import { RiskBars } from './RiskBars';
import {
  fontSize,
  barInterval,
  gridlineLabelHeight,
  barLabelWidth,
  barWidth,
  barHeight,
  changeableRiskColor,
} from './chartSettings';
import { ChartKey } from './ChartKey';
import { GridLines } from './GridLines';
import DiagonalStripes from './DiagonalStripes';

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

const RiskChart: React.FC<{ risks: any }> = ({ risks }) => {
  const chartHeight = risks.length * barInterval;
  const keyHeight = barInterval * 1.7;
  const keyTop = gridlineLabelHeight + chartHeight + 6;
  const svgHeight = keyTop + keyHeight - 4;
  const svgWidth = barLabelWidth + barWidth + 8;
  return (
    <StyledSvg
      viewBox={[0, 0, svgWidth, svgHeight] as any}
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
