import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const TableQuestionRow = styled.tr`
    /* border-bottom: ${(p) => p.theme.tablerow.borderWidth}px solid ${(p) =>
  p.theme.tablerow.borderColor};
    border-bottom: 1px solid rgb(222, 222, 222); */
    box-shadow: inset 0 -1px 0 0 ${(p) => p.theme.tablerow.borderColor};

    th {
        padding: ${(p) => p.theme.tablerow.vertical}px 0;
    }

    td {
        padding: ${(p) => p.theme.tablerow.vertical}px ${(p) =>
  p.theme.tablerow.horizontal}px;
    }
`;

TableQuestionRow.defaultProps = {
  theme: defaultTheme,
};

export default TableQuestionRow;
