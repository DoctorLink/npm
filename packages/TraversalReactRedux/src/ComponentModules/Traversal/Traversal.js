import React from 'react'
import styled from 'styled-components'
import Form from '../TraversalForm'
import Button from '../../Components/Button'

const Container = styled.div`
    margin: 0 -10px;
`

const Buttons = styled.div`
    margin: 0 10px;
`

const Traversal = ({ traversal, next, previous, showSummary, showExplanation }) =>
    (<Container>
        <Form traversal={traversal} onSubmit={(e) => { e.preventDefault(); next(traversal); }} showExplanation={showExplanation}>
            <Buttons>
                <Button type="button" style={{marginRight: '10px'}} disabled={traversal.loading} onClick={() => previous(traversal.traversalId)}>Previous</Button>
                <Button type="submit" disabled={traversal.loading} >Next</Button>
                <Button type="button" style={{float: 'right'}} onClick={() => showSummary(traversal.traversalId)}>Summary</Button>
            </Buttons>
        </Form>
    </Container>)

export default Traversal;
