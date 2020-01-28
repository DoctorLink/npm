import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../Actions'

export default  ({ traversalId }) => {
    const dispatch = useDispatch();
    const conclusions = useSelector(state => state.conclusion && state.conclusion.conclusions);
    useEffect(() => { dispatch(actions.traversalConclusionGet(traversalId)) }, [traversalId]);

    if (!conclusions) {
        return null;
    }

    return (<div id='Traversal'>{conclusions.filter(c => !c.silent).map(conc => <div key={conc.assetId}>{conc.assetId}: {conc.displayText}</div>)}</div>)
}