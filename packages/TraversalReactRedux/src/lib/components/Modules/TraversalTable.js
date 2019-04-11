import React from 'react'

import TableQuestion from '../TableQuestion'
import HeaderRow from '../TableHeaderRow'
import HeaderCell from '../TableHeaderCell'
import QuestionRow from '../TableQuestionRow'
import AnswerCell from '../TableAnswerCell'
import InfoIcon from '../InfoIcon'

import Checkbox from '../../containers/ConnectedCheckbox'
import Radio from '../../containers/ConnectedRadio'

export default ({ node, questions, answers, errors, showExplanation }) =>
    (<TableQuestion>
        <HeaderRow>
            {questions[node.questions[0]].answers.map(answerId => 
                (<HeaderCell key={answerId} text={answers[answerId].displayText} justifyContent={'center'}>
                    <InfoIcon onClick={showExplanation} explanation={answers[answerId].explanation} />
                </HeaderCell>)
            )}
        </HeaderRow>
        {node.questions.map(q => {
            const question = questions[q];
            const error = errors[q];
            return (<QuestionRow key={q}>
                        <HeaderCell text={question.displayText} error={error}>
                            <InfoIcon onClick={showExplanation} explanation={question.explanation} />
                        </HeaderCell>
                        {question.answers.map(answerId => {
                            const answer = answers[answerId]
                            return (<AnswerCell key={answerId} answerId={answerId} >
                                {answer.controlType === "Radio" && <Radio answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                                {answer.controlType === "Checkbox" && <Checkbox answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                            </AnswerCell>)
                        })}
            </QuestionRow>)
        })}
    </TableQuestion>)
