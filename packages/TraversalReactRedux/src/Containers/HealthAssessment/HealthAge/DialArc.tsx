import React from 'react';
import styled from 'styled-components';
import colors from '../../../Theme/base/colors';
import { describeArc } from './describeArc';

const Arc = styled.path`
  fill: none;
  stroke: url(#rag-gradient);
  stroke-linecap: round;
`;

const Gradient: React.FC = () => (
  <linearGradient id="rag-gradient">
    <stop offset="0" stopColor={colors.green100} />
    <stop offset="50%" stopColor={colors.orange100} />
    <stop offset="100%" stopColor={colors.red100} />
  </linearGradient>
);

const DialArc: React.FC<{
  cx: any;
  cy: any;
  radius: any;
  startAngle: any;
  endAngle: any;
  strokeWidth: any;
}> = ({ cx, cy, radius, startAngle, endAngle, strokeWidth }) => {
  return (
    <g>
      <defs>
        <Gradient />
      </defs>
      <Arc
        d={describeArc(cx, cy, radius, startAngle, endAngle)}
        strokeWidth={strokeWidth}
      />
    </g>
  );
};

export { DialArc };
