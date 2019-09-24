import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { healthRisksGet } from '../../../Actions';

const emptyArray = [];

// Don't pass a new empty array for `ages` or you will get an infinite loop.
export const useRiskSummary = (traversalId, ages = emptyArray) => {
    const { riskSummary, checkedConclusions } = useSelector(state => state.healthAssessment);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(healthRisksGet(traversalId, ages, checkedConclusions));
    }, [traversalId, ages, checkedConclusions]);
    return riskSummary;
}