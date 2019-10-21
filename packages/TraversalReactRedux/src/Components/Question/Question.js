import React from 'react'
import styled from 'styled-components'

import ErrorText from '../ErrorText'
import QuestionTitle from '../QuestionTitle'

import baseTheme from '../../Theme/base/index'
import questionTheme from '../../Theme/components/question'

const QuestionContainer = styled.div`
    display: flex;
`

const DisplayText = styled.div`
    display: inline-block;
    padding: ${p => p.theme.question.padding}px;
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

const TraversalQuestion = ({ displayText, error, title, children }) => {
    return (<>
        {title && <QuestionTitle>{title}</QuestionTitle>}
        <QuestionContainer>
            <DisplayText dangerouslySetInnerHTML={{ __html: displayText }} />
            {children}
        </QuestionContainer>
        {error && <ErrorText>{error.text}</ErrorText>}
    </>)
};

export default TraversalQuestion