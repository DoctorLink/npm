import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import textfieldTheme from '../../Theme/components/textfield'

const StyledInput = styled.input`
    width: ${p => p.theme.textfield.width}px;
    height: ${p => p.theme.textfield.height}px;
    font-family: ${p => p.theme.textfield.fontFamily};
    font-size: ${p => p.theme.textfield.fontSize}px;
    text-align: ${p => p.theme.textfield.textAlign};
    border: 1px solid ${p => p.theme.textfield.borderColor};
    border-radius: 3px;
    transition: all 150ms;
    &:focus {
        outline: 0;
        border-color: ${p => p.theme.textfield.hoverColor};
        box-shadow: ${p => p.theme.textfield.focusColor} 0px 0px 3px 2px;
    }
`

StyledInput.defaultProps = {
    theme: { textfield: textfieldTheme(baseTheme) }
};

const TextField = ({ className, checked, ...props }) => (
    <StyledInput className={className} {...props} />
)

export default TextField