import React from 'react';
import { WellbeingBars } from './WellbeingBars';
import { ChartSvg, GridLines, chartSettings } from '../HorizontalBarChart';
import { WellnessScore } from '@doctorlink/traversal-core';

const {
  barInterval,
  gridlineLabelHeight,
  barLabelWidth,
  barWidth,
} = chartSettings;

interface WellbeingChartProps {
  scores: WellnessScore[];
}

export const WellbeingChart: React.FC<WellbeingChartProps> = ({ scores }) => {
  const chartHeight = scores.length * barInterval;
  const svgHeight = gridlineLabelHeight + chartHeight + 6;
  const svgWidth = barLabelWidth + barWidth + 8;
  return (
    <ChartSvg width={svgWidth} height={svgHeight}>
      <title>Your lifestyle and wellbeing scores</title>
      <GridLines
        x={barLabelWidth}
        y={0}
        width={barWidth}
        lineLength={chartHeight}
      />
      <WellbeingBars scores={scores} x={0} y={gridlineLabelHeight} />
    </ChartSvg>
  );
};
