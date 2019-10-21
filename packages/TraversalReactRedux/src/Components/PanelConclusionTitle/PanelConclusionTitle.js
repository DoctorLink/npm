import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import panelconclusiontitleTheme from '../../Theme/components/panelconclusiontitle'

const PanelConclusionTitle = styled.div`
    display: inline;
    font-weight: normal;
    font-size: ${p => p.theme.panelconclusiontitle.fontSize}px;
    font-family: ${p => p.theme.panelconclusiontitle.fontFamily};
    line-height: ${p => p.theme.panelconclusiontitle.lineHeight}px;

    ::after {
        content: " "
    }
`

PanelConclusionTitle.defaultProps = {
    theme: { panelconclusiontitle : panelconclusiontitleTheme(baseTheme) } 
}

export default PanelConclusionTitle