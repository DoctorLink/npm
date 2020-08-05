import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  healthAgeGetRequest,
  healthAssessmentSelector,
} from '@doctorlink/traversal-redux';

export const useHealthAge = (traversalId: any) => {
  const { healthAge, checkedConclusions } = useSelector(
    healthAssessmentSelector
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(healthAgeGetRequest(traversalId, checkedConclusions));
  }, [traversalId, checkedConclusions, dispatch]);
  return healthAge;
};
