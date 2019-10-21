import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import errortextTheme from '../../Theme/components/errortext'

const ErrorText = styled.div`
    padding: 0 ${p => p.theme.errortext.padding}px;
    font-family: ${p => p.theme.errortext.fontFamily};
    font-size: ${p => p.theme.errortext.fontSize}px;
    color: ${p => p.theme.errortext.color};
`

ErrorText.defaultProps = {
  theme: { errortext: errortextTheme(baseTheme) }
};

export default ErrorText