"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = require("redux-saga/effects");

var actions = _interopRequireWildcard(require("../../../Actions"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = function _default() {
  return (
    /*#__PURE__*/
    regeneratorRuntime.mark(function autoForward() {
      var traversalState, forward, answeredRadioQuestions;
      return regeneratorRuntime.wrap(function autoForward$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _effects.select)(function (state) {
                return state.traversal;
              });

            case 2:
              traversalState = _context.sent;
              forward = true;
              answeredRadioQuestions = [];
              Object.entries(traversalState.answers).forEach(function (answerId) {
                var answer = answerId[1];
                if (answer.controlChecked === true) answeredRadioQuestions.push("".concat(answer.nodeId, "_").concat(answer.questionId));
              });
              Object.keys(traversalState.questions).forEach(function (question) {
                if (!answeredRadioQuestions.includes(question)) forward = false;
              });

              if (!forward) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return (0, _effects.put)(actions.traversalNext(traversalState));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, autoForward);
    })
  );
};

exports.default = _default;