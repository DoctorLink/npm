import { HEALTH_RISKS_SET, HRA_CONCLUSIONS_SET } from '../../Actions'

const defaultState = {
    riskSummary: {
        risks: [],
        modifiableRisks: [],
    },
    conclusionIds: {
        riskConclusions: [],
        wellnessConclusions: [],
    }
}

const healthAssessment = (state = defaultState, action) => {
    switch (action.type) {
        case HEALTH_RISKS_SET:
            return { ...state, riskSummary: action.healthRisks };
        case HRA_CONCLUSIONS_SET:
            return { ...state, conclusionIds: action.conclusionIds };
        default:
            return state;
    }
};

export default healthAssessment;