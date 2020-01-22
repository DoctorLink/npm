import React from 'react';
import { defaultTraversalActions, defaultTraversalComponents } from '../defaults';

export default ({ node, questions, answers, errors, actions = defaultTraversalActions, components = defaultTraversalComponents }) => {
    const comps = { ...defaultTraversalComponents, ...components };
    return (<comps.TableQuestion>
        <comps.HeaderRow>
            {questions[node.questions[0]].answers.map(answerId =>
                <comps.HeaderCell key={answerId} text={answers[answerId].displayText} justifyContent={'center'}>
                    <comps.InfoIcon onClick={actions.showExplanation} explanation={answers[answerId].explanation} />
                </comps.HeaderCell>
            )}
        </comps.HeaderRow>
        {node.questions.map(q => {
            const question = questions[q];
            const error = errors[q];
            return (
                <comps.QuestionRow key={q}>
                    <comps.HeaderCell colspan={2} textAlign={'left'} text={question.displayText} error={error}>
                        <comps.InfoIcon onClick={actions.showExplanation} explanation={question.explanation} />
                    </comps.HeaderCell>
                    {question.answers.map(answerId => {
                        const answer = answers[answerId]
                        return (
                            <comps.AnswerCell key={answerId} answerId={answerId} >
                                {answer.controlType === "Radio" && <comps.TraversalRadio
                                    Comp={comps.Radio}
                                    answerId={answerId}
                                    checked={answer.controlChecked}
                                    siblingIds={question.answers}
                                    action={actions.toggleRadio}
                                />}
                                {answer.controlType === "Checkbox" && <comps.TraversalCheckbox
                                    Comp={comps.Checkbox}
                                    answerId={answerId}
                                    checked={answer.controlChecked}
                                    siblingIds={question.answers}
                                    action={actions.toggleCheckbox}
                                />}
                            </comps.AnswerCell>
                        )
                    })}
                </comps.QuestionRow>
            )
        })}
    </comps.TableQuestion>)
}
