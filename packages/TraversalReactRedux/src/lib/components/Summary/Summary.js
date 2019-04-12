import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import posed, { PoseGroup } from 'react-pose'

function delayUnmounting(Component) {
    return class extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
                shouldRender: this.props.isMounted
            };
        }

        componentDidUpdate(prevProps) {
            if (prevProps.isMounted && !this.props.isMounted) {
                setTimeout(
                    () => this.setState({ shouldRender: false }),
                    this.props.delayTime
                );
            } else if (!prevProps.isMounted && this.props.isMounted) {
                this.setState({ shouldRender: true });
            }
        }

        render() {
            return this.state.shouldRender ? <Component {...this.props} /> : null;
        }
    };
}

const GlobalStyle = createGlobalStyle`
    body {
        overflow: hidden;
    }
`

const BodyOverflowHidden = delayUnmounting(GlobalStyle)

const PosedSC = posed.div({
    enter: {
        x: '0%',
        staggerChildren: 10
    },
    exit: {
        x: '100%'
    }
})

const SummaryContainer = styled(PosedSC)`
    font-family: 'Noto Sans',sans-serif;
    padding: 10px;
    background: white;
    position: fixed;
    top: 0;
    height: 100%;
    right: 0;
    max-width: 500px;
    width: 100%;
    border-left: 1px solid #f1f1f1;
    overflow-y: auto;
    box-sizing: border-box;
`

const SummaryChild = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
})

const SummaryHeader = styled(SummaryChild)`
    padding: 10px;
    display: flex;
    align-items: flex-start;
`

const SummaryTitle = styled.h2`
    flex: 1;
    margin: 0;
`

const SummaryEmpty = styled.h4`
    padding: 10px;
    margin: 0;
`

const SummaryQuestion = styled(SummaryChild)`
    padding: 10px;
    border-bottom: 1px solid #f1f1f1;
    cursor: pointer;
`

const Icon = styled.svg`
    fill: none;
    stroke: black;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    cursor: pointer;
    width: 24px;
`

const SummaryQuestionText = styled.div`
    color: #666;
`

const SummaryAnswerText = styled.div`
    color: #1018D5;
`

const Summary = ({ summary, close, jumpBack }) => (<>
    <BodyOverflowHidden delayTime={500} isMounted={(summary)} />
    <PoseGroup>
        {summary && [
            <SummaryContainer key='summary'>
                <SummaryHeader>
                    <SummaryTitle>Question Summary</SummaryTitle>
                    <Icon viewBox="0 0 24 24" onClick={close}>
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </Icon>
                </SummaryHeader>
                {summary.questions.length === 0 && (<SummaryEmpty>No questions to display.</SummaryEmpty>)}
                {summary.questions.length > 0 && summary.questions.map(question => (
                    <SummaryQuestion
                        key={`${question.algoId}_${question.nodeId}`}
                        onClick={() => jumpBack(summary.traversalId, question.algoId, question.nodeId)}>
                        <SummaryQuestionText dangerouslySetInnerHTML={{ __html: (question.summaryText) ? question.summaryText : question.displayText }} />
                        <SummaryAnswerText>
                            {question.answers.filter(x => x.isAnswered).map(answer => {
                                const text = `${(answer.value ? answer.value + " " : '')}${answer.displayText}`;
                                return (<div key={`${question.algoId}_${question.nodeId}_${answer.answerId}`} dangerouslySetInnerHTML={{ __html: text }}></div>)
                            })}
                            {question.answers.filter(x => x.isAnswered).length === 0 && question.answers.filter(x => x.answerId === 0).length === 0 && <div>None</div>}
                        </SummaryAnswerText>
                    </SummaryQuestion>)
                )}
            </SummaryContainer>]}
    </PoseGroup>
</>)

export default Summary