import React from 'react';
import styled from 'styled-components';
import { TraversalError } from '@doctorlink/traversal-core';
import { defaultTheme } from '../../Theme';

interface ContainerProps {
  textAlign: string;
  justifyContent?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  text-align: ${(p) => p.textAlign};
`;

Container.defaultProps = {
  theme: defaultTheme,
};

const DisplayText = styled.div`
  font-family: ${(p) => p.theme.tableheadercell.fontFamily};
  font-size: ${(p) => p.theme.tableheadercell.fontSize}px;
  line-height: ${(p) => p.theme.tableheadercell.lineHeight}px;
  display: inline-block;
  font-weight: normal;
  white-space: pre-wrap;

  .e24subtext {
    font-size: ${(p) => p.theme.tableheadercell.fontSize * 0.8}px;
    line-height: ${(p) => p.theme.tableheadercell.lineHeight * 0.6}px;
    font-style: italic;
  }
`;

DisplayText.defaultProps = {
  theme: defaultTheme,
};

const ErrorText = styled.div`
    padding: 0 ${(p) => p.theme.tableheadercell.padding}px ${(p) =>
  p.theme.tableheadercell.padding}px;
    font-family: ${(p) => p.theme.tableheadercell.fontFamily};
    /* font-size: ${(p) => p.theme.tableheadercell.errorFontSize}px; */
    font-size: ${(p) => p.theme.tableheadercell.fontSize * 0.8}px;
    line-height: ${(p) => p.theme.tableheadercell.lineHeight * 0.6}px;
    color: ${(p) => p.theme.tableheadercell.errorColor};
    text-align: left;
`;

ErrorText.defaultProps = {
  theme: defaultTheme,
};

export interface TableHeaderCellProps {
  text: string;
  error?: TraversalError;
  colspan?: number;
  textAlign?: string;
  justifyContent?: string;
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  text,
  error,
  justifyContent,
  textAlign = 'center',
  colspan = 1,
  children,
}) => (
  <th colSpan={colspan}>
    <Container textAlign={textAlign} justifyContent={justifyContent}>
      <DisplayText dangerouslySetInnerHTML={{ __html: text }} />
      {children}
    </Container>
    {error && <ErrorText>{error.text}</ErrorText>}
  </th>
);

export default TableHeaderCell;
