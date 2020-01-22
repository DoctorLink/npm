import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import infoiconTheme from '../../Theme/components/infoicon'

const Button = styled.button.attrs({type: 'button'})``

const Icon = styled.svg``

const Container = styled.div`
    position: relative;
    display: inline-block;
    width: ${p => p.theme.infoicon.size}px;
    height: ${p => p.theme.infoicon.size}px;
    flex-basis: ${p => p.theme.infoicon.size}px;
    flex-grow: 0;
    flex-shrink: 0;
    align-self: flex-start;
    vertical-align: bottom;
    margin-left: ${p => p.theme.infoicon.padding / 2}px;
    
    &:focus  {
        box-shadow: 0 0 2px 0.1px ${p => p.theme.infoicon.focusColor};
    }

    ${Button} {
        box-sizing: content-box;
        border: 0;
        background: transparent;
        outline: none;
        position: absolute;
        cursor: pointer;
        padding: ${p => p.theme.infoicon.padding}px ${p => p.theme.infoicon.padding / 2}px;
        top: -${p => p.theme.infoicon.padding}px;
        left: -${p => p.theme.infoicon.padding / 2}px;
        width: ${p => p.theme.infoicon.size}px;
        height: ${p => p.theme.infoicon.size}px;

        ${Icon} {
            transition: all 150ms;
            fill: none;
            stroke: ${p => p.theme.infoicon.color};
            stroke-width: 2px; 
            stroke-linecap: round; 
            stroke-linejoin: round;
        }
    
        &:focus  {
            ${Icon} {
                stroke: ${p => p.theme.infoicon.hoverColor};
            }
        }
    }
    
    &:hover {
        ${Button} {
            ${Icon} {
                stroke: ${p => p.theme.infoicon.hoverColor};
            }
        }
    }
`

Container.defaultProps = {
    theme: { infoicon: infoiconTheme(baseTheme) }
};

const InfoIcon = ({ onClick, explanation, inline, padRight, ...props }) => {
    if (!explanation || explanation === "" || !onClick) return null;
    return (<Container inline={inline} padRight={padRight} theme={props.theme} onClick={(e) => { e.preventDefault(); onClick(explanation); }}>
        <Button>
            <Icon viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="8"></line>
            </Icon>
        </Button>
    </Container>)
}



export default InfoIcon