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

const ChangeAnswer = styled.div`
    font-size: 14px;
    text-align: right;
    margin-top: 10px;
    color: rgb(117, 117, 117);
    font-weight: bold;
    max-width: 440px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-left: auto;
`

const PreviousQuestion = React.forwardRef(({ jumpBack, children }, ref) =>
    (<PreviousAnswersContainer ref={ref}>
        <PreviousAnswersContent>
            <div>{children}</div>
            <ChangeAnswer onClick={jumpBack}>Click to change</ChangeAnswer>
        </PreviousAnswersContent>
    </PreviousAnswersContainer>))


// ChatQuestion.defaultProps = {
//     theme: { infoIcon: infoIconTheme(baseTheme) }
// };

export default PreviousQuestion