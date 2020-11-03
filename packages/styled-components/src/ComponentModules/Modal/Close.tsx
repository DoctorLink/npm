import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  cursor: pointer;
  width: 24px;
`;

export interface CloseProps {
  onClick: () => void;
}

export const Close: React.FC<CloseProps> = ({ onClick }) => (
  <Icon viewBox="0 0 24 24" onClick={onClick}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </Icon>
);
