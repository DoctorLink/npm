import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import checkboxTheme from '../../Theme/components/checkbox'

import HiddenInput from '../HiddenInput'

const Icon = styled.svg``

const StyledCheckbox = styled.div`
  width: ${props => props.theme.checkbox.size}px;
  height: ${props => props.theme.checkbox.size}px;
  box-sizing: border-box;
  border-radius: ${props => props.theme.checkbox.borderRadius}px;
  border: 1px solid;
  border-color: ${props => props.checked ? props.theme.checkbox.checked.color : props.theme.checkbox.unchecked.color};
  transition: all 150ms;
  ${HiddenInput}:focus + & {
    box-shadow: ${props => props.theme.checkbox.focus.color } 0px 0px 3px 2px;
  }
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
    fill: none;
    stroke: ${props => props.theme.checkbox.checked.color};
    stroke-width: 4px;
  }
`

StyledCheckbox.defaultProps = {
  theme: { checkbox: checkboxTheme(baseTheme) }
};

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className} theme={props.theme}>
        <HiddenInput type="checkbox" checked={checked} {...props} />
        <StyledCheckbox checked={checked}  theme={props.theme}>
            <Icon viewBox="0 0 24 24" theme={props.theme}>
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
)

export default Checkbox