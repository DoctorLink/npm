import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import checkboxTheme from '../../Theme/components/checkbox'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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
  fill: none;
  stroke: ${props => props.theme.checkbox.icon.color};
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  width: ${props => props.theme.checkbox.size}px;
  height: ${props => props.theme.checkbox.size}px;
  background: ${props => props.checked ? props.theme.checkbox.checked.color : props.theme.checkbox.unchecked.color };
  border-radius: ${props => props.theme.checkbox.borderRadius}px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.theme.checkbox.focus.color };
  }
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: ${props => props.theme.checkbox.padding}px;
`

const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className} theme={props.theme}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked} theme={props.theme}>
            <Icon viewBox="0 0 24 24" theme={props.theme}>
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
)

Checkbox.defaultProps = {
  theme: { checkbox: checkboxTheme(baseTheme) }
};

export default Checkbox