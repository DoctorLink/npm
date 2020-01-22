import styled from 'styled-components';
import baseTheme from '../../Theme/base';
import displayTextTheme from '../../Theme/components/displayText';

const DisplayText = styled.div`
    font-family: ${p => p.theme.displayText.fontFamily};
    padding-left:  ${p => p.theme.displayText.padding}px;
    font-size: ${p => p.theme.displayText.fontSize}px;
    line-height: ${p => p.theme.displayText.lineHeight}px;
`

DisplayText.defaultProps = {
    theme: {
        displayText: displayTextTheme(baseTheme)
    }
}

export default DisplayText;