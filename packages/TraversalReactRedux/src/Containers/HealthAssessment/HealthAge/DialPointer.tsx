import React from 'react';
import styled from 'styled-components';

const getTrianglePoints = ({ cx, cy, radius, width, height }: any) => {
  const bottom = cy - radius;
  const top = bottom - height;
  const middle = cx;
  const left = middle - width / 2;
  const right = left + width;
  return `${left} ${bottom}, ${right} ${bottom}, ${middle} ${top}`;
};

interface StyledPolygonProps {
  cx: any;
  cy: any;
  points: any;
  angle: any;
}

const StyledPolygon = styled.polygon<StyledPolygonProps>`
  fill: #000;
  transform: rotate(${p => p.angle}deg);
  transform-origin: ${p => p.cx}px ${p => p.cy}px;
  transition: transform 0.5s;
`;

const DialPointer: React.FC<{
  cx: any;
  cy: any;
  radius: any;
  width: any;
  height: any;
  angle: any;
}> = ({ cx, cy, radius, width, height, angle }) => {
  const points = getTrianglePoints({ cx, cy, radius, width, height });
  return <StyledPolygon cx={cx} cy={cy} points={points} angle={angle} />;
};

export { DialPointer };
