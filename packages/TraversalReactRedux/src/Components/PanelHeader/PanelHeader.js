import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import panelheaderTheme from '../../Theme/components/panelheader'

const PanelHeader = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: ${p => p.theme.panelheader.padding}px;
    background-color: ${p => p.color || '#666'};

    @media screen and (min-width: 800px) {   
        padding: ${p => p.theme.panelheader.padding}px ${p => p.theme.panelheader.padding * 1.5}px;
    }
`

PanelHeader.defaultProps = {
    theme: { panelheader : panelheaderTheme(baseTheme) } 
}

export default PanelHeader