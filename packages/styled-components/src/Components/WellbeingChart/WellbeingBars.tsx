import React from 'react';
import styled from 'styled-components';
import {
  barColor,
  barWidth,
  barTop,
  chartTop,
  chartHeight,
  origin,
  chartWidth,
} from './chartSettings';

interface Props {
  translate: any;
}

// Using transform: translateY to position the bars, with a clipPath to hide the portions outside the chart area, to make the transitions work.
// You could use transform: scale, but that doesn't play nicely with rounded linecaps.
const StyledLine = styled.line<Props>`
  stroke: ${barColor};
  stroke-width: ${barWidth};
  stroke-linecap: round;
  transform: translateY(${(p) => p.translate}px);
  transition: transform 0.3s;
`;

const Bar: React.FC<{ dataPoint: any }> = ({ dataPoint }) => {
  const { label, value, x, y } = dataPoint;
  return (
    <g>
      <title>
        {label}: {value}%
      </title>
      <StyledLine
        x1={x}
        x2={x}
        y1={origin.y}
        y2={barTop}
        translate={y - barTop}
      />
    </g>
  );
};

export const WellbeingBars: React.FC<{ data: any }> = ({ data }) => {
  return (
    <g>
      <defs>
        <clipPath id="chart-area">
          <rect
            x={origin.x}
            y={chartTop}
            width={chartWidth}
            height={chartHeight}
          />
        </clipPath>
      </defs>
      <g clipPath="url(#chart-area)">
        {data.map((item: any) => (
          <Bar key={item.label} dataPoint={item} />
        ))}
      </g>
    </g>
  );
};
