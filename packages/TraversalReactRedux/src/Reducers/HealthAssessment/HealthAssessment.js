import {
    HEALTH_AGE_SET,
    HEALTH_RISKS_SET,
    HRA_CONCLUSIONS_SET,
    HRA_CHECK_CONCLUSION,
    HRA_UNCHECK_CONCLUSION,
    HRA_WELLNESS_SET,
} from '../../Actions'

const defaultState = {
    riskSummary: {
        loaded: false,
        age: null,
        risks: [],
    },
    healthAge: {
        loaded: false,
        age: null,
        healthAge: null,
        minimumHealthAge: null,
    },
    wellness: {
        loaded: false,
        scores: [],
    },
    checkedConclusions: [],
    conclusionIds: {
        loaded: true,
        riskConclusions: [],
        wellnessConclusions: [],
    }
}

const healthAssessment = (state = defaultState, action) => {
    switch (action.type) {
        case HEALTH_AGE_SET:
            return { ...state, healthAge: { ...action.healthAge, loaded: true } };
        case HEALTH_RISKS_SET:
            return { ...state, riskSummary: { ...action.healthRisks, loaded: true } };
        case HRA_CONCLUSIONS_SET:
            return { ...state, conclusionIds: { ...action.conclusionIds, loaded: true } };
        case HRA_WELLNESS_SET:
            return { ...state, wellness: { ...action.wellness, loaded: true } };
        case HRA_CHECK_CONCLUSION:
            return { ...state, checkedConclusions: [...state.checkedConclusions, action.id] };
        case HRA_UNCHECK_CONCLUSION:
            return { ...state, checkedConclusions: state.checkedConclusions.filter(id => id !== action.id) };
        default:
            return state;
    }
};

export default healthAssessment;