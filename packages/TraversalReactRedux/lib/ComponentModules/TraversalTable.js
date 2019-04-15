"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TableQuestion = _interopRequireDefault(require("../Components/TableQuestion"));

var _TableHeaderRow = _interopRequireDefault(require("../Components/TableHeaderRow"));

var _TableHeaderCell = _interopRequireDefault(require("../Components/TableHeaderCell"));

var _TableQuestionRow = _interopRequireDefault(require("../Components/TableQuestionRow"));

var _TableAnswerCell = _interopRequireDefault(require("../Components/TableAnswerCell"));

var _InfoIcon = _interopRequireDefault(require("../Components/InfoIcon"));

var _ConnectedCheckbox = _interopRequireDefault(require("../Containers/ConnectedCheckbox"));

var _ConnectedRadio = _interopRequireDefault(require("../Containers/ConnectedRadio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var node = _ref.node,
      questions = _ref.questions,
      answers = _ref.answers,
      errors = _ref.errors,
      showExplanation = _ref.showExplanation;
  return _react.default.createElement(_TableQuestion.default, null, _react.default.createElement(_TableHeaderRow.default, null, questions[node.questions[0]].answers.map(function (answerId) {
    return _react.default.createElement(_TableHeaderCell.default, {
      key: answerId,
      text: answers[answerId].displayText,
      justifyContent: 'center'
    }, _react.default.createElement(_InfoIcon.default, {
      onClick: showExplanation,
      explanation: answers[answerId].explanation
    }));
  })), node.questions.map(function (q) {
    var question = questions[q];
    var error = errors[q];
    return _react.default.createElement(_TableQuestionRow.default, {
      key: q
    }, _react.default.createElement(_TableHeaderCell.default, {
      text: question.displayText,
      error: error
    }, _react.default.createElement(_InfoIcon.default, {
      onClick: showExplanation,
      explanation: question.explanation
    })), question.answers.map(function (answerId) {
      var answer = answers[answerId];
      return _react.default.createElement(_TableAnswerCell.default, {
        key: answerId,
        answerId: answerId
      }, answer.controlType === "Radio" && _react.default.createElement(_ConnectedRadio.default, {
        answer: answer,
        answerId: answerId,
        questionAnswerIds: question.answers
      }), answer.controlType === "Checkbox" && _react.default.createElement(_ConnectedCheckbox.default, {
        answer: answer,
        answerId: answerId,
        questionAnswerIds: question.answers
      }));
    }));
  }));
};

exports.default = _default;