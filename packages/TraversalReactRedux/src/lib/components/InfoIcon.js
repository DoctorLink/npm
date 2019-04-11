import React from 'react'
import styled from 'styled-components'

import baseTheme from '../theme/base/index'
import infoIconTheme from '../theme/components/infoicon'

const InfoButton = styled.div`
    display: inline-block;
    width: 25px;
    height: 25px;
    padding: 10px 0;
	cursor: pointer;
    flex-basis: 25px;
    flex-grow: 0;
    flex-shrink: 0;
    vertical-align: middle;
    margin-top: ${props => (props.inline) ? '-8px' : '' };
`

const Icon = styled.svg`
	transition: all 150ms;
    fill: none;
    stroke: ${p => p.theme.infoIcon.color};
    stroke-width: 2px; 
    stroke-linecap: round; 
    stroke-linejoin: round;
    ${InfoButton}:hover & {
        stroke: ${p => p.theme.infoIcon.hoverColor};
    }
`

const InfoIcon = ({ onClick, explanation, inline, ...props }) => ((explanation && explanation !== "") &&
    (<InfoButton inline={inline} theme={props.theme} onClick={(e) => { e.preventDefault(); onClick(explanation); }}>
        <Icon theme={props.theme} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line>
        </Icon>
    </InfoButton>))


InfoIcon.defaultProps = {
    theme: { infoIcon: infoIconTheme(baseTheme) }
};

export default InfoIcon