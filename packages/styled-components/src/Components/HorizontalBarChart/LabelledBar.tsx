import React from 'react';
import {
  barLabelWidth,
  barWidth,
  barHeight,
  barInterval,
} from './chartSettings';

interface BarWrapperProps {
  y: number;
}

const BarWrapper: React.FC<BarWrapperProps> = ({ y, children }) => {
  return (
    <svg x={barLabelWidth} y={y} width={barWidth}>
      {children}
    </svg>
  );
};

interface LabelledBarProps {
  name: string;
  index: number;
}

export const LabelledBar: React.FC<LabelledBarProps> = ({
  name,
  index,
  children,
}) => {
  const padding = (barInterval - barHeight) / 2;
  const y = index * barInterval + padding;
  return (
    <g>
      <text x={0} y={y + barHeight / 2} alignmentBaseline="middle">
        {name}
      </text>
      <BarWrapper y={y}>{children}</BarWrapper>
    </g>
  );
};
