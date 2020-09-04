import React from 'react';
import styled from 'styled-components';

const getTrianglePoints = (
  bottom: number,
  pointerWidth: number,
  pointerHeight: number
) => {
  const top = bottom - pointerHeight;
  const middle = 0;
  const left = -pointerWidth / 2;
  const right = left + pointerWidth;
  return `${left} ${top}, ${right} ${top}, ${middle} ${bottom}`;
};

interface StyledPolygonProps {
  position: number;
}

const StyledPolygon = styled.polygon<StyledPolygonProps>`
  fill: #666;
  stroke: #666;
  stroke-linejoin: round;
  transform: translateX(${(p) => p.position}px);
  transition: transform 0.5s;
`;

interface DialPointerProps {
  pointerWidth: number;
  pointerHeight: number;
  position: number;
  bottom: number;
  opacity?: number;
}

const DialPointer: React.FC<DialPointerProps> = ({
  pointerWidth,
  pointerHeight,
  position,
  bottom,
  opacity,
}) => {
  const points = getTrianglePoints(bottom, pointerWidth, pointerHeight);
  const strokeWidth = pointerWidth * pointerHeight * 0.05;
  return (
    <StyledPolygon
      position={position}
      points={points}
      strokeWidth={strokeWidth}
      opacity={opacity}
    />
  );
};

export { DialPointer };
