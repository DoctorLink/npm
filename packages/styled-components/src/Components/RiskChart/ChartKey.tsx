import React from 'react';
import {
  barHeight as boxSize,
  minimumRiskColor,
  changeableRiskColor,
} from './chartSettings';

const KeyItem: React.FC<{
  x: number;
  y: number;
  fill: string;
  label: string;
  border: string;
}> = ({ x, y, fill, label, border }) => {
  const textX = 5;
  const textY = boxSize / 2 + 0.3;
  return (
    <svg x={x} y={y}>
      <rect
        width={boxSize}
        height={boxSize}
        fill={fill}
        strokeWidth={0.2}
        stroke={border}
      />
      <text x={textX} y={textY} alignmentBaseline="middle">
        {label}
      </text>
    </svg>
  );
};

export const ChartKey: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <svg x={x} y={y}>
    <KeyItem
      x={0}
      y={0}
      fill={minimumRiskColor}
      label="Risk you cannot change"
      border={minimumRiskColor}
    />
    <KeyItem
      x={48}
      y={0}
      fill="url(#diagonalstripes)"
      label="Risk you can change"
      border={changeableRiskColor}
    />
  </svg>
);
