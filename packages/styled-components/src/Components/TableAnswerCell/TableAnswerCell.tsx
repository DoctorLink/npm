import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const TD = styled.td`
  position: relative;
  text-align: center;
  vertical-align: top;
`;

TD.defaultProps = {
  theme: defaultTheme,
};

const Label = styled.label`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
`;

export interface TableAnswerCellProps {
  answerId: string;
}

export const TableAnswerCell: React.FC<TableAnswerCellProps> = ({
  answerId,
  children,
}) => (
  <TD>
    {children}
    <Label htmlFor={answerId} />
  </TD>
);

export default TableAnswerCell;
