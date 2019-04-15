import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import MediaQuery from 'react-responsive'

import Question from '../../Components/Question'
import InfoIcon from '../../Components/InfoIcon'

import TraversalResponse from '../TraversalResponse'
import TableQuestion from '../TraversalTable'

const transition = {
    duration: 300,
    type: 'spring',
    stiffness: 150,
    damping: 100
}

const Collection = posed.div({
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


export default ({ traversal, onSubmit, children, showExplanation }) => {
    const { nodeIds, nodes, questions, answers, errors, previous } = traversal;
    return (<form onSubmit={(e) => onSubmit(e)}>
        <PoseGroup preEnterPose={'preEnterPose'} animateOnMount={true}>
            {nodeIds.map((nodeId) => {
                const node = nodes[nodeId];
                return (<Collection key={nodeId} mirror={previous}>
                    {(node.questions.length !== 1 || node.isTable) && (<Question displayText={node.displayText}>
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
    </form>)
}