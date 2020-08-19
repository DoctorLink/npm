import React from 'react';
import styled from 'styled-components';
import { chartSettings } from '../HorizontalBarChart';

const StyledSvg = styled.svg`
  font-size: ${chartSettings.fontSize};
  width: 100%;
  display: block;
  margin: auto;
  padding-top: 15px;
  @media screen and (max-width: 355px) {
    height: 200px;
  }
`;

interface ChartSvgProps {
  width: number;
  height: number;
}

export const ChartSvg: React.FC<ChartSvgProps> = ({
  width,
  height,
  children,
}) => {
  return (
    <StyledSvg viewBox={`0, 0, ${width}, ${height}`} preserveAspectRatio="none">
      {children}
    </StyledSvg>
  );
};
