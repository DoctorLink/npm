export const POPULATE_MODAL = 'POPULATE_MODAL'
export const populateModal = (content, title) => ({ type: POPULATE_MODAL, content, title })

export const CLOSE_MODAL = 'CLOSE_MODAL'
export const closeModal = () => ({ type: CLOSE_MODAL })

export const TOGGLE_RADIO = 'TOGGLE_RADIO'
export const toggleRadio = (id, answerIds, checked = undefined) => ({ type: TOGGLE_RADIO, id, answerIds, checked })

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX'
export const toggleCheckbox = (id, answerIds) => ({ type: TOGGLE_CHECKBOX, id, answerIds })

export const UPDATE_TEXT = 'UPDATE_TEXT'
export const updateText = (id, answerIds, value) => ({ type: UPDATE_TEXT, id, answerIds, value })

export const SET_CHAT_MIN_HEIGHT = 'SET_CHAT_MIN_HEIGHT'
export const setChatMinHeight = minHeight => ({ type: SET_CHAT_MIN_HEIGHT, minHeight })

export const TRAVERSAL_START = 'TRAVERSAL_START'
export const traversalStart = (algoId, release, lang, nodeId, injection, culture) => ({ type: TRAVERSAL_START, algoId, release, lang, nodeId, injection, culture })

export const TRAVERSAL_START_SET = 'TRAVERSAL_START_SET'
export const traversalStartSet = traversal => ({ type: TRAVERSAL_START_SET, traversal, receivedAt: Date.now() })

export const TRAVERSAL_CONTINUE = 'TRAVERSAL_CONTINUE'
export const traversalContinue = traversalId => ({ type: TRAVERSAL_CONTINUE, traversalId })

export const TRAVERSAL_CONTINUE_SET = 'TRAVERSAL_CONTINUE_SET'
export const traversalContinueSet = traversal => ({ type: TRAVERSAL_CONTINUE_SET, traversal, receivedAt: Date.now() })

export const TRAVERSAL_NEXT = 'TRAVERSAL_NEXT'
export const traversalNext = traversal => ({ type: TRAVERSAL_NEXT, traversal  })

export const TRAVERSAL_NEXT_SET = 'TRAVERSAL_NEXT_SET'
export const traversalNextSet = traversal => ({ type: TRAVERSAL_NEXT_SET, traversal, receivedAt: Date.now() })

export const TRAVERSAL_PREVIOUS = 'TRAVERSAL_PREVIOUS'
export const traversalPrevious = (traversalId, algoId, nodeId, assetId) => ({ type: TRAVERSAL_PREVIOUS, traversalId, algoId, nodeId, assetId })

export const TRAVERSAL_PREVIOUS_SET = 'TRAVERSAL_PREVIOUS_SET'
export const traversalPreviousSet = traversal => ({ type: TRAVERSAL_PREVIOUS_SET, traversal, receivedAt: Date.now() })

export const TRAVERSAL_AUTO = 'TRAVERSAL_AUTO'
export const traversalAuto = () => ({ type: TRAVERSAL_AUTO })

export const TRAVERSAL_SUMMARY_GET = 'TRAVERSAL_SUMMARY_GET'
export const traversalSummaryGet = traversalId => ({ type: TRAVERSAL_SUMMARY_GET, traversalId })

export const TRAVERSAL_SUMMARY_SET = 'TRAVERSAL_SUMMARY_SET'
export const traversalSummarySet = summary => ({ type: TRAVERSAL_SUMMARY_SET, summary, receivedAt: Date.now() })

export const TRAVERSAL_CONCLUSION_GET = 'TRAVERSAL_CONCLUSION_GET'
export const traversalConclusionGet = traversalId => ({ type: TRAVERSAL_CONCLUSION_GET, traversalId })

export const TRAVERSAL_SYMPTOM_REPORT_GET = 'TRAVERSAL_SYMPTOM_REPORT_GET'
export const traversalSymptomReportGet = traversalId => ({ type: TRAVERSAL_SYMPTOM_REPORT_GET, traversalId })

export const TRAVERSAL_CONCLUSION_SET = 'TRAVERSAL_CONCLUSION_SET'
export const traversalConclusionSet = conclusion => ({ type: TRAVERSAL_CONCLUSION_SET, conclusion, receivedAt: Date.now() })

export const HEALTH_RISKS_GET = 'HEALTH_RISKS_GET'
export const healthRisksGet = (traversalId, ages, conclusions) => ({ type: HEALTH_RISKS_GET, traversalId, ages, conclusions })

export const HEALTH_RISKS_SET = 'HEALTH_RISKS_SET'
export const healthRisksSet = healthRisks => ({ type: HEALTH_RISKS_SET, healthRisks })

export const HEALTH_AGE_GET = 'HEALTH_AGE_GET'
export const healthAgeGet = (traversalId, conclusions) => ({ type: HEALTH_AGE_GET, traversalId, conclusions })

export const HEALTH_AGE_SET = 'HEALTH_AGE_SET'
export const healthAgeSet = healthAge => ({ type: HEALTH_AGE_SET, healthAge })

export const HRA_WELLNESS_GET = 'HRA_WELLNESS_GET'
export const hraWellnessGet = (traversalId, conclusions) => ({ type: HRA_WELLNESS_GET, traversalId, conclusions })

export const HRA_WELLNESS_SET = 'HRA_WELLNESS_SET'
export const hraWellnessSet = wellness => ({ type: HRA_WELLNESS_SET, wellness })

export const HRA_CHECK_CONCLUSION = 'HRA_CHECK_CONCLUSION'
export const checkConclusion = id => ({ type: HRA_CHECK_CONCLUSION, id });

export const HRA_UNCHECK_CONCLUSION = 'HRA_UNCHECK_CONCLUSION'
export const uncheckConclusion = id => ({ type: HRA_UNCHECK_CONCLUSION, id });

export const CLIENT_PRODUCTS_GET = 'CLIENT_PRODUCTS_GET'
export const clientProductsGet = () => ({ type: CLIENT_PRODUCTS_GET });

export const CLIENT_PRODUCTS_SET = 'CLIENT_PRODUCTS_SET'
export const clientProductsSet = products => ({ type: CLIENT_PRODUCTS_SET, products });

export const LABELS_SET = 'LABELS_SET'
export const labelsSet = labels => ({ type: LABELS_SET, labels })

export const LABELS_RESTORE_DEFAULT = 'LABELS_RESTORE_DEFAULT'
export const labelsRestoreDefault = () => ({ type: LABELS_RESTORE_DEFAULT })

export const WEB_API_NOT_OK = 'WEB_API_NOT_OK'
export const webApiNotOk = (apiCall, response) => ({ type: WEB_API_NOT_OK, apiCall, response })

export const WEB_API_ERROR = 'WEB_API_ERROR'
export const webApiError = (apiCall, error) => ({ type: WEB_API_ERROR, apiCall, error })