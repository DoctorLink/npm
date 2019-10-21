import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import paneltitleTheme from '../../Theme/components/paneltitle'

const PanelTitle = styled.div`
    color: ${p => p.color || 'white'};
    font-size: 0.875rem;
    font-weight: 400;
    font-size: ${p => p.theme.paneltitle.fontSize}px;
    font-family: ${p => p.theme.paneltitle.fontFamily};
    line-height: ${p => p.theme.paneltitle.lineHeight}px;
`

PanelTitle.defaultProps = {
    theme: { paneltitle : paneltitleTheme(baseTheme) } 
}

export default PanelTitle