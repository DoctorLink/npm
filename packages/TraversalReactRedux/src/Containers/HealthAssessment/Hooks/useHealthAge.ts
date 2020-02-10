import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { healthAgeGet } from '../../../Actions';
import { healthAssessmentSelector } from '../../../Selectors/healthAssessment';

export const useHealthAge = (traversalId: any) => {
  const { healthAge, checkedConclusions } = useSelector(
    healthAssessmentSelector
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(healthAgeGet(traversalId, checkedConclusions));
  }, [traversalId, checkedConclusions, dispatch]);
  return healthAge;
};
