import React from 'react';
import styled from 'styled-components';
import colors from '../../Theme/base/colors';
import IconButton from '../IconButton';

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

const StyledPolyline = styled.polyline`
  fill: none;
  stroke: ${colors.grey300};
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: miter;
  transition: transform 0.3s;
  transform-origin: 8px 8px;

  &.open {
    transform: rotate(180deg);
  }
`;

const Button = styled(IconButton)`
  width: 16px;
  height: 16px;
`;

export interface OpenIconProps {
  open: boolean;
  onClick: () => void;
}

const OpenIcon: React.FC<OpenIconProps> = ({ open, onClick }) => {
  const className = open ? 'open' : 'closed';
  return (
    <Button onClick={onClick}>
      <Svg viewBox="0 0 16 16">
        <StyledPolyline className={className} points="2 5, 8 11, 14 5" />
      </Svg>
    </Button>
  );
};

export { OpenIcon };
