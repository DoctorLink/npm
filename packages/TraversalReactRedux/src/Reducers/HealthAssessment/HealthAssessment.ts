import {
  HEALTH_AGE_SET,
  HEALTH_RISKS_SET,
  HRA_CHECK_CONCLUSION,
  HRA_UNCHECK_CONCLUSION,
  HRA_WELLNESS_SET,
  HRA_COMPARISONREPORT_SET,
  HraAction,
} from '../../Actions';
import { HealthAssessmentModel } from '../../Models';

const defaultState: HealthAssessmentModel = {
  riskSummary: {
    loaded: false,
    age: null,
    risks: [],
    checkableConclusions: [],
  },
  healthAge: {
    loaded: false,
    age: null,
    healthAge: null,
    minimumHealthAge: null,
    checkableConclusions: [],
  },
  wellness: {
    loaded: false,
    scores: [],
    checkableConclusions: [],
  },
  checkedConclusions: [],
  comparisonReport: {
    loaded: false,
    summary: null,
    currentSnapshot: null,
    previousSnapshot: null,
  },
};

const healthAssessment = (state = defaultState, action: HraAction) => {
  switch (action.type) {
    case HEALTH_AGE_SET:
      return { ...state, healthAge: { ...action.healthAge, loaded: true } };
    case HEALTH_RISKS_SET:
      return { ...state, riskSummary: { ...action.healthRisks, loaded: true } };
    case HRA_WELLNESS_SET:
      return { ...state, wellness: { ...action.wellness, loaded: true } };
    case HRA_CHECK_CONCLUSION:
      return {
        ...state,
        checkedConclusions: [...state.checkedConclusions, action.id],
      };
    case HRA_UNCHECK_CONCLUSION:
      return {
        ...state,
        checkedConclusions: state.checkedConclusions.filter(
          (id: any) => id !== action.id
        ),
      };
    case HRA_COMPARISONREPORT_SET:
      return {
        ...state,
        comparisonReport: { ...action.comparisonOutcome, loaded: true },
      };
    default:
      return state;
  }
};

export default healthAssessment;
