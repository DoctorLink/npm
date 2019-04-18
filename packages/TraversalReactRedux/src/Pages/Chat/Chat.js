import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../Actions'
// import TraversalComponent from '../../ComponentModules/Traversal'
import SymptomReport from '../../ComponentModules/SymptomReport'

const Traversal = ({ traversal, conclusion, match, dispatch }) => {
    var id = match.params['id'];
    if (!traversal || traversal.traversalId !== id) {
        dispatch(actions.traversalContinue(id));
        return null;
    }

    if (traversal.nodeIds.length === 0) {
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

    return (<pre>
        {JSON.stringify(traversal, null, 2)}
    </pre>)
    
    // return (<TraversalComponent 
    //             traversal={traversal} 
    //             next={traversal => dispatch(actions.traversalNext(traversal))} 
    //             previous={traversalId => dispatch(actions.traversalPrevious(traversalId))} 
    //             showSummary={traversalId => dispatch(actions.traversalSummaryGet(traversalId))}
    //             showExplanation={explanation => dispatch(actions.populateModal(explanation))}/>)
}

const mapStateToProps = state => ({traversal: state.traversal, conclusion: state.conclusion})

export default connect(mapStateToProps)(Traversal)