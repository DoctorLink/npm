import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { healthRisksGet } from '../../../Actions';
import { healthAssessmentSelector } from '../../../Selectors/healthAssessment';

const defaultAges = [90];

export const useRiskSummary = (traversalId: any, ages: any = defaultAges) => {
  const { riskSummary, checkedConclusions } = useSelector(
    healthAssessmentSelector
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(healthRisksGet(traversalId, ages, checkedConclusions));
  }, [traversalId, ages, checkedConclusions, dispatch]);
  return riskSummary;
};
