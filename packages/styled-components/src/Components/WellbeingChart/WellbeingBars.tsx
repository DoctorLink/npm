import React from 'react';
import styled from 'styled-components';
import { WellnessScore } from '@doctorlink/traversal-core';
import { LabelledBar, chartSettings } from '../HorizontalBarChart';
import colors from '../../Theme/base/colors';
import { DialPointer } from '../DialPointer';

const { barWidth } = chartSettings;
const barHeight = 2;
const barArrowLength = 1;
const pointerHeight = 1.75;
const pointerWidth = 1.75;

const barPoints = [
  [0, 0],
  [barWidth - barArrowLength, 0],
  [barWidth, barHeight / 2],
  [barWidth - barArrowLength, barHeight],
  [0, barHeight],
]
  .map((pt) => pt.join(' '))
  .join(',');

const Bar = styled.polygon`
  width: 100%;
  fill: url(#rag-gradient);
`;

const Gradient: React.FC = () => (
  <linearGradient id="rag-gradient">
    <stop offset="0" stopColor={colors.red300} />
    <stop offset="25%" stopColor={colors.redgreen} />
    <stop offset="50%" stopColor={colors.orange200} />
    <stop offset="75%" stopColor={colors.greenyellow} />
    <stop offset="100%" stopColor={colors.green100} />
  </linearGradient>
);

const WellbeingBar: React.FC<{ score: WellnessScore }> = ({ score }) => {
  const position = barWidth * (score.score / 100);
  return (
    <g>
      <title>
        {score.name}: {score.score}%
      </title>
      <Bar points={barPoints} />
      <DialPointer
        pointerWidth={pointerWidth}
        pointerHeight={pointerHeight}
        position={position}
        bottom={0}
      />
    </g>
  );
};

export interface WellbeingBarsProps {
  scores: WellnessScore[];
  x: number;
  y: number;
}

export const WellbeingBars: React.FC<WellbeingBarsProps> = ({
  scores,
  x,
  y,
}) => {
  return (
    <svg x={x} y={y} overflow="visible">
      <Gradient />
      {scores.map((score, i) => (
        <LabelledBar key={score.name} name={score.name} index={i}>
          <WellbeingBar score={score} />
        </LabelledBar>
      ))}
    </svg>
  );
};
