import React from 'react';
import styled from 'styled-components';
import { WellbeingBars } from './WellbeingBars';
import { XAxis, YAxis } from './Axes';
import { OverallWellbeingLine } from './OverallWellbeingLine';
import {
  fontSize,
  chartWidth,
  barMaxHeight,
  barTop,
  origin,
} from './chartSettings';

const StyledSvg = styled.svg`
  font-size: ${fontSize};
  overflow: visible;
  width: 100%;
  max-width: 400px;
  display: block;
  margin: auto;
`;

const getY = (percent: any) => (1 - percent / 100) * barMaxHeight + barTop;

const mapDataPoints = (scores: any) => {
  const barInterval = chartWidth / (scores.length + 1);
  return scores.map((score: any, index: any) => ({
    label: score.name,
    value: score.score,
    // These are coordinates in SVG space (relative to top left), not relative to the chart origin.
    x: origin.x + (index + 1) * barInterval,
    y: getY(score.score),
  }));
};

const yAxisLabels = [0, 25, 50, 75, 100].map(percent => ({
  label: `${percent}%`,
  y: getY(percent),
}));

const WellbeingChart: React.FC<{ scores: any }> = ({ scores }) => {
  const overallScore = scores.find((s: any) => s.name === 'Overall Wellbeing');
  const individualScores = scores.filter((s: any) => s !== overallScore);
  const data = mapDataPoints(individualScores);
  return (
    <StyledSvg viewBox="0 0 100 90">
      <title>Your lifestyle scores</title>
      <WellbeingBars data={data} />
      <XAxis data={data} />
      <YAxis labels={yAxisLabels} />
      {overallScore && (
        <OverallWellbeingLine
          percent={overallScore.score}
          y={getY(overallScore.score)}
        />
      )}
    </StyledSvg>
  );
};

export { WellbeingChart };
