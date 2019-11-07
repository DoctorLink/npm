import React from 'react'
import styled from 'styled-components'

const Table = styled.table.attrs({ cellSpacing: 0, cellPadding: 0 })`
    width: 100%;
    margin-bottom: 20px;
    border-collapse: collapse;
`

export default ({ children }) => (<Table><tbody>{children}</tbody></Table>)
