import React from 'react'
import styled from 'styled-components'

// import baseTheme from '../../Theme/base/index'
// import infoIconTheme from '../../Theme/components/infoicon'

const TextFieldWrapper = styled.div`
padding: 33px 70px;
`

const TextFieldPadding = styled.div`
    margin-bottom: 0px;
    padding-top: 18px;
    padding-bottom: 18px;
`

const TextFieldInner = styled.div`
    vertical-align: baseline;
    display: flex;
    height: 54px;
    background-color: rgb(255, 255, 255);
    box-sizing: content-box;
    margin: 0px;
    padding: 0px;
    border-image: initial;
    font: inherit inherit inherit inherit inherit inherit inherit;
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(222, 222, 222);
    border-radius: 4px;
`

const ChatTextField = ({ children }) => (<TextFieldWrapper>
    <TextFieldPadding>
        <TextFieldInner>
            {children}
        </TextFieldInner>
    </TextFieldPadding>
</TextFieldWrapper>)

export default ChatTextField;