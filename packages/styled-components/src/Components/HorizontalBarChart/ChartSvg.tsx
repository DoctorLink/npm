import React from 'react';
import styled from 'styled-components';
import { chartSettings } from '../HorizontalBarChart';

const StyledSvg = styled.svg`
  overflow: visible;
  width: 100%;
  display: block;
  margin: auto;
  padding-top: 15px;
  @media screen and (max-width: 375px) {
    font-size: ${chartSettings.fontSize};
  }
  @media screen and (min-width: 376px) {
    font-size: ${chartSettings.desktopFontSize};
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
