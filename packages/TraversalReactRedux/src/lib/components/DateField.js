import React from 'react'
import styled from 'styled-components'

import baseTheme from '../theme/base/index'
import dateFieldTheme from '../theme/components/datefield'

const StyledInput = styled.input.attrs({type: 'date'})`
    width: ${p => p.theme.dateField.width}px;
    height: ${p => p.theme.dateField.height}px;
    font-family: ${p => p.theme.dateField.fontFamily};
    font-size: ${p => p.theme.dateField.fontSize}px;
    text-align: ${p => p.theme.dateField.textAlign};
    margin: 0 ${p => p.theme.dateField.spacing}px;
    border: 0;
    border-bottom: 1px solid black;
    &:focus {
        outline: 0;
        border-color: ${p => p.theme.dateField.hoverColor};
    }
`

const DateField = ({ className, checked, ...props }) => (
    <StyledInput className={className} {...props} />
)

DateField.defaultProps = {
    theme: { dateField: dateFieldTheme(baseTheme) }
};

export default DateField