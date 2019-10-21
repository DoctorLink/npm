import styled from 'styled-components'

import baseTheme from '../../Theme/base/index'
import algonameTheme from '../../Theme/components/algoname'

const AlgoName = styled.h2`
    margin: 0;
    padding: ${p => p.theme.algoname.padding}px;
    font-family: ${p => p.theme.algoname.fontFamily};
    font-size: ${p => p.theme.algoname.fontSize}px;
    line-height: ${p => p.theme.algoname.lineHeight}px;
`

AlgoName.defaultProps = {
    theme: { algoname: algonameTheme(baseTheme) }
};

export default AlgoName