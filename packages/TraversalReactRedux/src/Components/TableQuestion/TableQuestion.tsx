import React from 'react';
import styled from 'styled-components';

const Table = styled.table.attrs({ cellSpacing: 0, cellPadding: 0 })`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const TableQuestion: React.FC<{}> = ({ children }) => (
  <Table>
    <tbody>{children}</tbody>
  </Table>
);

export default TableQuestion;
