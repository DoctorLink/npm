import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../Actions'

const ConclusionList = ({ traversalId, conclusions, dispatch }) => {
    useEffect(() => { dispatch(actions.traversalConclusionGet(traversalId)) }, [traversalId]);

    if (!conclusions) {
        return null;
    }

    return (<div id='Traversal'>{conclusions.filter(c => !c.silent).map(conc => <div key={conc.assetId}>{conc.assetId}: {conc.displayText}</div>)}</div>)
}

const mapStateToProps = state => ({ conclusions: state.conclusion && state.conclusion.conclusions });
export default connect(mapStateToProps)(ConclusionList);