"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _Actions = require("../Actions");

var _DateField = _interopRequireDefault(require("../Components/DateField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectedDateField = function ConnectedDateField(_ref) {
  var dispatch = _ref.dispatch,
      answer = _ref.answer,
      answerId = _ref.answerId,
      questionAnswerIds = _ref.questionAnswerIds;
  return _react.default.createElement(_DateField.default, {
    value: answer.controlValue || "",
    onChange: function onChange(e) {
      return dispatch((0, _Actions.updateText)(answerId, questionAnswerIds, e));
    }
  });
};

var _default = (0, _reactRedux.connect)()(ConnectedDateField);

exports.default = _default;