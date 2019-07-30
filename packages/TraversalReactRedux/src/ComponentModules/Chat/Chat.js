import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'

import Loader from '../../Components/Loader'
import Step from '../../Components/Step'
import ChatInfoIcon from '../../Components/ChatInfoIcon'
import ChatQuestion from '../../Components/ChatQuestion'
import ChatPreviousAnswers from '../../Components/ChatPreviousAnswers'
import ChatPreviousAnswer from '../../Components/ChatPreviousAnswer'
import ChatTextWrapper from '../../Components/ChatTextWrapper'

import Checkbox from '../../Containers/Checkbox'
import Radio from '../../Containers/Radio'

import { connect } from 'react-redux'
import { updateText } from '../../Actions'

const transition = {
    duration: 300,
}

const Question = posed(ChatQuestion)({
    enter: {
        opacity: 1,
        x: '0',
        transition: transition
    },
    exit: {
        opacity: 0,
        x: '100%',
        transition: {
            duration: 0
        }
    },
    preEnterPose: {
        opacity: 0,
        x: '-100%',
        transition: transition
    },
})

const PosedPreviousAnswersContainer = posed(ChatPreviousAnswers)({
    enter: {
        opacity: 1,
        x: '0',
        transition: transition
    },
    exit: {
        opacity: 0,
        x: '100%',
        transition: {
            duration: 0
        }
    },
    preEnterPose: {
        opacity: 0,
        x: '-100%',
        transition: transition
    },
})

const AnswersContainer = posed.div({
    enter: {
        opacity: 1,
        delay: 1000,
        transition: transition
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0
        }
    },
    preEnterPose: {
        opacity: 0,
        transition: transition
    },
})

const Container = styled.div`
    min-height: ${props => props.minHeight}px;
`

const InputText = styled.span`
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    
    input:focus+ & {
        box-shadow: 0 0 2px 0.1px #00C4FA;
    }
    
    input:checked+ & {
        background-color: rgb(241,241,253);
    }
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

const ChoiceWrapper = styled.fieldset`
    padding: 0;
    margin: 0;
    border: 0;
    border-top: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    max-width: 440px;
