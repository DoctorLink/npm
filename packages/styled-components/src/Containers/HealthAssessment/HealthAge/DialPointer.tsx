import React from 'react';
import styled from 'styled-components';

const getTrianglePoints = ({
  pointerWidth,
  pointerHeight,
  position,
  boxHeight,
}: any) => {
  const bottom = boxHeight;
  const top = bottom - pointerHeight;
  const middle = position;
  const left = position - pointerWidth / 2;
  const right = left + pointerWidth;
  return `${left} ${top}, ${right} ${top}, ${middle} ${bottom}`;
};

interface StyledPolygonProps {
  cx: number;
  cy: number;
}

const StyledPolygon = styled.polygon<StyledPolygonProps>`
  fill: #000;
  transform-origin: ${(p) => p.cx}px ${(p) => p.cy}px;
  transition: transform 0.5s;
  stroke-linejoin: round;
  stroke: #000;
  stroke-width: 0.4;
`;

const DialPointer: React.FC<{
  cx: number;
  cy: number;
  pointerWidth: number;
  pointerHeight: number;
  position: number;
  boxHeight: number;
  barHeight: number;
}> = ({ cx, cy, pointerWidth, pointerHeight, position, boxHeight }) => {
  const points = getTrianglePoints({
    pointerWidth,
    pointerHeight,
    position,
    boxHeight,
  });
  return <StyledPolygon cx={cx} cy={cy} points={points} />;
};

export { DialPointer };
