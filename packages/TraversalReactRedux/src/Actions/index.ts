export const POPULATE_MODAL = 'POPULATE_MODAL';
export const populateModal = (
  content: any,
  title: string | undefined | null
) => ({ type: POPULATE_MODAL, content, title });

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = () => ({ type: CLOSE_MODAL });

export const TOGGLE_RADIO = 'TOGGLE_RADIO';
export const toggleRadio = (
  id: any,
  answerIds: any,
  checked: any = undefined
) => ({ type: TOGGLE_RADIO, id, answerIds, checked });

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const toggleCheckbox = (id: any, answerIds: any) => ({
  type: TOGGLE_CHECKBOX,
  id,
  answerIds,
});

export const UPDATE_TEXT = 'UPDATE_TEXT';
export const updateText = (id: any, answerIds: any, value: any) => ({
  type: UPDATE_TEXT,
  id,
  answerIds,
  value,
});

export const TRAVERSAL_MIN_HEIGHT = 'TRAVERSAL_MIN_HEIGHT';
export const setTraversalMinHeight = (minHeight: any) => ({
  type: TRAVERSAL_MIN_HEIGHT,
  minHeight,
});

export const TRAVERSAL_START = 'TRAVERSAL_START';
export const traversalStart = (
  algoId?: any,
  release?: any,
  lang?: any,
  nodeId?: any,
  injection?: any,
  culture?: any
) => ({
  type: TRAVERSAL_START,
  algoId,
  release,
  lang,
  nodeId,
  injection,
  culture,
});

