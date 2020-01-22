import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import tableheadercellTheme from '../../Theme/components/tableheadercell'

const Container = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent || 'flex-start' };
    text-align: ${p => p.textAlign};
`

Container.defaultProps = {
  theme: { tableheadercell: tableheadercellTheme(baseTheme) }
};

const DisplayText = styled.div`
    font-family: ${p => p.theme.tableheadercell.fontFamily};
    font-size: ${p => p.theme.tableheadercell.fontSize}px;
    line-height: ${p => p.theme.tableheadercell.lineHeight}px;
    display: inline-block;
    font-weight: normal;
    white-space: pre-wrap;

    .e24subtext {
        font-size: ${p => p.theme.tableheadercell.fontSize * 0.8}px;
        line-height: ${p => p.theme.tableheadercell.lineHeight * 0.6}px;
        font-style: italic;
    }
`

DisplayText.defaultProps = {
  theme: { tableheadercell: tableheadercellTheme(baseTheme) }
};

const ErrorText = styled.div`
    padding: 0 ${p => p.theme.tableheadercell.padding}px ${p => p.theme.tableheadercell.padding}px;
    font-family: ${p => p.theme.tableheadercell.fontFamily};
    /* font-size: ${p => p.theme.tableheadercell.errorFontSize}px; */
    font-size: ${p => p.theme.tableheadercell.fontSize * 0.8}px;
    line-height: ${p => p.theme.tableheadercell.lineHeight * 0.6}px;
    color: ${p => p.theme.tableheadercell.errorColor};
    text-align: left;
`

ErrorText.defaultProps = {
  theme: { tableheadercell: tableheadercellTheme(baseTheme) }
};

const TableHeaderCell = ({ text, error, justifyContent, textAlign, colspan, children }) =>
    (<th colSpan={colspan}>
        <Container textAlign={textAlign} justifyContent={justifyContent}>
            <DisplayText dangerouslySetInnerHTML={{ __html: text }}/>
            {children}
        </Container>
        {error && <ErrorText>{error.text}</ErrorText>}
    </th>)

TableHeaderCell.defaultProps = {
    colspan: 1,
    textAlign: 'center',
};

export default TableHeaderCell;