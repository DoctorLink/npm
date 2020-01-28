import React, { useEffect, useRef } from 'react';
import { defaultLabels } from '../../Constants';
import { defaultSummaryActions, defaultSummaryComponents } from './defaults';

export const Summary = ({ summary, labels = defaultLabels.summary, components = defaultSummaryComponents, actions = defaultSummaryActions }) => {
    const comps = { ...defaultSummaryComponents, ...components };
    const ref = useRef();

    const handleClickOutside = (event) => {
        if (ref && ref.current && !ref.current.contains(event.target))
            actions.close()
    }

    const handleKeydown = (event) => {
        if (event.keyCode === 27)
            actions.close()
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (<comps.Wrapper>
        {summary && [
            <comps.DelayExit key='global'>
                <comps.BodyOverflowHidden />
                <comps.TransparentCurtain>
                    <comps.Summary ref={ref}>
                        <comps.Header>
                            <comps.Title>{labels.title}</comps.Title>
                            <comps.Close onClick={actions.close} />
                        </comps.Header>
                        {summary.questions.length === 0 && (<comps.Header>{labels.noQuestions}</comps.Header>)}
                        {summary.questions.length > 0 && summary.questions.map(question => (
                            <comps.Question
                                key={`${question.algoId}_${question.nodeId}`}
                                onClick={() => actions.jump(question.algoId, question.nodeId)}>
                                <comps.QuestionText dangerouslySetInnerHTML={{ __html: (question.summaryText) ? question.summaryText : question.displayText }} />
                                <comps.Answers>
                                    {question.answers.filter(x => x.isAnswered).map(answer =>
                                        (<comps.AnswerText
                                            key={`${question.algoId}_${question.nodeId}_${answer.answerId}`}
                                            dangerouslySetInnerHTML={{ __html: `${(answer.value ? answer.value + " " : '')}${answer.displayText}` }} />))}
                                    {question.answers.filter(x => x.isAnswered).length === 0 && question.answers.filter(x => x.answerId === 0).length === 0 && (<comps.EmptyAnswerText>{labels.noAnswers}</comps.EmptyAnswerText>)}
                                </comps.Answers>
                            </comps.Question>)
                        )}
                    </comps.Summary>
                </comps.TransparentCurtain>
            </comps.DelayExit>]}
    </comps.Wrapper>)
}