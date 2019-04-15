"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actions = require("../actions");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var answers = function answers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.TOGGLE_RADIO:
      action.answerIds.forEach(function (answerId) {
        if (answerId === action.id) state[answerId] = _objectSpread({}, state[answerId], {
          controlChecked: !state[answerId].controlChecked
        });else state[answerId] = _objectSpread({}, state[answerId], {
          controlChecked: false,
          controlValue: null
        });
      });
      return state;

    case _actions.TOGGLE_CHECKBOX:
      action.answerIds.forEach(function (answerId) {
        if (answerId === action.id) state[answerId] = _objectSpread({}, state[answerId], {
          controlChecked: !state[answerId].controlChecked
        });else if (state[answerId].controlType !== "Checkbox") state[answerId] = _objectSpread({}, state[answerId], {
          controlChecked: false,
          controlValue: null
        });
      });
      return state;

    case _actions.UPDATE_TEXT:
      action.answerIds.forEach(function (answerId) {
        if (answerId === action.id) state[answerId] = _objectSpread({}, state[answerId], {
          controlChecked: action.value && action.Value !== "",
          controlValue: action.value
        });else if (state[answerId].controlType !== "Text") state[answerId] = _objectSpread({}, state[answerId], {
          controlChecked: false,
          controlValue: null
        });
      });
      return state;

    default:
      return state;
  }
};

var traversal = function traversal() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.TOGGLE_RADIO:
    case _actions.TOGGLE_CHECKBOX:
    case _actions.UPDATE_TEXT:
      return _objectSpread({}, state, {
        answers: answers(state.answers, action)
      });

    case _actions.TRAVERSAL_DIRECTION:
      if (state === null) return state;
      return _objectSpread({}, state, {
        previous: action.previous
      });

    case _actions.SET_TRAVERSAL:
      return _objectSpread({}, action.traversal, {
        previous: state == null ? false : state.previous,
        answers: answers(action.traversal.answers, action)
      });

    default:
      return state;
  }
};

var _default = traversal;
exports.default = _default;