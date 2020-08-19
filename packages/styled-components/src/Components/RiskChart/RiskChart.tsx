import React from 'react';
import { RiskBars } from './RiskBars';
import { changeableRiskColor } from './riskChartSettings';
import { ChartKey } from './ChartKey';
import { ChartSvg, GridLines, chartSettings } from '../HorizontalBarChart';
import DiagonalStripes from './DiagonalStripes';
import { HealthRiskModel } from '@doctorlink/traversal-core';

const {
  barInterval,
  gridlineLabelHeight,
  barLabelWidth,
  barWidth,
  barHeight,
} = chartSettings;

interface RiskChartProps {
  risks: HealthRiskModel[];
}

const RiskChart: React.FC<RiskChartProps> = ({ risks }) => {
  const chartHeight = risks.length * barInterval;
  const keyHeight = barInterval * 1.7;
  const keyTop = gridlineLabelHeight + chartHeight + 6;
  const svgHeight = keyTop + keyHeight - 4;
  const svgWidth = barLabelWidth + barWidth + 4;
  return (
    <ChartSvg width={svgWidth} height={svgHeight}>
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
    </ChartSvg>
  );
};

export default RiskChart;
