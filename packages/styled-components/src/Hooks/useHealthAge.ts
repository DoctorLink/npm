import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  healthAgeGetRequest,
  healthAssessmentSelector,
} from '@doctorlink/traversal-redux';
import { HealthAgeModel } from '@doctorlink/traversal-core';

export const useHealthAge = (traversalId: string): HealthAgeModel => {
  const { healthAge, checkedConclusions } = useSelector(
    healthAssessmentSelector
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(healthAgeGetRequest(traversalId, checkedConclusions));
  }, [traversalId, checkedConclusions, dispatch]);
  return healthAge;
};
