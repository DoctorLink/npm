import React from 'react'
import styled from 'styled-components'
import Form from '../TraversalForm'
import Button from '../../Components/Button'
import baseTheme from '../../Theme/base/index'
import { defaultLabels } from '../../Constants'

const FlexButton = styled(Button)`
    flex: 1;
`

const PrevButton = styled(FlexButton)``

const SummaryButton = styled(FlexButton)`
    @media screen and (min-width: 450px) {  
        flex: none;
        margin-left: auto;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`

const ButtonGroup = styled.div`
    display: flex;
`

const Container = styled.div`    
    display: flex;
    flex-direction: column;
    margin: 0 ${p => p.theme.spacing.padding * -1}px;
    ${Buttons} {
        margin: 0 ${p => p.theme.spacing.padding}px;
        @media screen and (min-width: 450px) {    
            flex-direction: row;
        }
    }
    ${PrevButton} {
        margin-right: ${p => p.theme.spacing.padding}px;
    }
    ${ButtonGroup} {
        margin-bottom: ${p => p.theme.spacing.padding}px;
        @media screen and (min-width: 450px) {    
            margin-bottom: 0;
        }
    }
`

Container.defaultProps = {
    theme: baseTheme
}


const Traversal = ({ traversal, next, previous, showSummary, showExplanation, labels, hideAlgoName }) =>
    (<Container>
        <Form traversal={traversal} onSubmit={(e) => { e.preventDefault(); next(traversal); }} showExplanation={showExplanation} hideAlgoName={hideAlgoName}>
            <Buttons>
                <ButtonGroup>
                    <PrevButton type="button" disabled={traversal.loading || traversal.previousDisabled} onClick={() => previous(traversal.traversalId)}>{labels.previous}</PrevButton>
                    <FlexButton type="submit" disabled={traversal.loading || traversal.nextDisabled} >{labels.next}</FlexButton>
                </ButtonGroup>
                {showSummary && <SummaryButton type="button" onClick={() => showSummary(traversal.traversalId)}>{labels.summary}</SummaryButton>}
            </Buttons>
        </Form>
    </Container>)

Traversal.defaultProps = {
    labels: defaultLabels.traversal,
}

export default Traversal;
