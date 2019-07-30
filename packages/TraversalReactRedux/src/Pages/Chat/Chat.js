import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../Actions'
import ChatComponent from '../../ComponentModules/Chat'
import SymptomReport from '../../ComponentModules/SymptomReport'

const Container = styled.div`
    box-sizing: border-box;
    padding: 0 10px;
`

const Traversal = ({ traversal, conclusion, match, dispatch }) => {
    var id = match.params['id'];
    if (!traversal || traversal.traversalId !== id) {
        dispatch(actions.traversalContinue(id));
        return null;
    }
    
    if (traversal.completed) {
        if (traversal.assessmentType === 1) {
            if (!conclusion || conclusion.traversalId !== id || !conclusion.symptomReport) {
                dispatch(actions.traversalSymptomReportGet(id));
                return null;
            }

            return <SymptomReport conclusion={conclusion} showExplanation={explanation => dispatch(actions.populateModal(explanation))}/>
        }

        if (!conclusion || conclusion.traversalId !== id) {
            dispatch(actions.traversalConclusionGet(id));
            return null;
        }

        return conclusion.conclusions.filter(c => !c.silent).map(conc => <div key={conc.assetId}>{conc.assetId}: {conc.displayText}</div>)
    }
 
    return (<Container>
        <ChatComponent 
            traversal={traversal} 
            next={traversal => dispatch(actions.traversalNext(traversal))} 
            previous={(traversalId, algoId, nodeId, assetId) => dispatch(actions.traversalPrevious(traversalId, algoId, nodeId, assetId))} 
            showExplanation={explanation => dispatch(actions.populateModal(explanation))}/>
    </Container>)
}

const mapStateToProps = state => ({traversal: state.traversal, conclusion: state.conclusion})

export default connect(mapStateToProps)(Traversal)