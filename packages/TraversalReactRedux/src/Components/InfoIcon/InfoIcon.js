import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import infoiconTheme from '../../Theme/components/infoicon'

const Icon = styled.svg``

const InfoButton = styled.div`
    display: inline-block;
    width: ${p => p.theme.infoicon.size}px;
    height: ${p => p.theme.infoicon.size}px;
    padding: ${p => p.theme.infoicon.padding}px 0;
    cursor: pointer;
    flex-basis: ${p => p.theme.infoicon.size}px;
    flex-grow: 0;
    flex-shrink: 0;
    vertical-align: middle;
    margin-top: ${p => (p.inline) ? '-8px' : '' };
    margin-right: ${p => (p.padRight) ? p.theme.infoicon.padding +'px' : '' };
    
    &:focus {
        box-shadow: 0 0 2px 0.1px ${p => p.theme.infoicon.focusColor};
    }

    ${Icon} {
        transition: all 150ms;
        fill: none;
        stroke: ${p => p.theme.infoicon.color};
        stroke-width: 2px; 
        stroke-linecap: round; 
        stroke-linejoin: round;
    }
    
    &:hover {
        ${Icon} {
            stroke: ${p => p.theme.infoicon.hoverColor};
        }
    }
`

InfoButton.defaultProps = {
    theme: { infoicon: infoiconTheme(baseTheme) }
};

const InfoIcon = ({ onClick, explanation, inline, padRight, ...props }) => ((explanation && explanation !== "") &&
    (<InfoButton inline={inline} padRight={padRight} theme={props.theme} onClick={(e) => { e.preventDefault(); onClick(explanation); }}>
        <Icon viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="8"></line>
        </Icon>
    </InfoButton>))



export default InfoIcon