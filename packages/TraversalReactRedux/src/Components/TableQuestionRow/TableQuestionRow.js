import styled from 'styled-components'
import baseTheme from '../../Theme/base'
import tablerowTheme from '../../Theme/components/tablerow'

const TableQuestionRow = styled.tr`
    border-bottom: ${p => p.theme.tablerow.borderWidth}px solid ${p => p.theme.tablerow.borderColor};
`

TableQuestionRow.defaultProps = {
    theme: {
        tablerow: tablerowTheme(baseTheme)
    }
}

export default TableQuestionRow