"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireWildcard(require("react-pose"));

var _reactResponsive = _interopRequireDefault(require("react-responsive"));

var _Question = _interopRequireDefault(require("../Components/Question"));

var _InfoIcon = _interopRequireDefault(require("../Components/InfoIcon"));

var _TraversalResponse = _interopRequireDefault(require("./TraversalResponse"));

var _TraversalTable = _interopRequireDefault(require("./TraversalTable"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transition = {
  duration: 300,
  type: 'spring',
  stiffness: 150,
  damping: 100
};

var Collection = _reactPose.default.div({
  enter: {
    opacity: 1,
    x: '0',
    transition: transition
  },
  exit: {
    opacity: 0,
    x: function x(_ref) {
      var mirror = _ref.mirror;
      return mirror === true ? '100%' : '-100%';
    },
    transition: transition
  },
  preEnterPose: {
    opacity: 0,
    x: function x(_ref2) {
      var mirror = _ref2.mirror;
      return mirror === true ? '-100%' : '100%';
    },
    transition: transition
  }
});

var _default = function _default(_ref3) {
  var traversal = _ref3.traversal,
      _onSubmit = _ref3.onSubmit,
      children = _ref3.children,
      showExplanation = _ref3.showExplanation;
  var nodeIds = traversal.nodeIds,
      nodes = traversal.nodes,
      questions = traversal.questions,
      answers = traversal.answers,
      errors = traversal.errors,
      previous = traversal.previous;
  return _react.default.createElement("form", {
    onSubmit: function onSubmit(e) {
      return _onSubmit(e);
    }
  }, _react.default.createElement(_reactPose.PoseGroup, {
    preEnterPose: 'preEnterPose',
    animateOnMount: true
  }, nodeIds.map(function (nodeId) {
    var node = nodes[nodeId];
    return _react.default.createElement(Collection, {
      key: nodeId,
      mirror: previous
    }, (node.questions.length !== 1 || node.isTable) && _react.default.createElement(_Question.default, {
      displayText: node.displayText
    }, _react.default.createElement(_InfoIcon.default, {
      onClick: showExplanation,
      explanation: node.explanation
    })), _react.default.createElement(_reactResponsive.default, {
      minWidth: 700
    }, function (matches) {
      if (matches && node.isTable) {
        return _react.default.createElement(_TraversalTable.default, {
          node: node,
          questions: questions,
          answers: answers,
          errors: errors,
          showExplanation: showExplanation
        });
      } else {
        return node.questions.map(function (questionId) {
          return _react.default.createElement(_TraversalResponse.default, {
            key: questionId,
            question: questions[questionId],
            answers: answers,
            error: errors[questionId],
            showExplanation: showExplanation
          });
        });
      }
    }));
  })), children);
};

exports.default = _default;