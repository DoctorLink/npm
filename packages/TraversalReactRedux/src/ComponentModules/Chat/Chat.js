import React, { useRef} from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import TraversalResponse from '../TraversalResponse'
import ChatQuestion from '../ChatQuestion'
import Button from '../../Components/Button'

const CurrentQuestion = styled.div.attrs({ id: 'CurrentQuestion' })``

const Container = styled.div`
    margin: 0 -10px;
    min-height: ${props => props.minHeight}px;
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

const Chat = ({ traversal, next, previous, setMinHeight, showExplanation }) => {
    const containerEl = useRef(null)
    const onNext = () => {
        setMinHeight(containerEl.current.clientHeight)
        next(traversal)
    }
    return (<Container ref={containerEl} minHeight={traversal.minHeight}>
        <PoseGroup preEnterPose={'preEnterPose'} animateOnMount={true}>
            {traversal.questionIds.map(questionId => {
                const current = questionId === traversal.questionIds[traversal.questionIds.length-1]
                return (<Collection key={questionId} mirror={traversal.previous}>
                    {current && 
                        (<CurrentQuestion>
                            <TraversalResponse
                                question={traversal.questions[questionId]} 
                                answers={traversal.answers} 
                                error={traversal.errors[questionId]} 
                                showExplanation={showExplanation} />   
                            <Buttons>
                                <Button type="button" onClick={() => onNext()}>Next</Button>
                            </Buttons>
                        </CurrentQuestion>)
                    }
                    {!current && 
                        (<ChatQuestion  
                            traversal={traversal}
                            question={traversal.questions[questionId]} 
                            answers={traversal.answers}
                            jumpBack={previous} />)
                    }
                </Collection>)
            })}
        </PoseGroup>
    </Container>)
}

export default Chat;
