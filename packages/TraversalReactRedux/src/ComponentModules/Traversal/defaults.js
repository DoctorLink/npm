import React from 'react';
import { useDispatch } from 'react-redux';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';

import * as actions from '../../Actions';
import createTraversalResponse from '../../Helpers/createTraversalResponse';

import QuestionTitle from '../../Components/QuestionTitle';
import Question from '../../Components/Question';
import InfoIcon from '../../Components/InfoIcon';
import PlainFieldset from '../../Components/Fieldset';
import ErrorText from '../../Components/ErrorText';
import AlgoName from '../../Components/AlgoName';
import SimpleButton from '../../Components/Button';
import TableQuestion from '../../Components/TableQuestion';
import HeaderRow from '../../Components/TableHeaderRow';
import HeaderCell from '../../Components/TableHeaderCell';
import QuestionRow from '../../Components/TableQuestionRow';
import AnswerCell from '../../Components/TableAnswerCell';
import Response from '../../Components/Response';
import Section from '../../Components/Section';
import DisplayText from '../../Components/DisplayText';
import Label from '../../Components/Label';
import Radio from '../../Components/Radio';
import Checkbox from '../../Components/Checkbox';
import DateField from '../../Components/DateField';
import NumberField from '../../Components/NumberField';
import TextField from '../../Components/TextField';

const Button = styled(SimpleButton)`
    width: 100%;
`
const transition = {
    x: { duration: 250, ease: 'easeInOut'}
}

const Fieldset = posed(PlainFieldset)({
    enter: {
        opacity: 1,
        x: '0',
        transition: transition
    },
    exit: {
        opacity: 0,
        x: ({ mirror }) => mirror === true ? '100%' : '-100%',
        transition: transition
    },
    preEnterPose: {
        opacity: 0,
        x: ({ mirror }) => mirror === true ? '-100%' : '100%',
        transition: transition
    },
})

const Form = styled.form`
`

const Container = styled.div`
    transition: all 300ms;
`

const Collection = ({onRest, children}) => (<PoseGroup preEnterPose={'preEnterPose'} enterAfterExit={true} animateOnMount={true} onRest={onRest}>{children}</PoseGroup>)

const TraversalRadio = ({Comp, answerId, checked, siblingIds, action}) => (<Comp
    id={answerId}
    name={answerId.substring(0, answerId.lastIndexOf('_'))}
    value={true}                
    checked={checked} 
    onChange={()=>{}}
    onClick={(e) => action(e, answerId, siblingIds, true)}
/>)

const TraversalCheckbox = ({Comp, answerId, checked, siblingIds, action}) => (<Comp
    id={answerId}
    value={true}
    checked={checked}
    onChange={(e) => action(e, answerId, siblingIds)}
/>)

const TraversalValue = ({Comp, answerId, value, siblingIds, action}) => (<Comp
    value={value || ""}
    onChange={(e) => action(answerId, siblingIds, e.target.value)}
/>)

export const defaultTraversalComponents = {
    Button,
    Form,
    AlgoName,
    ErrorText,
    QuestionTitle,
    Question,
    InfoIcon,
    Fieldset,
    Container,
    Collection,
    TableQuestion,
    HeaderRow,
    HeaderCell,
    QuestionRow,
    AnswerCell,
    Response,
    Section,
    Label,
    DisplayText,
    Radio,
    Checkbox,
    DateField,
    NumberField,
    TextField,
    TraversalValue,
    TraversalRadio,
    TraversalCheckbox
}

export const defaultTraversalActions = {
    next: () => undefined,
    previous: () => undefined,
    showSummary: () => undefined,
    showExplanation: explanation => undefined,
    updateValue: (answerId, questionAnswerIds, value) => undefined,
    toggleCheckbox: (event, answerId, questionAnswerIds) => undefined,
    toggleRadio: (event, answerId, questionAnswerIds) => undefined,
    setHeight: () => undefined,
}

export const buildTraversalActions = (traversal, containerRef) => {
    const dispatch = useDispatch();
    return {
        next: () => dispatch(actions.traversalNext(createTraversalResponse(traversal), containerRef)),
        previous: () => dispatch(actions.traversalPrevious(traversal.traversalId, undefined, undefined, undefined, containerRef)),
        showSummary: () => dispatch(actions.traversalSummaryGet(traversal.traversalId)),
        showExplanation: explanation => dispatch(actions.populateModal(explanation, "Explanation")),
        updateValue: (answerId, questionAnswerIds, value) => dispatch(actions.updateText(answerId, questionAnswerIds, value)),
        toggleCheckbox: (event, answerId, questionAnswerIds) => dispatch(actions.toggleCheckbox(answerId, questionAnswerIds)),
        toggleRadio: (event, answerId, questionAnswerIds) => { 
            dispatch(actions.toggleRadio(answerId, questionAnswerIds, true));
            if (event.type === 'click' && event.clientX !== 0 && event.clientY !== 0) {
                let forward = true;
                let answeredRadioQuestions = []
                Object.entries(traversal.answers).forEach(answerId => {
                    const answer = answerId[1]
                    if (answer.controlChecked === true) 
                        answeredRadioQuestions.push(`${answer.nodeId}_${answer.questionId}`)
                })
                Object.keys(traversal.questions).forEach(question => {
                    if (!answeredRadioQuestions.includes(question))
                        forward = false;
                });
                if (forward)
                    dispatch(actions.traversalNext(createTraversalResponse(traversal), containerRef))
            }
        },
        setHeight: () => {
            dispatch(actions.setTraversalMinHeight(0))
        },
    }
}