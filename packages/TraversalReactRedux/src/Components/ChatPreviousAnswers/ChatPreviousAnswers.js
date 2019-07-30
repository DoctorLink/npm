import React from 'react'
import styled from 'styled-components'

// import baseTheme from '../../Theme/base/index'
// import infoIconTheme from '../../Theme/components/infoicon'

const PreviousAnswersContainer = styled.div`
    max-width: 440px;
    margin-left: auto;
    /* overflow: hidden; */
    margin-top: 22px;

    :after {
        content: "";
        clear: both;
        display: table;
    }
`

const PreviousAnswersContent = styled.div`
    float: right;
`

const PreviousQuestion = React.forwardRef(({ children }, ref) =>
    (<PreviousAnswersContainer ref={ref}>
        <PreviousAnswersContent>
            {children}
        </PreviousAnswersContent>
    </PreviousAnswersContainer>))


// ChatQuestion.defaultProps = {
//     theme: { infoIcon: infoIconTheme(baseTheme) }
// };

export default PreviousQuestion