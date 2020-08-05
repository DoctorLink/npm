import { useDispatch } from 'react-redux';
import { SymptomReportCallbacks } from './SymptomReportCallbacks';
import { populateModal } from '@doctorlink/traversal-redux';

export const useSymptomReportActions = (): SymptomReportCallbacks => {
  const dispatch = useDispatch();
  return {
    showExplanation: (explanation: any) =>
      dispatch(populateModal(explanation, 'Explanation')),
  };
};