export const TRAVERSAL_START_SET = 'TRAVERSAL_START_SET';
export const traversalStartSet = (traversal: any) => ({
  type: TRAVERSAL_START_SET,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_CONTINUE = 'TRAVERSAL_CONTINUE';
export const traversalContinue = (traversalId: any, containerRef?: any) => ({
  type: TRAVERSAL_CONTINUE,
  traversalId,
  containerRef,
});

export const TRAVERSAL_CONTINUE_SET = 'TRAVERSAL_CONTINUE_SET';
export const traversalContinueSet = (traversal: any) => ({
  type: TRAVERSAL_CONTINUE_SET,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_NEXT = 'TRAVERSAL_NEXT';
export const traversalNext = (traversalResponse: any, containerRef: any) => ({
  type: TRAVERSAL_NEXT,
  traversalResponse,
  containerRef,
});

export const TRAVERSAL_NEXT_SET = 'TRAVERSAL_NEXT_SET';
export const traversalNextSet = (traversal: any) => ({
  type: TRAVERSAL_NEXT_SET,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_PREVIOUS = 'TRAVERSAL_PREVIOUS';
export const traversalPrevious = (
  traversalId: any,
  algoId: any,
  nodeId: any,
  assetId: any,
  containerRef: any
) => ({
  type: TRAVERSAL_PREVIOUS,
  traversalId,
  algoId,
  nodeId,
  assetId,
  containerRef,
});

export const TRAVERSAL_PREVIOUS_SET = 'TRAVERSAL_PREVIOUS_SET';
export const traversalPreviousSet = (traversal: any) => ({
  type: TRAVERSAL_PREVIOUS_SET,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_SUMMARY_GET = 'TRAVERSAL_SUMMARY_GET';
export const traversalSummaryGet = (traversalId: any) => ({
  type: TRAVERSAL_SUMMARY_GET,
  traversalId,
});

export const TRAVERSAL_SUMMARY_SET = 'TRAVERSAL_SUMMARY_SET';
export const traversalSummarySet = (summary: any) => ({
  type: TRAVERSAL_SUMMARY_SET,
  summary,
  receivedAt: new Date(),
});

export const TRAVERSAL_CONCLUSION_GET = 'TRAVERSAL_CONCLUSION_GET';
export const traversalConclusionGet = (traversalId: any) => ({
  type: TRAVERSAL_CONCLUSION_GET,
  traversalId,
});

export const TRAVERSAL_SYMPTOM_REPORT_GET = 'TRAVERSAL_SYMPTOM_REPORT_GET';
export const traversalSymptomReportGet = (traversalId: any) => ({
  type: TRAVERSAL_SYMPTOM_REPORT_GET,
  traversalId,
});

export const TRAVERSAL_CONCLUSION_SET = 'TRAVERSAL_CONCLUSION_SET';
export const traversalConclusionSet = (conclusion: any) => ({
  type: TRAVERSAL_CONCLUSION_SET,
  conclusion,
  receivedAt: new Date(),
});

export const HEALTH_RISKS_GET = 'HEALTH_RISKS_GET';
export const healthRisksGet = (
  traversalId: any,
  ages: any,
  conclusions: any
) => ({ type: HEALTH_RISKS_GET, traversalId, ages, conclusions });

export const HEALTH_RISKS_SET = 'HEALTH_RISKS_SET';
export const healthRisksSet = (healthRisks: any) => ({
  type: HEALTH_RISKS_SET,
  healthRisks,
});

export const HEALTH_AGE_GET = 'HEALTH_AGE_GET';
export const healthAgeGet = (traversalId: any, conclusions: any) => ({
  type: HEALTH_AGE_GET,
  traversalId,
  conclusions,
});

export const HEALTH_AGE_SET = 'HEALTH_AGE_SET';
export const healthAgeSet = (healthAge: any) => ({
  type: HEALTH_AGE_SET,
  healthAge,
});

export const HRA_WELLNESS_GET = 'HRA_WELLNESS_GET';
export const hraWellnessGet = (traversalId: any, conclusions: any) => ({
  type: HRA_WELLNESS_GET,
  traversalId,
  conclusions,
});

export const HRA_WELLNESS_SET = 'HRA_WELLNESS_SET';
export const hraWellnessSet = (wellness: any) => ({
  type: HRA_WELLNESS_SET,
  wellness,
});

export const HRA_CHECK_CONCLUSION = 'HRA_CHECK_CONCLUSION';
export const checkConclusion = (id: any) => ({
  type: HRA_CHECK_CONCLUSION,
  id,
});

export const HRA_UNCHECK_CONCLUSION = 'HRA_UNCHECK_CONCLUSION';
export const uncheckConclusion = (id: any) => ({
  type: HRA_UNCHECK_CONCLUSION,
  id,
});

export const CLIENT_PRODUCTS_GET = 'CLIENT_PRODUCTS_GET';
export const clientProductsGet = () => ({ type: CLIENT_PRODUCTS_GET });

export const CLIENT_PRODUCTS_SET = 'CLIENT_PRODUCTS_SET';
export const clientProductsSet = (products: any) => ({
  type: CLIENT_PRODUCTS_SET,
  products,
});

export const LABELS_SET = 'LABELS_SET';
export const labelsSet = (labels: any) => ({ type: LABELS_SET, labels });

export const LABELS_RESTORE_DEFAULT = 'LABELS_RESTORE_DEFAULT';
export const labelsRestoreDefault = () => ({ type: LABELS_RESTORE_DEFAULT });

export const WEB_API_NOT_OK = 'WEB_API_NOT_OK';
export const webApiNotOk = (apiCall: any, response: any) => ({
  type: WEB_API_NOT_OK,
  apiCall,
  response,
});

export const WEB_API_ERROR = 'WEB_API_ERROR';
export const webApiError = (apiCall: any, error: any) => ({
  type: WEB_API_ERROR,
  apiCall,
  error,
});

export const actions = {
  POPULATE_MODAL,
  CLOSE_MODAL,
  TOGGLE_RADIO,
  TOGGLE_CHECKBOX,
  UPDATE_TEXT,
  TRAVERSAL_MIN_HEIGHT,
  TRAVERSAL_START,
  TRAVERSAL_START_SET,
  TRAVERSAL_CONTINUE,
  TRAVERSAL_CONTINUE_SET,
  TRAVERSAL_NEXT,
  TRAVERSAL_NEXT_SET,
  TRAVERSAL_PREVIOUS,
  TRAVERSAL_PREVIOUS_SET,
  TRAVERSAL_SUMMARY_GET,
  TRAVERSAL_SUMMARY_SET,
  TRAVERSAL_CONCLUSION_GET,
  TRAVERSAL_SYMPTOM_REPORT_GET,
  TRAVERSAL_CONCLUSION_SET,
  HEALTH_RISKS_GET,
  HEALTH_RISKS_SET,
  HEALTH_AGE_GET,
  HEALTH_AGE_SET,
  HRA_WELLNESS_GET,
  HRA_WELLNESS_SET,
  HRA_CHECK_CONCLUSION,
  HRA_UNCHECK_CONCLUSION,
  CLIENT_PRODUCTS_GET,
  CLIENT_PRODUCTS_SET,
  LABELS_SET,
  LABELS_RESTORE_DEFAULT,
  WEB_API_NOT_OK,
  WEB_API_ERROR,
};

export const actionCreators = {
  populateModal,
  closeModal,
  toggleRadio,
  toggleCheckbox,
  updateText,
  setTraversalMinHeight,
  traversalStart,
  traversalStartSet,
  traversalContinue,
  traversalContinueSet,
  traversalNext,
  traversalNextSet,
  traversalPrevious,
  traversalPreviousSet,
  traversalSummaryGet,
  traversalSummarySet,
  traversalConclusionGet,
  traversalSymptomReportGet,
  traversalConclusionSet,
  healthRisksGet,
  healthRisksSet,
  healthAgeGet,
  healthAgeSet,
  hraWellnessGet,
  hraWellnessSet,
  checkConclusion,
  uncheckConclusion,
  clientProductsGet,
  clientProductsSet,
  labelsSet,
  labelsRestoreDefault,
  webApiNotOk,
  webApiError,
};
