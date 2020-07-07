import React from 'react';
import TableQuestionRow from '../TableQuestionRow';

export const TableHeaderRow: React.FC<{}> = ({ children }) => (
  <TableQuestionRow>
    <th colSpan={2}></th>
    {children}
  </TableQuestionRow>
);

export default TableHeaderRow;
