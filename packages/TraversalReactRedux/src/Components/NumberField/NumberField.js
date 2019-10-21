import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import numberfieldTheme from '../../Theme/components/numberfield'

const StyledInput = styled.input.attrs({type: 'number'})`
    width: ${p => p.theme.numberfield.width}px;
    height: ${p => p.theme.numberfield.height}px;
    font-family: ${p => p.theme.numberfield.fontFamily};
    font-size: ${p => p.theme.numberfield.fontSize}px;
    text-align: ${p => p.theme.numberfield.textAlign};
    border: 0;
    border-bottom: 1px solid black;
    transition: all 150ms;
    &:focus {
        outline: 0;
        border-color: ${p => p.theme.numberfield.hoverColor};
        border-bottom-width: 2px;
    }
`

StyledInput.defaultProps = {
    theme: { numberfield: numberfieldTheme(baseTheme) }
};

const NumberField = ({ className, checked, ...props }) => (
    <StyledInput className={className} {...props} />
)

export default NumberField