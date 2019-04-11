import React from 'react'
import styled from 'styled-components'

import baseTheme from '../theme/base/index'
import radioTheme from '../theme/components/radio'

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
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
  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.theme.radio.focus.color };
  }
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  }
`

const RadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: ${props => props.theme.radio.padding}px;
`

const Radio = ({ className, checked, ...props }) => (
  <RadioContainer className={className} theme={props.theme}>
    <HiddenRadio checked={checked} {...props} />
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