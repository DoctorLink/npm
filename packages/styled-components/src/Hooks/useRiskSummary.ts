import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HealthRisksModel } from '@doctorlink/traversal-core';
import {
  healthRisksGetRequest,
  healthAssessmentSelector,
} from '@doctorlink/traversal-redux';

const defaultAges = [90];

export const useRiskSummary = (
  traversalId: string,
  ages: number[] = defaultAges
): HealthRisksModel => {
  const { riskSummary, checkedConclusions } = useSelector(
    healthAssessmentSelector
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(healthRisksGetRequest(traversalId, ages, checkedConclusions));
  }, [traversalId, ages, checkedConclusions, dispatch]);
  return riskSummary;
};
