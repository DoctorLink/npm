import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import textFieldTheme from '../../Theme/components/textfield'

const StyledInput = styled.input`
    width: ${p => p.theme.textField.width}px;
    height: ${p => p.theme.textField.height}px;
    font-family: ${p => p.theme.textField.fontFamily};
    font-size: ${p => p.theme.textField.fontSize}px;
    text-align: ${p => p.theme.textField.textAlign};
    margin: 0 ${p => p.theme.textField.spacing}px;
    border: 0;
    border-bottom: 1px solid black;
    transition: all 150ms;
    &:focus {
        outline: 0;
        border-color: ${p => p.theme.textField.hoverColor};
        border-bottom-width: 2px;
    }
`

const TextField = ({ className, checked, ...props }) => (
    <StyledInput className={className} {...props} />
)

TextField.defaultProps = {
    theme: { textField: textFieldTheme(baseTheme) }
};

export default TextField