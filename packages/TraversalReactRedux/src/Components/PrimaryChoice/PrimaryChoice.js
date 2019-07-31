import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    box-sizing: border-box;
    outline: none;
    background: transparent;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    font-family: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;
    min-height: 36px;
    position: relative;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    line-height: 24px;
    white-space: pre-line;
    padding: 0;
    border-image: initial;
    border: none;
    
    &:hover {
        background-color: rgb(241, 241, 253);
    }

    &:focus {
        box-shadow: 0 0 2px 0.1px #00C4FA;
    }

    &:disabled {
        opacity: 0.5;
    }
`

const Text = styled.span`
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    
    input:focus+ & {
        box-shadow: 0 0 2px 0.1px #00C4FA;
    }
    
    input:checked+ & {
        background-color: rgb(241,241,253);
    }
`

const PrimaryChoice = React.forwardRef(({ displayText, button, children, ...props }, ref) => (<Label as={button? "button" : "label"} ref={ref} {...props}>
    {children}
    <Text dangerouslySetInnerHTML={{ __html: displayText }} />
</Label>))

export default PrimaryChoice;