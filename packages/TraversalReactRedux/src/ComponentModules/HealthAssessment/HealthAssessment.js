import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { Switch, Route, Redirect } from 'react-router-dom'
import { traversalConclusionGet, hraConclusionsGet } from '../../Actions';
import Risks from './Risks/Risks';
import HealthAge from './HealthAge/HealthAge';
import Wellbeing from './Wellbeing/Wellbeing';

const HealthAssessment = ({ traversalId, dispatch }) => {
    useEffect(() => { dispatch(traversalConclusionGet(traversalId)) }, [traversalId]);
    useEffect(() => { dispatch(hraConclusionsGet()) }, []);

    const basePath = `/traversal/${traversalId}`;
    return (
        <div>
            <h2>Global Health Check Scores</h2>
            <Switch>
                <Route path={`${basePath}/health-age`} render={() => <HealthAge traversalId={traversalId} />} />
                <Route path={`${basePath}/risks`} render={() => <Risks traversalId={traversalId} />} />
                <Route path={`${basePath}/wellbeing`} render={() => <Wellbeing traversalId={traversalId} />} />
                <Route render={() => <Redirect to={`${basePath}/health-age`} />} />
            </Switch>
        </div>
    )
}

export default connect()(HealthAssessment);
