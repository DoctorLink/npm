"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _Actions = require("../Actions");

var _Checkbox = _interopRequireDefault(require("../Components/Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectedTraversalCheckbox = function ConnectedTraversalCheckbox(_ref) {
  var dispatch = _ref.dispatch,
      answer = _ref.answer,
      answerId = _ref.answerId,
      questionAnswerIds = _ref.questionAnswerIds;
  return _react.default.createElement(_Checkbox.default, {
    id: answerId,
    value: true,
    checked: answer.controlChecked,
    onChange: function onChange() {
      return dispatch((0, _Actions.toggleCheckbox)(answerId, questionAnswerIds));
    }
  });
};

var _default = (0, _reactRedux.connect)()(ConnectedTraversalCheckbox);

exports.default = _default;