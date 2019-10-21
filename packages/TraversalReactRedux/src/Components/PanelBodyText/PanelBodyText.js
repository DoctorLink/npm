import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import panelbodytextTheme from '../../Theme/components/panelbodytext'

const PanelBodyText = styled.div`
    margin: 0;
    display: block;
    color: rgba(0, 0, 0, 0.87);
    font-size: ${p => p.theme.panelbodytext.fontSize}px;
    font-family: ${p => p.theme.panelbodytext.fontFamily};
    font-weight: 400;
    line-height: ${p => p.theme.panelbodytext.lineHeight}px;
    font-weight: ${p => p.bold ? 'bold' : 'normal'};
`

PanelBodyText.defaultProps = {
    theme: { panelbodytext : panelbodytextTheme(baseTheme) } 
}

export default PanelBodyText