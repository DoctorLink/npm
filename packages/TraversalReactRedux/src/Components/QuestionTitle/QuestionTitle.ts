import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const QuestionTitle = styled.h3`
  margin: 0;
  padding: ${p => p.theme.questiontitle.padding}px 0;
  font-family: ${p => p.theme.questiontitle.fontFamily};
  font-size: ${p => p.theme.questiontitle.fontSize}px;
  line-height: ${p => p.theme.questiontitle.lineHeight}px;
`;

QuestionTitle.defaultProps = {
  theme: defaultTheme,
};

export default QuestionTitle;
