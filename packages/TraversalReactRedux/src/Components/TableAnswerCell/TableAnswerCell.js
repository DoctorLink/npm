import React from 'react'
import styled from 'styled-components'

const TD = styled.td`
position: relative;
text-align: center;
`

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