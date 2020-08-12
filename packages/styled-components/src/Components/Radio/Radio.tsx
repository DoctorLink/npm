import React, { InputHTMLAttributes } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { defaultTheme } from '../../Theme';

import HiddenInput from '../HiddenInput';

const Icon = styled.svg``;

interface StyledRadioProps {
  checked: boolean | undefined;
}

const StyledRadio = styled.div<StyledRadioProps>`
  width: ${(props) => props.theme.radio.size}px;
  height: ${(props) => props.theme.radio.size}px;
  border-radius: ${(props) => props.theme.radio.size / 2}px;
  transition: all 150ms;
  border: 1px solid;
  border-color: ${(props) =>
    props.checked
      ? props.theme.radio.checked.color
      : props.theme.radio.unchecked.color};
  box-sizing: border-box;
  ${HiddenInput}:focus + & {
    box-shadow: ${(props) => props.theme.radio.focus.color} 0px 0px 3px 2px;
  }
  ${Icon} {
    fill: ${(props) => props.theme.radio.checked.color};
    stroke: none;
    stroke-width: 2px;
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

StyledRadio.defaultProps = {
  theme: defaultTheme,
};

const RadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: DefaultTheme;
}

const Radio: React.FC<RadioProps> = ({ className, checked, ...props }) => (
  <RadioContainer className={className} theme={props.theme}>
    <HiddenInput type="radio" checked={checked} {...props} />
    <StyledRadio checked={checked} theme={props.theme}>
      <Icon viewBox="0 0 24 24" theme={props.theme}>
        <circle cx="12" cy="12" r="8" />
      </Icon>
    </StyledRadio>
  </RadioContainer>
);

export default Radio;