`

const ChoiceContainer = styled.div`
    position: relative;
    border-width: 1px 1px 1px;
    border-style: none solid solid;
    border-color: rgb(200, 205, 215) rgb(200, 205, 215) rgb(200, 205, 215);
    border-image: initial;
    border-top: none;

    &:last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        > label, > button {
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`

const ChoiceButton = styled.label`
    box-sizing: border-box;
    outline: none;
    background: transparent;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    font-family: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;
    min-height: 36px;
    position: relative;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    line-height: 24px;
    white-space: pre-line;
    padding: 0;
    border-image: initial;
    border: none;
    
    &:hover {
        background-color: rgb(241, 241, 253);
    }

    &:focus {
        box-shadow: 0 0 2px 0.1px #00C4FA;
    }
`

const RadioButton= styled(ChoiceButton)`
    background-color: ${p => p.checked ? 'rgb(241, 241, 253)' : 'rgb(237, 239, 241)'};
    color: black;
    text-align: center;
    font-weight: bold;

    &:disabled {
        opacity: 0.5;
    }
`

const TextField = styled.input`
    width: 100%;
    transition: all 0.4s ease-out;
    vertical-align: baseline;
    color: rgb(87, 87, 87);
    margin: 0px;
    font: inherit inherit inherit inherit inherit inherit inherit;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: transparent;
    padding: 15px 18px;
    flex: 1 1 0%;
    font-size: 18px;
`

const ConnectedTextField = connect()(({ dispatch, answer, answerId, questionAnswerIds}) => 
    (<TextField
        value={answer.controlValue || ""}
        onChange={(e) => dispatch(updateText(answerId, questionAnswerIds, e))} />))

const Chat = ({ traversal, next, previous, showExplanation }) => {
    return (<Container id={traversal.traversalId} minHeight={traversal.minHeight}>
        {traversal.questionIds.map((questionId) => {
            const lastQuestion = questionId === traversal.questionIds[traversal.questionIds.length - 1]
            const current = lastQuestion && !traversal.loading
            const question = traversal.questions[questionId]
            const answers = traversal.answers
            const error = traversal.errors[questionId]
            const display = question.data.display ? question.data.display : [{ header: null, answers: question.answers.map(x => Number(x.split("_")[2])) }];
            const questionAnswers = question.answers.map(answerId => answers[answerId])
            const showContinueButton = questionAnswers.length === 0 || questionAnswers.filter(x => x.controlType !== "Radio").length > 0
            const disableContinued = questionAnswers.length > 0 && questionAnswers.filter(x => x.controlChecked).length == 0
            const jumpBack = () => previous(traversal.traversalId, question.algoId, question.nodeId, question.questionId)
            return (<Step key={questionId} id={lastQuestion ? 'CurrentQuestion' : ''}>
                <PoseGroup preEnterPose={'preEnterPose'} animateOnMount={true}>
                    <Question key={`Question_${questionId}`} current={current} displayText={question.displayText}>
                        <ChatInfoIcon showExplanation={showExplanation} explanation={question.explanation} />
                    </Question>
                    {current && <AnswersContainer key={`Answers_${questionId}`}>
                        <ChoiceWrapper>
                            {display.map((section, i) => {
                                const sectionAnswerKeys = question.answers.filter(x => section.answers.includes(Number(x.split("_")[2])));
                                return (<React.Fragment key={i}>
                                    {/* <Section text={section.header}/> */}
                                    {sectionAnswerKeys.map((answerId) => {
                                        const answer = answers[answerId]
                                        return (<ChoiceContainer key={answerId}>
                                            {answer.controlType === "Checkbox" &&
                                                <ChoiceButton>
                                                    <Checkbox
                                                        hidden={true}
                                                        answer={answer}
                                                        answerId={answerId}
                                                        questionAnswerIds={question.answers} />
                                                    <InputText dangerouslySetInnerHTML={{ __html: answer.displayText }} />
                                                </ChoiceButton>
                                            }
                                            {answer.controlType === "Radio" &&
                                            !showContinueButton &&
                                                <ChoiceButton>
                                                    <Radio
                                                        hidden={true}
                                                        answer={answer}
                                                        answerId={answerId}
                                                        questionAnswerIds={question.answers} />
                                                    <InputText dangerouslySetInnerHTML={{ __html: answer.displayText }} />
                                                </ChoiceButton>
                                            }
                                            {answer.controlType === "Radio" &&
                                            showContinueButton &&
                                                <RadioButton>
                                                    <Radio
                                                        hidden={true}
                                                        answer={answer}
                                                        answerId={answerId}
                                                        questionAnswerIds={question.answers} />
                                                    <InputText dangerouslySetInnerHTML={{ __html: answer.displayText }} />
                                                </RadioButton>
                                            }
                                            {(answer.controlType === "Text" ||
                                            answer.controlType === "Number" ||
                                            answer.controlType === "Date") && 
                                                <ChatTextWrapper>
                                                    <ConnectedTextField
                                                        answer={answer}
                                                        answerId={answerId}
                                                        questionAnswerIds={question.answers}/>
                                                </ChatTextWrapper>
                                            }
                                            <ChatInfoIcon showExplanation={showExplanation} explanation={answer.explanation} />
                                        </ChoiceContainer>)
                                    })}
                                </React.Fragment>)
                            })}
                            {showContinueButton && <ChoiceContainer>
                                <RadioButton as="button" onClick={() => next(traversal)} disabled={disableContinued}>
                                    <InputText>Continue</InputText>
                                </RadioButton>
                            </ChoiceContainer>}
                        </ChoiceWrapper>
                        {/* Notes */}
                    </AnswersContainer>}
                    {!current && <PosedPreviousAnswersContainer key={`PreviousAnswers_${questionId}`}>
                        <div>
                            {question.answers.map(a => (<ChatPreviousAnswer key={a} jumpBack={jumpBack} answer={answers[a]} />))}
                        </div>
                        <ChangeAnswer onClick={jumpBack}>
                            Click to change
                        </ChangeAnswer>
                    </PosedPreviousAnswersContainer>}
                </PoseGroup>
            </Step>)
        })}
        {traversal.loading && <Step><Loader/></Step>}
    </Container>)
}

export default Chat;
