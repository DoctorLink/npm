import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hraWellnessGet } from '../../../Actions';
import { healthAssessmentSelector } from '../../../Selectors/healthAssessment';

export const useWellness = (traversalId: any) => {
  const { wellness, checkedConclusions } = useSelector(
    healthAssessmentSelector
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hraWellnessGet(traversalId, checkedConclusions));
  }, [traversalId, checkedConclusions, dispatch]);
  return wellness;
};
