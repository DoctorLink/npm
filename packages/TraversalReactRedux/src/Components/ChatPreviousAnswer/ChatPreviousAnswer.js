import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import chatPreviousAnswerTheme from '../../Theme/components/chatpreviousanswer'

const PreviousAnswer = styled.button.attrs({ tabindex: '0' })`
    background: transparent;
    outline: none;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    font-family: ${props => props.theme.chatpreviousanswer.fontFamily};
    display: block;
    min-height: 36px;
    align-self: flex-end;
    background-color: ${props => props.theme.chatpreviousanswer.color};
    color: white;
    position: relative;
    cursor: pointer;
    font-size: ${props => props.theme.chatpreviousanswer.fontSize}px;
    width: 100%;
    margin-bottom: 2px;
    line-height: 24px;
    font-weight: 200;
    min-width: 100px;
    max-width: 440px;
    text-align: center;
    white-space: pre-line;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: ${props => props.theme.chatpreviousanswer.padding}px;

    &:first-child {
        border-top-left-radius: ${props => props.theme.chatpreviousanswer.borderRadius}px;
        border-top-right-radius: ${props => props.theme.chatpreviousanswer.borderRadius}px;
    }

    &:last-child {
        border-bottom-left-radius: ${props => props.theme.chatpreviousanswer.borderRadius}px;
        border-bottom-right-radius: ${props => props.theme.chatpreviousanswer.borderRadius}px;
    }

    &:focus {
        box-shadow: 0 0 5px 0 #00C4FA;
    }

    &:hover {
        background-color: ${props => props.theme.chatpreviousanswer.hoverColor};
    }
`

PreviousAnswer.defaultProps = {
    theme: { chatpreviousanswer: chatPreviousAnswerTheme(baseTheme) }
};

const PreviousAnswerText = styled.div`
    text-align: left;
    display: inline-block;
    white-space: pre-line;
`

const ChatPreviousAnswer = React.forwardRef(({ answer, jumpBack }, ref) => {
    if (!answer.controlChecked) return null;
    const text = `${(answer.controlValue ? answer.controlValue + " " : '')}${answer.displayText}`;
    return (<PreviousAnswer ref={ref} onClick={jumpBack}>
        <PreviousAnswerText dangerouslySetInnerHTML={{ __html: text }} />
    </PreviousAnswer>)}
)

export default ChatPreviousAnswer