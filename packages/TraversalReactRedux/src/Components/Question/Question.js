import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import questionTheme from '../../Theme/components/question'

const QuestionContainer = styled.div`
    display: flex;
    padding: ${p => p.theme.question.padding}px 0;
`

QuestionContainer.defaultProps = {
  theme: { question: questionTheme(baseTheme) }
};

const DisplayText = styled.div`
    display: inline-block;
    font-family: ${p => p.theme.question.fontFamily};
    font-size: ${p => p.theme.question.fontSize}px;
    line-height: ${p => p.theme.question.lineHeight}px;
    white-space: pre-wrap;

    .e24subtext {
        font-size: ${p => p.theme.question.fontSize * 0.8}px;
        line-height: ${p => p.theme.question.lineHeight * 0.6}px;
        font-style: italic;
    }
`

DisplayText.defaultProps = {
  theme: { question: questionTheme(baseTheme) }
};

const TraversalQuestion = ({ displayText, children }) => {
    return (<QuestionContainer>
        <DisplayText dangerouslySetInnerHTML={{ __html: displayText }} />
        {children}
    </QuestionContainer>)
};

export default TraversalQuestion