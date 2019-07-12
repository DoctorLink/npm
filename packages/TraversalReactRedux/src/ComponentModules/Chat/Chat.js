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
                            </QuestionContent>
                        </QuestionWrapper>
                    </ChatContent>
                    {/* <Question key={`question-${questionId}`} displayText={question.displayText} error={error} title={question.title}>
                        <InfoIcon onClick={showExplanation} explanation={question.explanation} />
                    </Question> */}
                    <React.Fragment key={`response-${questionId}`}>
                        {current && display.map((section, i) => {
                            const sectionAnswerKeys = question.answers.filter(x => section.answers.includes(Number(x.split("_")[2])));
                            return (<React.Fragment key={i}>
                                <Section text={section.header}/>
                                {sectionAnswerKeys.map((answerId) => { 
                                    const answer = answers[answerId]
                                    return (<Answer key={answerId}>
                                        <Label answer={answer}>
                                            {answer.controlType === "Radio" && <Radio answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                                            {answer.controlType === "Checkbox" && <Checkbox answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                                            {answer.controlType === "Text" && <TextField answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                                            {answer.controlType === "Number" && <NumberField answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                                            {answer.controlType === "Date" && <DateField answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                                        </Label>
                                        <InfoIcon onClick={showExplanation} explanation={answer.explanation} />
                                    </Answer>)
                                })}
                                <Buttons>
                                    <Button type="button" onClick={() => onNext()}>Next</Button>
                                </Buttons>
                            </React.Fragment>)
                        })}
                        {!current && <>
                            {question.answers.map(a => {
                                const answer = answers[a];
                                if (!answer.controlChecked) return null;
                                const text = `${(answer.controlValue ? answer.controlValue + " " : '')}${answer.displayText}`;
                                return (<DisplayText key={a} dangerouslySetInnerHTML={{ __html: text }} />)
                            })}
                            <Button type="button" onClick={() => previous(traversal.traversalId, question.algoId, question.nodeId, question.questionId)}>Change Answer</Button>
                        </>}
                    </React.Fragment>
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
