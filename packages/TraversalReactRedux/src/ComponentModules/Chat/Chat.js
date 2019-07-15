import React, { useRef} from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import TraversalResponse from '../TraversalResponse'
import ChatQuestion from '../ChatQuestion'
import Button from '../../Components/Button'

import Step from '../../Components/Step'
import Question from '../../Components/Question'
import Section from '../../Components/Section'
import Answer from '../../Components/Answer'
import Label from '../../Components/Label'
import InfoIcon from '../../Components/InfoIcon'

import Checkbox from '../../Containers/Checkbox'
import Radio from '../../Containers/Radio'
import TextField from '../../Containers/TextField'
import NumberField from '../../Containers/NumberField'
import DateField from '../../Containers/DateField'

import baseTheme from '../../Theme/base/index'


import { connect } from 'react-redux'
import { toggleRadio } from '../../Actions'

const DisplayText = styled.div`
    font-family: ${baseTheme.typography.fontFamily};
    padding: 10px;
    display: inline-block;
`

const Buttons = styled.div`
    margin: 0 10px;
`



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

const QuestionWrapper = styled.div`
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    margin-bottom: 22px;
    transition: width 300ms ease 0s;
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
    }

    &:last-child {
        button {
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`

const ChoiceLabel = styled.label`
    box-sizing: border-box;
    background: transparent;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
`

const ChoiceGroupWrapper = styled.div`
    &:last-child {
        ${ChoiceContainer} {
            &:last-child {
                border-bottom-right-radius: 6px;
                border-bottom-left-radius: 6px;
                ${ChoiceLabel} {
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
                }
            }
        }
    }
`

const BlankChoiceLabel = styled(ChoiceLabel)`
    font-family: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: block;
    background-color: rgb(255, 255, 255);
    min-height: 36px;
    position: relative;
    cursor: pointer;
    color: rgb(52, 52, 52);
    font-size: 16px;
    width: 100%;
    text-align: left;
    line-height: 24px;
    white-space: pre-line;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-top: none;
    padding: 16px;
    border-radius: 0px;
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

const HiddenRadioComp = styled.input.attrs({ type: 'radio' })`
    // Hide checkbox visually but remain accessible to screen readers.
    // Source: https://polished.js.org/docs/#hidevisually
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const HiddenRadio = ({ dispatch, answer, answerId, questionAnswerIds }) => 
    (<HiddenRadio 
        id={answerId}
        value={true} 
        checked={answer.controlChecked}  
        onChange={() => dispatch(toggleRadio(answerId, questionAnswerIds))} />)


const Chat = ({ traversal, next, previous, setMinHeight, showExplanation }) => {
    const containerEl = useRef(null)
    const onNext = () => {
        setMinHeight(containerEl.current.clientHeight)
        next(traversal)
    }
    return (<Container ref={containerEl} minHeight={traversal.minHeight}>
            {traversal.questionIds.map((questionId, i) => {
                const current = questionId === traversal.questionIds[traversal.questionIds.length-1]
                const question = traversal.questions[questionId]
                const answers = traversal.answers 
                const error = traversal.errors[questionId] 
                const display = question.data.display ? question.data.display : [{ header: null, answers: question.answers.map(x => Number(x.split("_")[2])) }];
                return (<ChatGroupContainer key={questionId}>
                    <ChatContent>
                        <QuestionWrapper>
                            <QuestionContent>
                                <span dangerouslySetInnerHTML={{ __html: question.displayText }} ></span>
                                {question.explanation && <InfoButtonContainer>
                                    <InfoButton  onClick={(e) => { e.preventDefault(); showExplanation(question.explanation); }}>
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
                                                    <BlankChoiceLabel>
                                                        {/* {answer.controlType === "Radio" && <HiddenRadio answer={answer} answerId={answerId} questionAnswerIds={question.answers} />} */}
                                                        <span dangerouslySetInnerHTML={{ __html: answer.displayText }} ></span>
                                                    </BlankChoiceLabel>
                                                </ChoiceContainer>)
                                                // return (<Answer key={answerId}>
                                                //     <Label answer={answer}>
                                                //         {answer.controlType === "Radio" && <Radio answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                                                //         {answer.controlType === "Checkbox" && <Checkbox answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                                                //         {answer.controlType === "Text" && <TextField answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                                                //         {answer.controlType === "Number" && <NumberField answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                                                //         {answer.controlType === "Date" && <DateField answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                                                //     </Label>
                                                //     <InfoIcon onClick={showExplanation} explanation={answer.explanation} />
                                                // </Answer>)
                                            })}
                                            {/* <Buttons>
                                                <Button type="button" onClick={() => onNext()}>Next</Button>
                                            </Buttons> */}
                                        </React.Fragment>)
                                    })}
                                </ChoiceGroupWrapper>
                                {/* Continue Button */}
                            </SingleChoiceContainer>
                            {/* Notes */}
                        </AnswersContainer>}
                        {!current && <>
                            {question.answers.map(a => {
                                const answer = answers[a];
                                if (!answer.controlChecked) return null;
                                const text = `${(answer.controlValue ? answer.controlValue + " " : '')}${answer.displayText}`;
                                return (<DisplayText key={a} dangerouslySetInnerHTML={{ __html: text }} />)
                            })}
                            <Button type="button" onClick={() => previous(traversal.traversalId, question.algoId, question.nodeId, question.questionId)}>Change Answer</Button>
                        </>}


                    </ChatContent>
                    {/* <Question key={`question-${questionId}`} displayText={question.displayText} error={error} title={question.title}>
                        <InfoIcon onClick={showExplanation} explanation={question.explanation} />
                    </Question> */}
                   
                </ChatGroupContainer>)
                // return (<Collection key={questionId} mirror={traversal.previous}>
                //     {current && 
                //         (<CurrentQuestion>
                //             <TraversalResponse
                //                 question={traversal.questions[questionId]} 
                //                 answers={traversal.answers} 
                //                 error={traversal.errors[questionId]} 
                //                 showExplanation={showExplanation} />   
                //             <Buttons>
                //                 <Button type="button" onClick={() => onNext()}>Next</Button>
                //             </Buttons>
                //         </CurrentQuestion>)
                //     }
                //     {!current && 
                //         (<ChatQuestion  
                //             traversal={traversal}
                //             question={traversal.questions[questionId]} 
                //             answers={traversal.answers}
                //             jumpBack={previous} />)
                //     }
                // </Collection>)
            })}
    </Container>)
}

export default Chat;
