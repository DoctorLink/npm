import React from 'react'
import styled from 'styled-components'
import Form from '../TraversalForm'
import baseTheme from '../../Theme/base/index'
import { defaultLabels } from '../../Constants'
import { defaultTraversalActions, defaultTraversalComponents } from '../defaults'

const FlexButton = styled.div`
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
    ${Buttons} {
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

const Traversal = ({ traversal, minWidthTable, labels = defaultLabels.traversal, actions = defaultTraversalActions, components = defaultTraversalComponents }) => {
    const comps = { ...defaultTraversalComponents, ...components };
    return (<Container>
        <Form traversal={traversal} minWidthTable={minWidthTable} actions={actions} components={comps}>
            <Buttons>
                <ButtonGroup>
                    <PrevButton>
                        <comps.Button 
                            type="button" 
                            // disabled={traversal.loading || traversal.previousDisabled} 
                            onClick={actions.previous}>
                            {labels.previous}
                        </comps.Button>
                    </PrevButton>
                    <FlexButton>
                        <comps.Button 
                            type="submit" 
                            disabled={traversal.loading || traversal.nextDisabled} >
                            {labels.next}
                        </comps.Button>
                    </FlexButton>
                </ButtonGroup>
                {actions.showSummary && <SummaryButton>
                    <comps.Button type="button" onClick={actions.showSummary}>{labels.summary}</comps.Button>
                </SummaryButton>}
            </Buttons>
        </Form>
    </Container>)
}

Traversal.defaultProps = {
    minWidthTable: 700
}

export default Traversal;
