import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import numberFieldTheme from '../../Theme/components/numberfield'

const StyledInput = styled.input.attrs({type: 'number'})`
    width: ${p => p.theme.numberField.width}px;
    height: ${p => p.theme.numberField.height}px;
    font-family: ${p => p.theme.numberField.fontFamily};
    font-size: ${p => p.theme.numberField.fontSize}px;
    text-align: ${p => p.theme.numberField.textAlign};
    margin: 0 ${p => p.theme.numberField.spacing}px;
    border: 0;
    border-bottom: 1px solid black;
    transition: all 150ms;
    &:focus {
        outline: 0;
        border-color: ${p => p.theme.numberField.hoverColor};
        border-bottom-width: 2px;
    }
`

const NumberField = ({ className, checked, ...props }) => (
    <StyledInput className={className} {...props} />
)

NumberField.defaultProps = {
    theme: { numberField: numberFieldTheme(baseTheme) }
};

export default NumberField