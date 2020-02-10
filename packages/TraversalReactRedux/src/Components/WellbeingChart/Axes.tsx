import React from 'react';
import styled from 'styled-components';
import { axisColor, origin, chartTop } from './chartSettings';

const YAxisLabel: React.FC<{ label: any }> = ({ label }) => (
  <text
    textAnchor="end"
    alignmentBaseline="middle"
    x={origin.x - 2}
    y={label.y}
  >
    {label.label}
  </text>
);

const XAxisLabel = styled.text`
  transform: rotate(45deg) translate(-2px, 1.5px);
  transform-origin: ${p => p.x}px ${p => p.y}px;
`;

const Axis = styled.line`
  stroke: ${axisColor};
  stroke-width: 0.5;
  stroke-linecap: square;
`;

const XAxis: React.FC<{ data: any }> = ({ data }) => {
  const { y } = origin;
  return (
    <g>
      <Axis x1={origin.x} x2="100%" y1={y} y2={y} />
      {data.map((item: any) => (
        <XAxisLabel key={item.label} x={item.x} y={y + 5}>
          {item.label}
        </XAxisLabel>
      ))}
    </g>
  );
};

const YAxis: React.FC<{ labels: any }> = ({ labels }) => {
  return (
    <g>
      <Axis x1={origin.x} x2={origin.x} y1={origin.y} y2={chartTop} />
      {labels.map((label: any) => (
        <YAxisLabel key={label.label} label={label} />
      ))}
    </g>
  );
};

export { XAxis, YAxis };
