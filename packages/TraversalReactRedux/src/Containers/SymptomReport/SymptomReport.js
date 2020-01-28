import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../Actions';
import { SymptomReport, buildSymptomReportActions } from '../../ComponentModules';

export default  ({ traversalId }) => {
    const dispatch = useDispatch();
    const symptomReport = useSelector(state => state.conclusion && state.conclusion.symptomReport);
    useEffect(() => { dispatch(actions.traversalSymptomReportGet(traversalId)) }, [traversalId]);

    if (!symptomReport) {
        return null;
    }

    return (<SymptomReport symptomReport={symptomReport} actions={buildSymptomReportActions()} />)
}