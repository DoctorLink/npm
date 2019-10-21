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
    border: 0;
    border-bottom: 1px solid black;
    transition: all 150ms;
    &:focus {
        outline: 0;
        border-color: ${p => p.theme.textfield.hoverColor};
        border-bottom-width: 2px;
    }
`

StyledInput.defaultProps = {
    theme: { textfield: textfieldTheme(baseTheme) }
};

const TextField = ({ className, checked, ...props }) => (
    <StyledInput className={className} {...props} />
)

export default TextField