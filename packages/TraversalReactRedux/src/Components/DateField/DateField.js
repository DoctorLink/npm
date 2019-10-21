import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import datefieldTheme from '../../Theme/components/datefield'

const StyledInput = styled.input.attrs({type: 'date'})`
    width: ${p => p.theme.datefield.width}px;
    height: ${p => p.theme.datefield.height}px;
    font-family: ${p => p.theme.datefield.fontFamily};
    font-size: ${p => p.theme.datefield.fontSize}px;
    text-align: ${p => p.theme.datefield.textAlign};
    border: 0;
    border-bottom: 1px solid black;
    &:focus {
        outline: 0;
        border-color: ${p => p.theme.datefield.hoverColor};
    }
`

StyledInput.defaultProps = {
    theme: { datefield: datefieldTheme(baseTheme) }
};

const DateField = ({ className, checked, ...props }) => (
    <StyledInput className={className} {...props} />
)

export default DateField