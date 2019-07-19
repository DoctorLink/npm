import React, { useRef } from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'

import { connect } from 'react-redux'
import { toggleRadio, toggleCheckbox, updateText } from '../../Actions'

const Container = styled.div`
    margin: 0 -10px;
    min-height: ${props => props.minHeight}px;
`

const ChatGroupContainer = styled.div`
    margin-bottom: 34px;
    text-align: center;
    width: 100%;
    font-size: 18px;
    line-height: 18px;
`

const ChatContent = styled.div`
    max-width: 640px;
    text-align: left;
    margin: 0px auto;
`

const QuestionContent = styled.div`
    white-space: pre-line;
    max-width: 440px;
    position: relative;
    box-sizing: border-box;
    background-color: rgb(243, 243, 243);
    color: inherit;
    font-size: 16px;
    line-height: 24px;
    border-width: 1px 1px 1px;
    border-style: solid solid none;
    border-color: rgb(200, 205, 215) rgb(200, 205, 215) rgb(200, 205, 215);
    border-image: initial;
    border-bottom: none;
    padding: 16px;
    outline: none;
    animation: 0s ease 0s 1 normal none running none;

    &:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    &:last-child {
        border-bottom: 1px solid rgb(200, 205, 215);
    }

    &:only-child {
        display: inline-block;
    }

    &:last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        border-bottom: 1px solid rgb(200, 205, 215);
    }
`

const QuestionWrapper = styled.div`
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    margin-bottom: ${p => p.current ? '0' : '22px'};
    transition: width 300ms ease 0s;

    ${QuestionContent} {
        width:  ${p => p.current ? '100%' : 'auto'};
        &:last-child {
            border-bottom-left-radius: ${p => p.current ? '0' : '6px'};
            border-bottom-right-radius: ${p => p.current ? '0' : '6px'};
        }
    }
`

const InfoButtonContainer = styled.div`
    height: 100%;
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 34px;
    max-height: 60px;
`

const InfoButton = styled.button`
    background: transparent;

    /* color: inherit; */
    border: 0;
    cursor: pointer;
    display: inline-flex;
    outline: none;
    /* padding: 0; */
    /* position: relative; */
    align-items: center;
    user-select: none;
    /* border-radius: 0; */
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;

    flex: 0 0 auto;
    width: 48px;
    color: rgba(0, 0, 0, 0.54);
    height: 48px;
    padding: 0;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;

    position: absolute;
    right: 0px;
    top: 50%;
    transform: translate(50%, -50%);
    z-index: 1;
`

const Lable05 = styled.span`
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
`

const IconWrapper = styled.span`
    display: inline-flex;
    -webkit-box-align: inherit;
    align-items: inherit;
    -webkit-box-pack: inherit;
    justify-content: inherit;
`

const Icon = styled.svg`
    fill: rgb(16, 24, 213);
    width: 24px;
    height: 24px;
`

const PreviousAnswersContainer = styled.div`
    max-width: 440px;
    margin-left: auto;
    overflow: hidden;
    /* animation: 300ms ease-in-out 0s 1 normal none running fNFkQA; */
`

const PreviousAnswersContent = styled.div`
    float: right;
`

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

const AnswersContainer = styled.div`
    
`

const SingleChoiceContainer = styled.div`
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


const Chat = ({ traversal, next, previous, setMinHeight, showExplanation }) => {
    const containerEl = useRef(null)
    const onNext = () => {
        setMinHeight(containerEl.current.clientHeight)
        next(traversal)
    }
    return (<Container ref={containerEl} minHeight={traversal.minHeight}>
        {traversal.questionIds.map((questionId) => {
            const current = questionId === traversal.questionIds[traversal.questionIds.length - 1]
            const question = traversal.questions[questionId]
            const answers = traversal.answers
            const error = traversal.errors[questionId]
            const display = question.data.display ? question.data.display : [{ header: null, answers: question.answers.map(x => Number(x.split("_")[2])) }];
            const questionAnswers = question.answers.map(answerId => answers[answerId])
            const showContinueButton = questionAnswers.length === 0 || questionAnswers.filter(x => x.controlType !== "Radio").length > 0
            const disableContinued = questionAnswers.length > 0 && questionAnswers.filter(x => x.controlChecked).length == 0
            return (<ChatGroupContainer key={questionId}>
                <ChatContent>
                    <QuestionWrapper current={current}>
                        <QuestionContent>
                            <span dangerouslySetInnerHTML={{ __html: question.displayText }} ></span>
                            {question.explanation && <InfoButtonContainer>
                                <InfoButton onClick={(e) => { e.preventDefault(); showExplanation(question.explanation); }}>
                                    <Lable05>
                                        <IconWrapper>
                                            <Icon viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                                <line x1="12" y1="8" x2="12" y2="8"></line>
                                            </Icon>
                                        </IconWrapper>
                                    </Lable05>
                                </InfoButton>
                            </InfoButtonContainer>}
                        </QuestionContent>
                    </QuestionWrapper>
                    {current && <AnswersContainer>
                        <SingleChoiceContainer>
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
                                                {answer.explanation && <InfoButtonContainer>
                                                    <InfoButton onClick={(e) => { e.preventDefault(); showExplanation(answer.explanation); }}>
                                                        <Lable05>
                                                            <IconWrapper>
                                                                <Icon viewBox="0 0 24 24">
                                                                    <circle cx="12" cy="12" r="10"></circle>
                                                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                                                    <line x1="12" y1="8" x2="12" y2="8"></line>
                                                                </Icon>
                                                            </IconWrapper>
                                                        </Lable05>
                                                    </InfoButton>
                                                </InfoButtonContainer>}
                                            </ChoiceContainer>)
                                        })}
                                    </React.Fragment>)
                                })}
                            </ChoiceGroupWrapper>
                            {showContinueButton && <ChoiceGroupWrapper>
                                <RadioButton onClick={() => onNext()} disabled={disableContinued}>
                                    <span>Continue</span>
                                </RadioButton>
                            </ChoiceGroupWrapper>}
                        </SingleChoiceContainer>
                        {/* Notes */}
                    </AnswersContainer>}
                    {!current && <PreviousAnswersContainer>
                        <PreviousAnswersContent>
                            <div>
                                {question.answers.map(a => {
                                    const answer = answers[a];
                                    if (!answer.controlChecked) return null;
                                    const text = `${(answer.controlValue ? answer.controlValue + " " : '')}${answer.displayText}`;
                                    return (<PreviousAnswer key={a} >
                                        <PreviousAnswerText dangerouslySetInnerHTML={{ __html: text }} />
                                    </PreviousAnswer>)
                                })}
                            </div>
                            <ChangeAnswer onClick={() => previous(traversal.traversalId, question.algoId, question.nodeId, question.questionId)}>
                                Click to change
                            </ChangeAnswer>
                        </PreviousAnswersContent>
                    </PreviousAnswersContainer>}
                </ChatContent>
            </ChatGroupContainer>)
        })}
    </Container>)
}

export default Chat;
