import { Reducer } from 'redux';
import {
  HealthAssessmentState,
  HealthComparisonModel,
} from '@doctorlink/traversal-core';
import {
  HraAction,
  HEALTH_AGE_GET_RESPONSE,
  HEALTH_RISKS_GET_RESPONSE,
  HRA_CONCLUSION_CHECK,
  HRA_CONCLUSION_UNCHECK,
  WELLNESS_GET_RESPONSE,
  HRA_COMPARISONREPORT_GET_RESPONSE,
} from '../../Actions';

const defaultState: HealthAssessmentState = {
  riskSummary: {
    loaded: false,
    age: 0,
    risks: [],
    checkableConclusions: [],
  },
  healthAge: {
    loaded: false,
    age: 0,
    healthAge: 0,
    minimumHealthAge: 0,
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
    summary: {
      risk: {},
      wellness: {},
      myNumbers: {},
    },
    currentSnapshot: {
      id: 0,
      traversalId: '',
      clientId: '',
      createdDate: '',
      memberRef: '',
      myNumbers: [],
      riskOutput: {
        age: 0,
        healthAge: 0,
        risks: [],
      },
      wellnessOutput: {
        scores: [],
      },
    },
    previousSnapshot: {
      id: 0,
      traversalId: '',
      clientId: '',
      createdDate: '',
      memberRef: '',
      myNumbers: [],
      riskOutput: {
        age: 0,
        healthAge: 0,
        risks: [],
      },
      wellnessOutput: {
        scores: [],
      },
    },
  },
};

export type HealthAssessmentReducer = Reducer<HealthAssessmentState, HraAction>;

export const healthAssessmentReducer: HealthAssessmentReducer = (
  state = defaultState,
  action
): HealthAssessmentState => {
  switch (action.type) {
    case HEALTH_AGE_GET_RESPONSE:
      return {
        ...state,
        healthAge: { ...action.healthAge, loaded: true },
      };
    case HEALTH_RISKS_GET_RESPONSE:
      return {
        ...state,
        riskSummary: { ...action.healthRisks, loaded: true },
      };
    case WELLNESS_GET_RESPONSE:
      return {
        ...state,
        wellness: { ...action.wellness, loaded: true },
      };
    case HRA_CONCLUSION_CHECK:
      return {
        ...state,
        checkedConclusions: [...state.checkedConclusions, action.id],
      };
    case HRA_CONCLUSION_UNCHECK:
      return {
        ...state,
        checkedConclusions: state.checkedConclusions.filter(
          (id) => id !== action.id
        ),
      };
    case HRA_COMPARISONREPORT_GET_RESPONSE:
      return {
        ...state,
        comparisonReport: {
          ...action.comparisonOutcome,
          loaded: true,
        } as HealthComparisonModel,
      };
    default:
      return state;
  }
};

export const healthAssessmentReducerMapObject = {
  healthAssessment: healthAssessmentReducer,
};
