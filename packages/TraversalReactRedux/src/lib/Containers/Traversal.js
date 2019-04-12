import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router"

import { traversalContinue, traversalNext, traversalPrevious, traversalSummaryGet, traversalConclusionGet, traversalSymptomReportGet, populateModal } from '../Actions'
import TraversalComponent from '../Components/Modules/Traversal'
import SymptomReport from '../Components/SymptomReport'

const Traversal = ({ traversal, conclusion, match, dispatch, history }) => {
    var id = match.params['id'];
    if (!traversal || traversal.traversalId !== id) {
        dispatch(traversalContinue(id));
        return null;
    }

    if (traversal.nodeIds.length === 0) {
        if (traversal.assessmentType === 1) {
            if (!conclusion || conclusion.traversalId !== id || !conclusion.symptomReport) {
                dispatch(traversalSymptomReportGet(id));
                return null;
            }

            return <SymptomReport conclusion={conclusion} showExplanation={explanation => dispatch(populateModal(explanation))}/>
        }

        if (!conclusion || conclusion.traversalId !== id) {
            dispatch(traversalConclusionGet(id));
            return null;
        }

        return conclusion.conclusions.filter(c => !c.silent).map(conc => <div key={conc.assetId}>{conc.assetId}: {conc.displayText}</div>)
    }
    
    return (<TraversalComponent 
                traversal={traversal} 
                next={traversal => dispatch(traversalNext(traversal))} 
                previous={traversalId => dispatch(traversalPrevious(traversalId))} 
                showSummary={traversalId => dispatch(traversalSummaryGet(traversalId))}
                showExplanation={explanation => dispatch(populateModal(explanation))}/>
)}

const mapStateToProps = state => ({traversal: state.traversal, conclusion: state.conclusion})

export default withRouter(connect(mapStateToProps)(Traversal))