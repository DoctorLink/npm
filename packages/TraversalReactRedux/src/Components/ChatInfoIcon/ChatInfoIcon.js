import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import infoIconTheme from '../../Theme/components/infoicon'

const InfoButtonContainer = styled.div`
    height: 100%;
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 34px;
    max-height: 60px;
`

const InfoButton = styled.button`
    background: transparent;

    /* color: inherit; */
    border: 0;
    cursor: pointer;
    display: inline-flex;
    outline: none;
    /* padding: 0; */
    /* position: relative; */
    align-items: center;
    user-select: none;
    /* border-radius: 0; */
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;

    flex: 0 0 auto;
    width: 48px;
    color: rgba(0, 0, 0, 0.54);
    height: 48px;
    padding: 0;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;

    position: absolute;
    right: 0px;
    top: 50%;
    transform: translate(50%, -50%);
    z-index: 1;
`

const Lable05 = styled.span`
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
`

const IconWrapper = styled.span`
    display: inline-flex;
    -webkit-box-align: inherit;
    align-items: inherit;
    -webkit-box-pack: inherit;
    justify-content: inherit;
`

const Icon = styled.svg`
    fill: rgb(16, 24, 213);
    width: 24px;
    height: 24px;
`

const InfoIcon = ({ explanation, showExplanation }) =>
    (explanation && <InfoButtonContainer>
        <InfoButton onClick={(e) => { e.preventDefault(); showExplanation(explanation); }}>
            <Lable05>
                <IconWrapper>
                    <Icon viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                    </Icon>
                </IconWrapper>
            </Lable05>
        </InfoButton>
    </InfoButtonContainer>)


InfoIcon.defaultProps = {
    theme: { infoIcon: infoIconTheme(baseTheme) }
};

export default InfoIcon