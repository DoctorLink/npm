import { useDispatch } from 'react-redux';
import * as actions from '../../Actions';
import { SymptomReportCallbacks } from './SymptomReportCallbacks';

export const useSymptomReportActions = (): SymptomReportCallbacks => {
  const dispatch = useDispatch();
  return {
    showExplanation: (explanation: any) =>
      dispatch(actions.populateModal(explanation, 'Explanation')),
  };
};
