import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { traversalConclusionReportGetRequest } from '../../Actions/Traversal';
import {
  SymptomReport,
  useSymptomReportActions,
  SymptomReportCallbacks,
} from '../../ComponentModules';
import { RootState } from '../../Models';

export const SymptomReportConnected: React.FC<{ traversalId: any }> = ({
  traversalId,
}) => {
  const dispatch = useDispatch();
  const symptomReport = useSelector(
    (state: RootState) => state.conclusion && state.conclusion.symptomReport
  );
  useEffect(() => {
    if (!symptomReport)
      dispatch(traversalConclusionReportGetRequest(traversalId));
  }, [dispatch, traversalId, symptomReport]);

  const actions: SymptomReportCallbacks = useSymptomReportActions();

  if (!symptomReport) {
    return null;
  }

  return <SymptomReport symptomReport={symptomReport} actions={actions} />;
};
