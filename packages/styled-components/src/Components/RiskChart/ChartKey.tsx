import React from 'react';
import {
  barHeight as boxSize,
  barInterval,
  minimumRiskColor,
  changeableRiskColor,
} from './chartSettings';

const KeyItem: React.FC<{ x: any; y: any; fill: any; label: any }> = ({
  x,
  y,
  fill,
  label,
}) => {
  const textX = boxSize + 5;
  const textY = boxSize / 2;
  return (
    <svg x={x} y={y}>
      <rect width={boxSize} height={boxSize} fill={fill} />
      <text x={textX} y={textY} alignmentBaseline="middle">
        {label}
      </text>
    </svg>
  );
};

export const ChartKey: React.FC<{ x: any; y: any }> = ({ x, y }) => (
  <svg x={x} y={y}>
    <KeyItem
      x={0}
      y={0}
      fill={minimumRiskColor}
      label="Risks you can't change"
    />
    <KeyItem
      x={0}
      y={barInterval}
      fill={changeableRiskColor}
      label="Risks you can change"
    />
  </svg>
);
