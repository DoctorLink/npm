import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  wellnessGetRequest,
  healthAssessmentSelector,
} from '@doctorlink/traversal-redux';

export const useWellness = (traversalId: any) => {
  const { wellness, checkedConclusions } = useSelector(
    healthAssessmentSelector
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wellnessGetRequest(traversalId, checkedConclusions));
  }, [traversalId, checkedConclusions, dispatch]);
  return wellness;
};
