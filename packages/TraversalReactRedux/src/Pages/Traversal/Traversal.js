import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Actions';
import { Traversal, buildTraversalActions } from '../../ComponentModules';
import { ConclusionReportConnected as Conclusions, SummaryConnected as Summary } from '../../Containers';

const TraversalPage = ({ match }) => {
    const { id } = match.params;
    const dispatch = useDispatch();
    const traversal = useSelector(state => state.traversal);
    const loadTraversal = !traversal || traversal.traversalId !== id;
    const containerRef = useRef();
    const labels = useSelector(state => state.labels.traversal);
    
    useEffect(() => { 
        if (loadTraversal) dispatch(actions.traversalContinue(id)) 
    }, [dispatch, id, traversal]);

    if (loadTraversal) {
        return null;
    }

    if (traversal.nodeIds.length === 0) {
        return <Conclusions traversalId={id} assessmentType={traversal.assessmentType} />
    }

    return (<>
        <Traversal traversal={traversal} containerRef={containerRef} labels={labels} actions={buildTraversalActions(traversal, containerRef)}/>
        <Summary containerRef={containerRef} />
    </>)
}

export default TraversalPage