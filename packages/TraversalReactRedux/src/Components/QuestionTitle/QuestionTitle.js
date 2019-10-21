import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import questiontitleTheme from '../../Theme/components/questiontitle'

const QuestionTitle = styled.h3`
    margin: 0;
    padding: ${p => p.theme.questiontitle.padding}px;
    font-family: ${p => p.theme.questiontitle.fontFamily};
    font-size: ${p => p.theme.questiontitle.fontSize}px;
    line-height: ${p => p.theme.questiontitle.lineHeight}px;
`

QuestionTitle.defaultProps = {
  theme: { questiontitle: questiontitleTheme(baseTheme) }
};

export default QuestionTitle