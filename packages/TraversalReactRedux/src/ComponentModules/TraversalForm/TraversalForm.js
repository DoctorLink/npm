import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

import Question from '../../Components/Question'
import InfoIcon from '../../Components/InfoIcon'
import Fieldset from '../../Components/Fieldset'
import ErrorText from '../../Components/ErrorText'
import AlgoName from '../../Components/AlgoName'

import TraversalResponse from '../TraversalResponse'
import TableQuestion from '../TraversalTable'

const transition = {
    duration: 300,
    type: 'spring',
    stiffness: 150,
    damping: 100
}

const Collection = posed(Fieldset)({
    enter: {
        opacity: 1,
        x: '0',
        transition: transition
    },
    exit: {
        opacity: 0,
        x: ({ mirror }) => mirror === true ? '100%' : '-100%',
        transition: {
            duration: 0
        }
    },
    preEnterPose: {
        opacity: 0,
        x: ({ mirror }) => mirror === true ? '-100%' : '100%',
        transition: transition
    },
})

const Form = styled.form``

export default ({ traversal, onSubmit, children, showExplanation, hideAlgoName }) => {
    const { nodeIds, nodes, questions, answers, errors, previous, loading, collectionErrors } = traversal;
    return (<Form onSubmit={(e) => onSubmit(e)} id="Traversal">
        {hideAlgoName !== true && <AlgoName>{traversal.algoName}</AlgoName>}
        {collectionErrors && collectionErrors.length > 0 && collectionErrors.map((error, i) => <ErrorText key={i}>{error}</ErrorText>)}
        <PoseGroup preEnterPose={'preEnterPose'} animateOnMount={true}>
            {nodeIds.map((nodeId) => {
                const node = nodes[nodeId];
                return (<Collection key={nodeId} mirror={previous} disabled={loading}>
                    {(node.questions.length !== 1 || node.isTable) && (<Question displayText={node.displayText} title={node.title}>
                        <InfoIcon onClick={showExplanation} explanation={node.explanation} />
                    </Question>)}
                    <MediaQuery minWidth={700}>
                        {(matches) => {
                            if (matches && node.isTable) {
                                return (<TableQuestion node={node} questions={questions} answers={answers} errors={errors} showExplanation={showExplanation} />)
                            } else {
                                return node.questions.map(questionId => (<TraversalResponse key={questionId} question={questions[questionId]} answers={answers} error={errors[questionId]} showExplanation={showExplanation} />))
                            }
                        }}
                    </MediaQuery>
                </Collection>)
            })}
        </PoseGroup>
        {children}
    </Form>)
}