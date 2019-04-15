"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traversalConclusionSet = exports.TRAVERSAL_CONCLUSION_SET = exports.traversalSymptomReportGet = exports.TRAVERSAL_SYMPTOM_REPORT_GET = exports.traversalConclusionGet = exports.TRAVERSAL_CONCLUSION_GET = exports.traversalSummarySet = exports.TRAVERSAL_SUMMARY_SET = exports.traversalSummaryGet = exports.TRAVERSAL_SUMMARY_GET = exports.traversalPrevious = exports.TRAVERSAL_PREVIOUS = exports.traversalNext = exports.TRAVERSAL_NEXT = exports.traversalContinue = exports.TRAVERSAL_CONTINUE = exports.traversalStart = exports.TRAVERSAL_START = exports.traversalDirection = exports.TRAVERSAL_DIRECTION = exports.setTraversal = exports.SET_TRAVERSAL = exports.requestTraversal = exports.REQUEST_TRAVERSAL = exports.updateText = exports.UPDATE_TEXT = exports.toggleCheckbox = exports.TOGGLE_CHECKBOX = exports.toggleRadio = exports.TOGGLE_RADIO = exports.closeModal = exports.CLOSE_MODAL = exports.populateModal = exports.POPULATE_MODAL = void 0;
var POPULATE_MODAL = 'POPULATE_MODAL';
exports.POPULATE_MODAL = POPULATE_MODAL;

var populateModal = function populateModal(content) {
  return {
    type: POPULATE_MODAL,
    content: content
  };
};

exports.populateModal = populateModal;
var CLOSE_MODAL = 'CLOSE_MODAL';
exports.CLOSE_MODAL = CLOSE_MODAL;

var closeModal = function closeModal() {
  return {
    type: CLOSE_MODAL
  };
};

exports.closeModal = closeModal;
var TOGGLE_RADIO = 'TOGGLE_RADIO';
exports.TOGGLE_RADIO = TOGGLE_RADIO;

var toggleRadio = function toggleRadio(id, answerIds) {
  return {
    type: TOGGLE_RADIO,
    id: id,
    answerIds: answerIds
  };
};

exports.toggleRadio = toggleRadio;
var TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
exports.TOGGLE_CHECKBOX = TOGGLE_CHECKBOX;

var toggleCheckbox = function toggleCheckbox(id, answerIds) {
  return {
    type: TOGGLE_CHECKBOX,
    id: id,
    answerIds: answerIds
  };
};

exports.toggleCheckbox = toggleCheckbox;
var UPDATE_TEXT = 'UPDATE_TEXT';
exports.UPDATE_TEXT = UPDATE_TEXT;

var updateText = function updateText(id, answerIds, e) {
  return {
    type: UPDATE_TEXT,
    id: id,
    answerIds: answerIds,
    value: e.target.value
  };
};

exports.updateText = updateText;
var REQUEST_TRAVERSAL = 'REQUEST_TRAVERSAL';
exports.REQUEST_TRAVERSAL = REQUEST_TRAVERSAL;

var requestTraversal = function requestTraversal() {
  return {
    type: REQUEST_TRAVERSAL
  };
};

exports.requestTraversal = requestTraversal;
var SET_TRAVERSAL = 'SET_TRAVERSAL';
exports.SET_TRAVERSAL = SET_TRAVERSAL;

var setTraversal = function setTraversal(traversal) {
  return {
    type: SET_TRAVERSAL,
    traversal: traversal,
    receivedAt: Date.now()
  };
};

exports.setTraversal = setTraversal;
var TRAVERSAL_DIRECTION = 'TRAVERSAL_DIRECTION';
exports.TRAVERSAL_DIRECTION = TRAVERSAL_DIRECTION;

var traversalDirection = function traversalDirection(previous) {
  return {
    type: TRAVERSAL_DIRECTION,
    previous: previous
  };
};

exports.traversalDirection = traversalDirection;
var TRAVERSAL_START = 'TRAVERSAL_START';
exports.TRAVERSAL_START = TRAVERSAL_START;

