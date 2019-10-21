import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import panelcontentTheme from '../../Theme/components/panelcontent'

const PanelContent = styled.div`
    box-sizing: border-box;
    padding: ${p => p.theme.panelcontent.padding}px;

    @media screen and (min-width: 800px) {    
        padding: ${p => p.theme.panelcontent.padding}px ${p => p.theme.panelcontent.padding * 1.5}px;
    }
`

PanelContent.defaultProps = {
    theme: { panelcontent : panelcontentTheme(baseTheme) } 
}

export default PanelContent