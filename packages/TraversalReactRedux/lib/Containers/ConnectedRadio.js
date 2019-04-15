"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _Actions = require("../Actions");

var _Radio = _interopRequireDefault(require("../Components/Radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectedTraversalRadio = function ConnectedTraversalRadio(_ref) {
  var dispatch = _ref.dispatch,
      answer = _ref.answer,
      answerId = _ref.answerId,
      questionAnswerIds = _ref.questionAnswerIds;
  return _react.default.createElement(_Radio.default, {
    id: answerId,
    value: true,
    checked: answer.controlChecked,
    onChange: function onChange() {
      return dispatch((0, _Actions.toggleRadio)(answerId, questionAnswerIds));
    }
  });
};

ConnectedTraversalRadio.defaultProps = _Radio.default.defaultProps;

var _default = (0, _reactRedux.connect)()(ConnectedTraversalRadio);

exports.default = _default;