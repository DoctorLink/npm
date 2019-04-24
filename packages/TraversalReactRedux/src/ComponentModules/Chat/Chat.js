import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import TraversalResponse from '../TraversalResponse'
import ChatQuestion from '../ChatQuestion'
import Button from '../../Components/Button'

const Container = styled.div`
    margin: 0 -10px;
`

const Buttons = styled.div`
    margin: 0 10px;
`

const transition = {
    duration: 300,
    type: 'spring',
    stiffness: 150,
    damping: 100
}

const Collection = posed.div({
    enter: {
        opacity: 1,
        y: '0',
        transition: transition
    },
    exit: {
        opacity: 0,
        y: ({ mirror }) => mirror === true ? '100%' : '-100%',
        transition: transition
    },
    preEnterPose: {
        opacity: 0,
        y: ({ mirror }) => mirror === true ? '-100%' : '100%',
        transition: transition
    },
})

const Chat = ({ traversal, next, previous, showSummary, showExplanation }) =>
    (<Container>
        <PoseGroup preEnterPose={'preEnterPose'} animateOnMount={true}>
            {traversal.questionIds.map(questionId => {
                const current = questionId === traversal.questionIds[traversal.questionIds.length-1]
                return (<Collection key={questionId} mirror={traversal.previous}>
                    {current && 
                        (<TraversalResponse
                            question={traversal.questions[questionId]} 
                            answers={traversal.answers} 
                            error={traversal.errors[questionId]} 
                            showExplanation={showExplanation} />)
                    }
                    {!current && 
                        (<ChatQuestion  
                            traversalId={traversal.traversalId}
                            question={traversal.questions[questionId]} 
                            answers={traversal.answers}
                            jumpBack={previous} />)
                    }
                </Collection>)
            })}
        </PoseGroup>
        <Buttons>
            <Button type="submit" onClick={() => next(traversal)}>Next</Button>
        </Buttons>
        <div>
            <pre style={{whiteSpace: 'pre-wrap'}}>
                {JSON.stringify(traversal, null, 2)}
            </pre>
        </div>
    </Container>)

export default Chat;
