import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import checkboxTheme from '../../Theme/components/checkbox'

import HiddenInput from '../HiddenInput'

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
  ${HiddenInput}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.theme.checkbox.focus.color };
  }
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className} theme={props.theme}>
        <HiddenInput checked={checked} {...props} />
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