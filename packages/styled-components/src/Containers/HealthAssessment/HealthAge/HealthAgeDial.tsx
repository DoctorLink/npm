import React from 'react';
import { getPointerPosition } from './getPointerPosition';
import { DialPointer } from './DialPointer';
import { DialBar } from './DialBar';
import styled from 'styled-components';

const width = 100;
const height = 6.2;
const barHeight = 2;
const centre = { x: 50, y: 50 };
const pointerWidth = 3;
const pointerHeight = 3;

const SvgBox = styled.div`
  padding-top: 10px;
`;

const StyledSvg = styled.svg`
  margin-bottom: -2px;
`;

const HealthAgeDial: React.FC<{
  age: any;
  healthAge: any;
  minimumHealthAge: any;
}> = ({ age, healthAge, minimumHealthAge }) => {
  const position = getPointerPosition(age, healthAge, minimumHealthAge);
  return (
    <SvgBox>
      <StyledSvg viewBox={[0, 0, width, height].toString()}>
        <title>Health age indicator</title>
        <DialPointer
          cx={centre.x}
          cy={centre.y}
          pointerWidth={pointerWidth}
          pointerHeight={pointerHeight}
          position={position}
          boxHeight={height}
          barHeight={barHeight}
        />
      </StyledSvg>
      <DialBar />
    </SvgBox>
  );
};

export { HealthAgeDial };
