import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { withDefaultTheme } from '../../Theme';
import IconButton from '../IconButton';

const Icon = withDefaultTheme(styled.svg`
  fill: none;
  stroke: ${(p) => p.theme.infoicon.color};
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  cursor: pointer;
  width: 24px;
`);

const Button = withDefaultTheme(styled(IconButton)`
  &:focus {
    ${Icon} {
      stroke: ${(p) => p.theme.infoicon.focusColor};
    }
  }

  &:hover {
    ${Icon} {
      stroke: ${(p) => p.theme.infoicon.hoverColor};
    }
  }
`);

export const CloseIcon: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  type,
  ...props
}) => (
  <Button {...props}>
    <Icon viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </Icon>
  </Button>
);
