import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'

import Loader from '../../Components/Loader'
import Step from '../../Components/Step'
import ChatForm from '../../Components/ChatForm'
import ChatInfoIcon from '../../Components/ChatInfoIcon'
import ChatQuestion from '../../Components/ChatQuestion'
import ChatPreviousAnswers from '../../Components/ChatPreviousAnswers'
import ChatPreviousAnswer from '../../Components/ChatPreviousAnswer'
import ChatTextWrapper from '../../Components/ChatTextWrapper'
import ChatTextField from '../../Components/ChatTextField'
import ChoiceContainer from '../../Components/ChoiceContainer'
import PrimaryChoice from '../../Components/PrimaryChoice'
import SecondaryChoice from '../../Components/SecondaryChoice'

import Checkbox from '../../Containers/Checkbox'
import Radio from '../../Containers/Radio'
import TextField from '../../Containers/TextField'

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

const PosedChatForm = posed(ChatForm)({
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
    box-sizing: border-box;
    padding: 0 10px;
    min-height: ${props => props.minHeight}px;
`

const Chat = ({ traversal, next, previous, showExplanation }) => {
    const { traversalId, minHeight, questionIds, questions, answers, errors, loading } = traversal;
    return (<Container id={traversalId} minHeight={minHeight}>
        {questionIds.map((questionId) => {
            const lastQuestion = questionId === questionIds[questionIds.length - 1]
            const current = lastQuestion && !loading
            const question = questions[questionId]
            const error = errors[questionId]
            const display = question.data.display ? question.data.display : [{ header: null, answers: question.answers.map(x => Number(x.split("_")[2])) }];
            const questionAnswers = question.answers.map(answerId => answers[answerId])
            const showContinueButton = questionAnswers.length === 0 || questionAnswers.filter(x => x.controlType !== "Radio").length > 0
            const disableContinued = questionAnswers.length > 0 && questionAnswers.filter(x => x.controlChecked).length == 0
            const jumpBack = () => previous(traversalId, question.algoId, question.nodeId, question.questionId)
            const handleSubmit = (event) => {
                event.preventDefault()
                next(traversal)
            }
            return (<Step key={questionId} id={lastQuestion ? 'CurrentQuestion' : ''}>
                <PoseGroup preEnterPose={'preEnterPose'} animateOnMount={true}>
                    <Question key={`Question_${questionId}`} current={current} displayText={question.displayText} error={error}>
                        <ChatInfoIcon showExplanation={showExplanation} explanation={question.explanation} />
                    </Question>
                    {current &&
                        <PosedChatForm
                            key={`Answers_${questionId}`}
                            onSubmit={(e) => handleSubmit(e)}
                            renderSubmit={!showContinueButton}
                            disableSubmit={disableContinued}>
                            {display.map((section, i) => {
                                const sectionAnswerKeys = question.answers.filter(x => section.answers.includes(Number(x.split("_")[2])));
                                return (<React.Fragment key={i}>
                                    {/* <Section text={section.header}/> */}
                                    {/* Need to discuss with design team best way to render section headers */}
                                    {sectionAnswerKeys.map((answerId) => {
                                        const answer = answers[answerId]
                                        return (<ChoiceContainer key={answerId}>
                                            {answer.controlType === "Checkbox" &&
                                                <PrimaryChoice displayText={answer.displayText}>
                                                    <Checkbox
                                                        hidden={true}
                                                        answer={answer}
                                                        answerId={answerId}
                                                        questionAnswerIds={question.answers} />
                                                </PrimaryChoice>
                                            }
                                            {answer.controlType === "Radio" &&
                                                !showContinueButton &&
                                                <PrimaryChoice displayText={answer.displayText}>
                                                    <Radio
                                                        hidden={true}
                                                        answer={answer}
                                                        answerId={answerId}
                                                        questionAnswerIds={question.answers} />
                                                </PrimaryChoice>
                                            }
                                            {answer.controlType === "Radio" &&
                                                showContinueButton &&
                                                <SecondaryChoice displayText={answer.displayText}>
                                                    <Radio
                                                        hidden={true}
                                                        answer={answer}
                                                        answerId={answerId}
                                                        questionAnswerIds={question.answers} />
                                                </SecondaryChoice>
                                            }
                                            {(answer.controlType === "Text" ||
                                                answer.controlType === "Number" ||
                                                answer.controlType === "Date") &&
                                                <ChatTextWrapper>
                                                    <TextField
                                                        answer={answer}
                                                        answerId={answerId}
                                                        type={answer.controlType.toLowerCase()}
                                                        questionAnswerIds={question.answers}
                                                        CustomComp={ChatTextField} />
                                                </ChatTextWrapper>
                                            }
                                            <ChatInfoIcon showExplanation={showExplanation} explanation={answer.explanation} />
                                        </ChoiceContainer>)
                                    })}
                                </React.Fragment>)
                            })}
                            {showContinueButton && <ChoiceContainer>
                                <SecondaryChoice type="submit" disabled={disableContinued} displayText={"Continue"} button={true} />
                            </ChoiceContainer>}
                            {/* Notes */}
                        </PosedChatForm>
                    }
                    {!current && <PosedPreviousAnswersContainer key={`PreviousAnswers_${questionId}`} jumpBack={jumpBack}>
                        {question.answers.map(a => (<ChatPreviousAnswer key={a} jumpBack={jumpBack} answer={answers[a]} />))}
                    </PosedPreviousAnswersContainer>}
                </PoseGroup>
            </Step>)
        })}
        {loading && <Step><Loader /></Step>}
    </Container>)
}

export default Chat;
