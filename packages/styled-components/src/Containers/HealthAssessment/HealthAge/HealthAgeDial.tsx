import React from 'react';
import { getPointerPosition } from './getPointerPosition';
import { DialPointer } from '../../../Components/DialPointer';
import { DialBar } from './DialBar';
import styled from 'styled-components';

const width = 100;
const height = 6.2;
const pointerWidth = 3;
const pointerHeight = 3;

const SvgBox = styled.div`
  padding-top: 10px;
`;

const StyledSvg = styled.svg`
  margin-bottom: -2px;
`;

interface HealthAgeDialProps {
  age: number;
  healthAge: number;
  minimumHealthAge: number;
}

const HealthAgeDial: React.FC<HealthAgeDialProps> = ({
  age,
  healthAge,
  minimumHealthAge,
}) => {
  const position = getPointerPosition(age, healthAge, minimumHealthAge);
  return (
    <SvgBox>
      <StyledSvg viewBox={[0, 0, width, height].toString()}>
        <title>Health age indicator</title>
        <DialPointer
          pointerWidth={pointerWidth}
          pointerHeight={pointerHeight}
          position={position}
          bottom={height}
        />
      </StyledSvg>
      <DialBar />
    </SvgBox>
  );
};

export { HealthAgeDial };
