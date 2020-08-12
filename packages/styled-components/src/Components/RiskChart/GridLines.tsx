import React from 'react';
import styled from 'styled-components';
import colors from '../../Theme/base/colors';
import { gridlineLabelHeight } from './chartSettings';

const StyledLine = styled.line`
  stroke: ${colors.grey300};
  stroke-width: 0.5;
  stroke-dasharray: 0.3 0.6;
  opacity: 0.5;
`;

const GridLine: React.FC<{ percent: any; length: any }> = ({
  percent,
  length,
}) => {
  return (
    <svg x={`${percent}%`} overflow="visible">
      <text x={2} y={gridlineLabelHeight / 2} textAnchor="middle">
        {percent}%
      </text>
      <StyledLine
        x1={0}
        y1={gridlineLabelHeight}
        x2={0}
        y2={length + gridlineLabelHeight}
      />
    </svg>
  );
};

const intervals = [0, 25, 50, 75, 100];

const GridLines: React.FC<{ x: any; y: any; width: any; lineLength: any }> = ({
  x,
  y,
  width,
  lineLength,
}) => {
  return (
    <svg x={x} y={y} width={width} overflow="visible">
      {intervals.map((pc) => (
        <GridLine key={pc} percent={pc} length={lineLength} />
      ))}
    </svg>
  );
};

export { GridLines };
