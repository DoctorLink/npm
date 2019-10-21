import styled from 'styled-components'
import baseTheme from '../../Theme/base'
import titleTheme from '../../Theme/components/title'

const Title = styled.h1`
    font-family: ${p => p.theme.title.fontFamily};
    font-size: ${p => p.theme.title.fontSize}px;
    line-height: ${p => p.theme.title.lineHeight}px;
    cursor: pointer;
`

Title.defaultProps = {
    theme: { title: titleTheme(baseTheme) }
}

export default Title