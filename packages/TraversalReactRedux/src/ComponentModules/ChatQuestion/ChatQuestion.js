import React from 'react'
import styled from 'styled-components'

import Response from '../../Components/Response'
import Question from '../../Components/Question'
import Button from '../../Components/Button'

import baseTheme from '../../Theme/base/index'

const DisplayText = styled.div`
    font-family: ${baseTheme.typography.fontFamily};
    padding: 10px;
    display: inline-block;
`

const ChatQuestion = ({ traversalId, question, answers, jumpBack }) => 
    (<Response>
        <Question displayText={question.displayText} />
        {question.answers.map(a => {
            const answer = answers[a];
            if (!answer.controlChecked) return null;
            const text = `${(answer.controlValue ? answer.controlValue + " " : '')}${answer.displayText}`;
            return (<DisplayText  dangerouslySetInnerHTML={{ __html: text }} />)
        })}
        <Button type="button" onClick={() => jumpBack(traversalId, question.algoId, question.nodeId, question.assetId)}>Change Answer</Button>
    </Response>)

export default ChatQuestion;