import { Reducer } from 'redux';
import { HealthAssessmentState } from '@doctorlink/traversal-core';
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

export type HealthAssessmentReducer = Reducer<HealthAssessmentState, HraAction>;

export const healthAssessmentReducer: HealthAssessmentReducer = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case HEALTH_AGE_GET_RESPONSE:
      return {
        ...state,
        healthAge: { ...action.healthAge, loaded: true },
      } as HealthAssessmentState;
    case HEALTH_RISKS_GET_RESPONSE:
      return {
        ...state,
        riskSummary: { ...action.healthRisks, loaded: true },
      } as HealthAssessmentState;
    case WELLNESS_GET_RESPONSE:
      return {
        ...state,
        wellness: { ...action.wellness, loaded: true },
      } as HealthAssessmentState;
    case HRA_CONCLUSION_CHECK:
      if (state == null) return null;
      return {
        ...state,
        checkedConclusions: [...state.checkedConclusions, action.id],
      } as HealthAssessmentState;
    case HRA_CONCLUSION_UNCHECK:
      if (state == null) return null;
      return {
        ...state,
        checkedConclusions: state.checkedConclusions.filter(
          (id: any) => id !== action.id
        ),
      } as HealthAssessmentState;
    case HRA_COMPARISONREPORT_GET_RESPONSE:
      return {
        ...state,
        comparisonReport: { ...action.comparisonOutcome, loaded: true },
      } as HealthAssessmentState;
    default:
      return state;
  }
};

export const healthAssessmentReducerMapObject = {
  healthAssessment: healthAssessmentReducer,
};
