import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../Actions'
import { Chat, Conclusions } from '../../ComponentModules';

const ChatPage = ({ traversal, match, dispatch }) => {
    const { id } = match.params;
    useEffect(() => { dispatch(actions.traversalContinue(id)) }, [id]);

    if (!traversal) {
        return null;
    }

    if (traversal.completed) {
        return <Conclusions traversalId={id} assessmentType={traversal.assessmentType} />;
    }

    return (<Chat
        traversal={traversal}
        next={traversal => dispatch(actions.traversalNext(traversal))}
        previous={(traversalId, algoId, nodeId, assetId) => dispatch(actions.traversalPrevious(traversalId, algoId, nodeId, assetId))}
        showExplanation={explanation => dispatch(actions.populateModal(explanation, "Explanation"))} />
    )
}

const mapStateToProps = state => ({ traversal: state.traversal })

export default connect(mapStateToProps)(ChatPage)