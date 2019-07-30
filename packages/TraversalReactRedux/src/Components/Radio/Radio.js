import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import radioTheme from '../../Theme/components/radio'

import HiddenInput from '../HiddenInput'

const Icon = styled.svg`
  fill: ${props => props.theme.radio.icon.color};
  stroke: none;
  stroke-width: 2px;
`

const StyledRadio = styled.div`
  width: ${props => props.theme.radio.size}px;
  height: ${props => props.theme.radio.size}px;
  background: ${props => props.checked ? props.theme.radio.checked.color : props.theme.radio.unchecked.color };
  border-radius:  ${props => props.theme.radio.size/2}px;
  transition: all 150ms;
  ${HiddenInput}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.theme.radio.focus.color };
  }
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  }
`

const RadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Radio = ({ className, checked, ...props }) => (
  <RadioContainer className={className} theme={props.theme}>
    <HiddenInput checked={checked} {...props} />
    <StyledRadio checked={checked} theme={props.theme}>
      <Icon viewBox="0 0 24 24" theme={props.theme}>
        <circle cx="12" cy="12" r="4" />
      </Icon>
    </StyledRadio>
  </RadioContainer>
)

Radio.defaultProps = {
  theme: { radio: radioTheme(baseTheme) }
};

export default Radio