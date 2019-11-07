import React from 'react'
import styled from 'styled-components'
import baseTheme from '../../Theme/base/index'
import tableanswercellTheme from '../../Theme/components/tableanswercell'

const TD = styled.td`
    position: relative;
    text-align: center;
    padding: ${p => p.theme.tableanswercell.padding}px;
    vertical-align: top;
`

TD.defaultProps = {
    theme: {
        tableanswercell: tableanswercellTheme(baseTheme)
    }
}

const Label = styled.label`
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
`

export default ({ answerId, children }) =>
    (<TD>
        {children}
        <Label htmlFor={answerId} />
    </TD>)