export const POPULATE_MODAL = 'POPULATE_MODAL'
export const populateModal = content => ({ type: POPULATE_MODAL, content })

export const CLOSE_MODAL = 'CLOSE_MODAL'
export const closeModal = () => ({ type: CLOSE_MODAL })

export const TOGGLE_RADIO = 'TOGGLE_RADIO'
export const toggleRadio = (id, answerIds, checked = undefined) => ({ type: TOGGLE_RADIO, id, answerIds, checked })

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX'
export const toggleCheckbox = (id, answerIds) => ({ type: TOGGLE_CHECKBOX, id, answerIds })

export const UPDATE_TEXT = 'UPDATE_TEXT'
export const updateText = (id, answerIds, e) => ({ type: UPDATE_TEXT, id, answerIds, value: e.target.value })

export const REQUEST_TRAVERSAL = 'REQUEST_TRAVERSAL'
export const requestTraversal = () => ({ type: REQUEST_TRAVERSAL })

export const SET_TRAVERSAL = 'SET_TRAVERSAL'
export const setTraversal = traversal => ({ type: SET_TRAVERSAL, traversal, receivedAt: Date.now() })

export const SET_CHAT_MIN_HEIGHT = 'SET_CHAT_MIN_HEIGHT'
export const setChatMinHeight = minHeight => ({ type: SET_CHAT_MIN_HEIGHT, minHeight })

export const NEXT_TRAVERSAL_QUESTION = 'NEXT_TRAVERSAL_QUESTION'
export const nextTraversalQuestion = traversal => ({ type: NEXT_TRAVERSAL_QUESTION, traversal, receivedAt: Date.now() })

export const PREVIOUS_TRAVERSAL_QUESTION = 'PREVIOUS_TRAVERSAL_QUESTION'
export const previousTraversalQuestion = traversal => ({ type: PREVIOUS_TRAVERSAL_QUESTION, traversal, receivedAt: Date.now() })

export const TRAVERSAL_DIRECTION = 'TRAVERSAL_DIRECTION'
export const traversalDirection = previous => ({ type: TRAVERSAL_DIRECTION, previous })

export const TRAVERSAL_START = 'TRAVERSAL_START'
export const traversalStart = (algoId, release, lang, nodeId, injection, history) => ({ type: TRAVERSAL_START, algoId, release, lang, nodeId, injection, history })

export const TRAVERSAL_CONTINUE = 'TRAVERSAL_CONTINUE'
export const traversalContinue = traversalId => ({ type: TRAVERSAL_CONTINUE, traversalId })

export const TRAVERSAL_NEXT = 'TRAVERSAL_NEXT'
export const traversalNext = traversal => ({ type: TRAVERSAL_NEXT, traversal })

export const TRAVERSAL_AUTO = 'TRAVERSAL_AUTO'
export const traversalAuto = () => ({ type: TRAVERSAL_AUTO })

export const TRAVERSAL_PREVIOUS = 'TRAVERSAL_PREVIOUS'
export const traversalPrevious = (traversalId, algoId, nodeId, assetId) => ({ type: TRAVERSAL_PREVIOUS, traversalId, algoId, nodeId, assetId })

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