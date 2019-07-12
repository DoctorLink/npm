import styled from 'styled-components'
import baseTheme from '../../Theme/base/index'

const Step = styled.div`
    max-width: 640px;
    text-align: left;
    margin: 0px auto ${p=>p.theme.spacing.responseMargin}px;
    margin-bottom: 34px;
`

Step.defaultProps = {
    theme: baseTheme 
}

export default Step