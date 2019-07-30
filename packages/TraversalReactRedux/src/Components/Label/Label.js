import React from 'react'
import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import labelTheme from '../../Theme/components/label'

const StyledLabel = styled.label`
    display: flex;
    cursor: pointer;
    padding: ${p => p.theme.label.padding}px;
    align-items: center;
`

const DisplayText = styled.div`
    font-family: ${p => p.theme.label.fontFamily};
    padding-left:  ${p => p.theme.label.padding}px;
`

const Label = ({ answer, children, ...props }) => {
    return (<StyledLabel {...props}>
        {children}
        <DisplayText theme={props.theme} dangerouslySetInnerHTML={{ __html: answer.displayText }} />
    </StyledLabel>)
};

Label.defaultProps = {
    theme: { label: labelTheme(baseTheme) }
};

export default Label;