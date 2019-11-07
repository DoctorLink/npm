import React from 'react'
import TableQuestionRow from '../TableQuestionRow'


export default ({ children }) => (
    <TableQuestionRow>
        <th></th>
        {children}
    </TableQuestionRow>
)