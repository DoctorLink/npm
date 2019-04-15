"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TraversalForm = _interopRequireDefault(require("./TraversalForm"));

var _Button = _interopRequireDefault(require("../Components/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents.default.div.withConfig({
  displayName: "Traversal__Container",
  componentId: "sc-1gc2mt-0"
})(["margin:0 -10px;"]);

var Buttons = _styledComponents.default.div.withConfig({
  displayName: "Traversal__Buttons",
  componentId: "sc-1gc2mt-1"
})(["margin:0 10px;"]);

var Traversal = function Traversal(_ref) {
  var traversal = _ref.traversal,
      next = _ref.next,
      previous = _ref.previous,
      showSummary = _ref.showSummary,
      showExplanation = _ref.showExplanation;
  return _react.default.createElement(Container, null, _react.default.createElement(_TraversalForm.default, {
    traversal: traversal,
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      next(traversal);
    },
    showExplanation: showExplanation
  }, _react.default.createElement(Buttons, null, _react.default.createElement(_Button.default, {
    type: "button",
    style: {
      marginRight: '10px'
    },
    onClick: function onClick() {
      return previous(traversal.traversalId);
    }
  }, "Previous"), _react.default.createElement(_Button.default, {
    type: "submit"
  }, "Next"), _react.default.createElement(_Button.default, {
    type: "button",
    style: {
      float: 'right'
    },
    onClick: function onClick() {
      return showSummary(traversal.traversalId);
    }
  }, "Summary"))));
};

var _default = Traversal;
exports.default = _default;