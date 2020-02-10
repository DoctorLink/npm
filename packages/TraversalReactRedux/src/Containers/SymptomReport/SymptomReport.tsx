import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Actions';
import {
  SymptomReport,
  BuildSymptomReportActions,
} from '../../ComponentModules';

export const SymptomReportConnected: React.FC<{ traversalId: any }> = ({
  traversalId,
}) => {
  const dispatch = useDispatch();
  const symptomReport = useSelector(
    (state: any) => state.conclusion && state.conclusion.symptomReport
  );
  useEffect(() => {
    if (!symptomReport)
      dispatch(actions.traversalSymptomReportGet(traversalId));
  }, [dispatch, traversalId, symptomReport]);

  const symptomReportActions = BuildSymptomReportActions();

  if (!symptomReport) {
    return null;
  }

  return (
    <SymptomReport
      symptomReport={symptomReport}
      actions={symptomReportActions}
    />
  );
};

export default SymptomReportConnected;
