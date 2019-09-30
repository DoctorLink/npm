import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hraWellnessGet } from '../../../Actions';

export const useWellness = (traversalId) => {
    const { wellness, checkedConclusions } = useSelector(state => state.healthAssessment);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hraWellnessGet(traversalId, checkedConclusions));
    }, [traversalId, checkedConclusions]);
    return wellness;
}