var traversalStart = function traversalStart(algoId, nodeId, history) {
  return {
    type: TRAVERSAL_START,
    algoId: algoId,
    nodeId: nodeId,
    history: history
  };
};

exports.traversalStart = traversalStart;
var TRAVERSAL_CONTINUE = 'TRAVERSAL_CONTINUE';
exports.TRAVERSAL_CONTINUE = TRAVERSAL_CONTINUE;

var traversalContinue = function traversalContinue(traversalId) {
  return {
    type: TRAVERSAL_CONTINUE,
    traversalId: traversalId
  };
};

exports.traversalContinue = traversalContinue;
var TRAVERSAL_NEXT = 'TRAVERSAL_NEXT';
exports.TRAVERSAL_NEXT = TRAVERSAL_NEXT;

var traversalNext = function traversalNext(traversal) {
  return {
    type: TRAVERSAL_NEXT,
    traversal: traversal
  };
};

exports.traversalNext = traversalNext;
var TRAVERSAL_PREVIOUS = 'TRAVERSAL_PREVIOUS';
exports.TRAVERSAL_PREVIOUS = TRAVERSAL_PREVIOUS;

var traversalPrevious = function traversalPrevious(traversalId, algoId, nodeId) {
  return {
    type: TRAVERSAL_PREVIOUS,
    traversalId: traversalId,
    algoId: algoId,
    nodeId: nodeId
  };
};

exports.traversalPrevious = traversalPrevious;
var TRAVERSAL_SUMMARY_GET = 'TRAVERSAL_SUMMARY_GET';
exports.TRAVERSAL_SUMMARY_GET = TRAVERSAL_SUMMARY_GET;

var traversalSummaryGet = function traversalSummaryGet(traversalId) {
  return {
    type: TRAVERSAL_SUMMARY_GET,
    traversalId: traversalId
  };
};

exports.traversalSummaryGet = traversalSummaryGet;
var TRAVERSAL_SUMMARY_SET = 'TRAVERSAL_SUMMARY_SET';
exports.TRAVERSAL_SUMMARY_SET = TRAVERSAL_SUMMARY_SET;

var traversalSummarySet = function traversalSummarySet(summary) {
  return {
    type: TRAVERSAL_SUMMARY_SET,
    summary: summary,
    receivedAt: Date.now()
  };
};

exports.traversalSummarySet = traversalSummarySet;
var TRAVERSAL_CONCLUSION_GET = 'TRAVERSAL_CONCLUSION_GET';
exports.TRAVERSAL_CONCLUSION_GET = TRAVERSAL_CONCLUSION_GET;

var traversalConclusionGet = function traversalConclusionGet(traversalId) {
  return {
    type: TRAVERSAL_CONCLUSION_GET,
    traversalId: traversalId
  };
};

exports.traversalConclusionGet = traversalConclusionGet;
var TRAVERSAL_SYMPTOM_REPORT_GET = 'TRAVERSAL_SYMPTOM_REPORT_GET';
exports.TRAVERSAL_SYMPTOM_REPORT_GET = TRAVERSAL_SYMPTOM_REPORT_GET;

var traversalSymptomReportGet = function traversalSymptomReportGet(traversalId) {
  return {
    type: TRAVERSAL_SYMPTOM_REPORT_GET,
    traversalId: traversalId
  };
};

exports.traversalSymptomReportGet = traversalSymptomReportGet;
var TRAVERSAL_CONCLUSION_SET = 'TRAVERSAL_CONCLUSION_SET';
exports.TRAVERSAL_CONCLUSION_SET = TRAVERSAL_CONCLUSION_SET;

var traversalConclusionSet = function traversalConclusionSet(conclusion) {
  return {
    type: TRAVERSAL_CONCLUSION_SET,
    conclusion: conclusion,
    receivedAt: Date.now()
  };
};

exports.traversalConclusionSet = traversalConclusionSet;