"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Response = _interopRequireDefault(require("../Components/Response"));

var _Question = _interopRequireDefault(require("../Components/Question"));

var _Section = _interopRequireDefault(require("../Components/Section"));

var _Answer = _interopRequireDefault(require("../Components/Answer"));

var _Label = _interopRequireDefault(require("../Components/Label"));

var _InfoIcon = _interopRequireDefault(require("../Components/InfoIcon"));

var _ConnectedCheckbox = _interopRequireDefault(require("../Containers/ConnectedCheckbox"));

var _ConnectedRadio = _interopRequireDefault(require("../Containers/ConnectedRadio"));

var _ConnectedTextField = _interopRequireDefault(require("../Containers/ConnectedTextField"));

var _ConnectedNumberField = _interopRequireDefault(require("../Containers/ConnectedNumberField"));

var _ConnectedDateField = _interopRequireDefault(require("../Containers/ConnectedDateField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var question = _ref.question,
      answers = _ref.answers,
      error = _ref.error,
      showExplanation = _ref.showExplanation;
  var display = question.data.display ? question.data.display : [{
    header: null,
    answers: question.answers.map(function (x) {
      return Number(x.split("_")[2]);
    })
  }];
  return _react.default.createElement(_Response.default, null, _react.default.createElement(_Question.default, {
    displayText: question.displayText,
    error: error
  }, _react.default.createElement(_InfoIcon.default, {
    onClick: showExplanation,
    explanation: question.explanation
  })), display.map(function (section, i) {
    var sectionAnswerKeys = question.answers.filter(function (x) {
      return section.answers.includes(Number(x.split("_")[2]));
    });
    return _react.default.createElement(_react.default.Fragment, {
      key: i
    }, _react.default.createElement(_Section.default, {
      text: section.header
    }), sectionAnswerKeys.map(function (answerId) {
      var answer = answers[answerId];
      return _react.default.createElement(_Answer.default, {
        key: answerId
      }, _react.default.createElement(_Label.default, {
        answer: answer
      }, answer.controlType === "Radio" && _react.default.createElement(_ConnectedRadio.default, {
        answer: answer,
        answerId: answerId,
        questionAnswerIds: question.answers
      }), answer.controlType === "Checkbox" && _react.default.createElement(_ConnectedCheckbox.default, {
        answer: answer,
        answerId: answerId,
        questionAnswerIds: question.answers
      }), answer.controlType === "Text" && _react.default.createElement(_ConnectedTextField.default, {
        answer: answer,
        answerId: answerId,
        questionAnswerIds: question.answers
      }), answer.controlType === "Number" && _react.default.createElement(_ConnectedNumberField.default, {
        answer: answer,
        answerId: answerId,
        questionAnswerIds: question.answers
      }), answer.controlType === "Date" && _react.default.createElement(_ConnectedDateField.default, {
        answer: answer,
        answerId: answerId,
        questionAnswerIds: question.answers
      })), _react.default.createElement(_InfoIcon.default, {
        onClick: showExplanation,
        explanation: answer.explanation
      }));
    }));
  }));
};

exports.default = _default;