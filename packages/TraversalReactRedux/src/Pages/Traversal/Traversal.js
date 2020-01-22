import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Actions';
import { Traversal, buildTraversalActions, Conclusions } from '../../ComponentModules';

const TraversalPage = ({ match }) => {
    const { id } = match.params;
    const dispatch = useDispatch();
    const traversal = useSelector(state => state.traversal);
    const labels = useSelector(state => state.labels.traversal);
    useEffect(() => { dispatch(actions.traversalContinue(id)) }, [id]);

    if (!traversal) {
        return null;
    }

    if (traversal.nodeIds.length === 0) {
        return <Conclusions traversalId={id} assessmentType={traversal.assessmentType} />
    }

    return (<Traversal traversal={traversal} labels={labels} actions={buildTraversalActions(dispatch, traversal)}/>)
}

export default TraversalPage