import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'

import Loader from '../../Components/Loader'
import Step from '../../Components/Step'
import ChatInfoIcon from '../../Components/ChatInfoIcon'
import ChatQuestion from '../../Components/ChatQuestion'
import ChatPreviousAnswers from '../../Components/ChatPreviousAnswers'



import { connect } from 'react-redux'
import { toggleRadio, toggleCheckbox, updateText } from '../../Actions'

const transition = {
    duration: 300,
}

const Container = styled.div`
    margin: 0 -10px;
    min-height: ${props => props.minHeight}px;
`

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


const PreviousAnswer = styled.button.attrs({ tabindex: '0' })`
    background: transparent;
    outline: none;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    font-family: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: block;
    min-height: 36px;
    align-self: flex-end;
    background-color: rgb(16, 24, 213);
    color: white;
    position: relative;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    margin-bottom: 2px;
    line-height: 24px;
    font-weight: 200;
    min-width: 100px;
    max-width: 440px;
    text-align: center;
    white-space: pre-line;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 16px;

    &:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    &:last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`

const PreviousAnswerText = styled.div`
    text-align: left;
    display: inline-block;
    white-space: pre-line;
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
    /* opacity: 0;
    animation: 300ms ease-in-out 300ms 1 normal forwards running bcCCNc;
    transition: height 300ms ease-out 0s, opacity 300ms ease-out 0s; */
`

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

    &:first-child {
        border-top: none;
    }

    button {
        margin: 0px;
        border-radius: 0;
        border: 0;
    }

    &:last-child {
        button {
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`

const ChoiceButton = styled.button.attrs({ type: 'button' })`
    box-sizing: border-box;
    outline: none;
    background: transparent;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    
    font-family: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: block;
    min-height: 36px;
    position: relative;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    line-height: 24px;
    white-space: pre-line;
    padding: 16px;
    border-image: initial;
    border-top: none;
    
    &:hover {
        background-color: rgb(241, 241, 253);
    }
`

const ChoiceGroupWrapper = styled.div`
    &:last-child {
        ${ChoiceContainer} {
            &:last-child {
                border-bottom-right-radius: 6px;
                border-bottom-left-radius: 6px;
                ${ChoiceButton} {
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
                }
            }
        }
    }
`

const BlankChoiceButton = styled(ChoiceButton)`
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-radius: 0px;
    background-color: ${p => p.checked=== true  ? 'rgb(241, 241, 253)' : 'rgb(255, 255, 255)'};
    color: rgb(52, 52, 52);
    text-align: left;
`

const RadioButton= styled(ChoiceButton)`
    border-radius: 0px 0px 6px 6px;
    border-left: 1px solid rgb(200, 205, 215);
    border-right: 1px solid rgb(200, 205, 215);
    border-bottom: 1px solid rgb(200, 205, 215);
    background-color: ${p => p.checked ? 'rgb(241, 241, 253)' : 'rgb(237, 239, 241)'};
    color: black;
    text-align: center;
    font-weight: bold;

    &:disabled {
        opacity: 0.5;
    }
`

// const BlankChoiceLabel = styled(ChoiceLabel)`
//     font-family: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
//     display: block;
//     background-color: rgb(255, 255, 255);
//     min-height: 36px;
//     position: relative;
//     cursor: pointer;
//     color: rgb(52, 52, 52);
//     font-size: 16px;
//     width: 100%;
//     text-align: left;
//     line-height: 24px;
//     white-space: pre-line;
//     border-width: initial;
//     border-style: none;
//     border-color: initial;
//     border-image: initial;
//     border-top: none;
//     padding: 16px;
//     border-radius: 0px;
// `

const TextFieldWrapper = styled.div`
padding: 33px 70px;
`

const TextFieldPadding = styled.div`
    margin-bottom: 0px;
    padding-top: 18px;
    padding-bottom: 18px;
`

const TextFieldInner = styled.div`
    vertical-align: baseline;
    display: flex;
    height: 54px;
    background-color: rgb(255, 255, 255);
    box-sizing: content-box;
    margin: 0px;
    padding: 0px;
    border-image: initial;
    font: inherit inherit inherit inherit inherit inherit inherit;
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(222, 222, 222);
    border-radius: 4px;
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
`

const ConnectedCheckboxChoiceButton = connect()(({ dispatch, answer, answerId, questionAnswerIds, children }) =>
    (<BlankChoiceButton
        id={answerId}
        value={true}
        checked={answer.controlChecked}
        onClick={() => dispatch(toggleCheckbox(answerId, questionAnswerIds))} >
        {children}
    </BlankChoiceButton>))

const ConnectedRadioChoiceButton = connect()(({ dispatch, answer, answerId, questionAnswerIds, children }) =>
    (<BlankChoiceButton
        id={answerId}
        value={true}
        checked={answer.controlChecked}
        onClick={() => dispatch(toggleRadio(answerId, questionAnswerIds, true))} >
        {children}
    </BlankChoiceButton>))

const ConnectedRadioButton = connect()(({ dispatch, answer, answerId, questionAnswerIds, children }) =>
    (<RadioButton
        id={answerId}
        value={true}
        checked={answer.controlChecked}
        onClick={() => dispatch(toggleRadio(answerId, questionAnswerIds, true))} >
        {children}
    </RadioButton>))

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
                            <ChoiceGroupWrapper>
                                {display.map((section, i) => {
                                    const sectionAnswerKeys = question.answers.filter(x => section.answers.includes(Number(x.split("_")[2])));
                                    return (<React.Fragment key={i}>
                                        {/* <Section text={section.header}/> */}
                                        {sectionAnswerKeys.map((answerId) => {
                                            const answer = answers[answerId]
                                            return (<ChoiceContainer key={answerId}>
                                                {answer.controlType === "Checkbox" &&
                                                    <ConnectedCheckboxChoiceButton
                                                        answer={answer}
                                                        answerId={answerId}
                                                        questionAnswerIds={question.answers}>
                                                        <span dangerouslySetInnerHTML={{ __html: answer.displayText }}></span>
                                                    </ConnectedCheckboxChoiceButton>
                                                }
                                                {answer.controlType === "Radio" &&
                                                !showContinueButton &&
                                                    <ConnectedRadioChoiceButton
                                                        answer={answer}
                                                        answerId={answerId}
                                                        questionAnswerIds={question.answers}>
                                                        <span dangerouslySetInnerHTML={{ __html: answer.displayText }}></span>
                                                    </ConnectedRadioChoiceButton>
                                                }
                                                {answer.controlType === "Radio" &&
                                                showContinueButton &&
                                                    <ConnectedRadioButton
                                                        answer={answer}
                                                        answerId={answerId}
                                                        questionAnswerIds={question.answers}>
                                                        <span dangerouslySetInnerHTML={{ __html: answer.displayText }}></span>
                                                    </ConnectedRadioButton>
                                                }
                                                {(answer.controlType === "Text" ||
                                                answer.controlType === "Number" ||
                                                answer.controlType === "Date") && 
                                                    <TextFieldWrapper>
                                                        <TextFieldPadding>
                                                            <TextFieldInner>
                                                                <ConnectedTextField
                                                                    answer={answer}
                                                                    answerId={answerId}
                                                                    questionAnswerIds={question.answers}/>
                                                            </TextFieldInner>
                                                        </TextFieldPadding>
                                                    </TextFieldWrapper>
                                                }
                                                <ChatInfoIcon showExplanation={showExplanation} explanation={answer.explanation} />
                                            </ChoiceContainer>)
                                        })}
                                    </React.Fragment>)
                                })}
                            </ChoiceGroupWrapper>
                            {showContinueButton && <ChoiceGroupWrapper>
                                <RadioButton onClick={() => next(traversal)} disabled={disableContinued}>
                                    <span>Continue</span>
                                </RadioButton>
                            </ChoiceGroupWrapper>}
                        </ChoiceWrapper>
                        {/* Notes */}
                    </AnswersContainer>}
                    {!current && <PosedPreviousAnswersContainer key={`PreviousAnswers_${questionId}`}>
                        <div>
                            {question.answers.map(a => {
                                const answer = answers[a];
                                if (!answer.controlChecked) return null;
                                const text = `${(answer.controlValue ? answer.controlValue + " " : '')}${answer.displayText}`;
                                return (<PreviousAnswer key={a}  onClick={jumpBack}>
                                    <PreviousAnswerText dangerouslySetInnerHTML={{ __html: text }} />
                                </PreviousAnswer>)
                            })}
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
