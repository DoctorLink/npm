import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import labelTheme from '../../Theme/components/label'

const DisplayText = styled.div``

const StyledLabel = styled.label`
    display: flex;
    cursor: pointer;
    padding: ${p => p.theme.label.padding}px;
    align-items: center;

    ${DisplayText} {
        font-family: ${p => p.theme.label.fontFamily};
        padding-left:  ${p => p.theme.label.padding}px;
        font-size: ${p => p.theme.label.fontSize}px;
        line-height: ${p => p.theme.label.lineHeight}px;
    }
`

StyledLabel.defaultProps = {
    theme: { label: labelTheme(baseTheme) }
};


const Label = ({ answer, children, ...props }) => {
    return (<StyledLabel {...props}>
        {children}
        <DisplayText theme={props.theme} dangerouslySetInnerHTML={{ __html: answer.displayText }} />
    </StyledLabel>)
};

export default Label;