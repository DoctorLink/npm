import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  traversalConclusionReportGetRequest,
  chatTraversalConclusionReportGetRequest,
} from '@doctorlink/traversal-redux';
import {
  SymptomReport,
  useSymptomReportActions,
  SymptomReportCallbacks,
} from '../../ComponentModules';
import { RootState } from '@doctorlink/traversal-core';

export const SymptomReportConnected: React.FC<{
  traversalId: any;
  chat?: boolean;
}> = ({ traversalId, chat = false }) => {
  const getAction = chat
    ? chatTraversalConclusionReportGetRequest
    : traversalConclusionReportGetRequest;
  const dispatch = useDispatch();
  const symptomReport = useSelector(
    (state: RootState) => state.conclusion && state.conclusion.symptomReport
  );
  useEffect(() => {
    if (!symptomReport) dispatch(getAction(traversalId));
  }, [dispatch, traversalId, symptomReport]);

  const actions: SymptomReportCallbacks = useSymptomReportActions();

  if (!symptomReport) {
    return null;
  }

  return <SymptomReport symptomReport={symptomReport} actions={actions} />;
};
