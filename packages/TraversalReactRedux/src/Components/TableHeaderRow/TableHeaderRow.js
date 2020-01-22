import React from 'react'
import TableQuestionRow from '../TableQuestionRow'


export default ({ children }) => (
    <TableQuestionRow>
        <th colSpan="2"></th>
        {children}
    </TableQuestionRow>
)