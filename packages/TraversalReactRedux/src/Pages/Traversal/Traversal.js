import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../Actions'
import { Traversal, Conclusions } from '../../ComponentModules'

const TraversalPage = ({ traversal, labels, match, dispatch }) => {
    const { id } = match.params;
    useEffect(() => { dispatch(actions.traversalContinue(id)) }, [id]);

    if (!traversal) {
        return null;
    }

    if (traversal.nodeIds.length === 0) {
        return <Conclusions traversalId={id} assessmentType={traversal.assessmentType} />
    }

    return (<Traversal
        traversal={traversal}
        labels={labels}
        next={traversal => dispatch(actions.traversalNext(traversal))}
        previous={traversalId => dispatch(actions.traversalPrevious(traversalId))}
        showSummary={traversalId => dispatch(actions.traversalSummaryGet(traversalId))}
        showExplanation={explanation => dispatch(actions.populateModal(explanation, "Explanation"))} />
    )
}

const mapStateToProps = state => ({
    traversal: state.traversal,
    labels: state.labels.traversal
})

export default connect(mapStateToProps)(TraversalPage)