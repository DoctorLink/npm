import React from 'react'
import styled from 'styled-components'

// import baseTheme from '../../Theme/base/index'
// import infoIconTheme from '../../Theme/components/infoicon'

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
    font-family: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: block;
    min-height: 36px;
    align-self: flex-end;
    background-color: rgb(16, 24, 213);
    color: white;
    position: relative;
    cursor: pointer;
    font-size: 16px;
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
    padding: 16px;

    &:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    &:last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`

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
    </PreviousAnswer>)})


// ChatQuestion.defaultProps = {
//     theme: { infoIcon: infoIconTheme(baseTheme) }
// };

export default ChatPreviousAnswer