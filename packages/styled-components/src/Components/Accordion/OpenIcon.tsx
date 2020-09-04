import React from 'react';
import styled from 'styled-components';
import colors from '../../Theme/base/colors';

const StyledDiv = styled.div`
  width: 16px;
  height: 16px;
`;

const StyledPolyline = styled.polyline`
  fill: none;
  stroke: ${colors.grey300};
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: miter;
  transition: transform 0.3s;
  transform-origin: 7px 8px;

  &.open {
    transform: rotate(90deg);
  }
`;

const OpenIcon: React.FC<{ open: boolean }> = ({ open }) => {
  const className = open ? 'open' : 'closed';
  return (
    <StyledDiv>
      <svg viewBox="0 0 16 16">
        <StyledPolyline className={className} points="5 2, 11 8, 5 14" />
      </svg>
    </StyledDiv>
  );
};

export { OpenIcon };
