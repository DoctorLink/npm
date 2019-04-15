"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuestionContainer = _styledComponents.default.div.withConfig({
  displayName: "Question__QuestionContainer",
  componentId: "sc-1c3h3rq-0"
})(["display:flex;"]);

var DisplayText = _styledComponents.default.div.withConfig({
  displayName: "Question__DisplayText",
  componentId: "sc-1c3h3rq-1"
})(["display:inline-block;padding:10px;font-family:'Noto Sans',sans-serif;"]);

var ErrorText = _styledComponents.default.div.withConfig({
  displayName: "Question__ErrorText",
  componentId: "sc-1c3h3rq-2"
})(["font-size:12px;padding:0 10px;font-family:'Noto Sans',sans-serif;color:red;"]);

var TraversalQuestion = function TraversalQuestion(_ref) {
  var displayText = _ref.displayText,
      error = _ref.error,
      children = _ref.children;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(QuestionContainer, null, _react.default.createElement(DisplayText, {
    dangerouslySetInnerHTML: {
      __html: displayText
    }
  }), children), error && _react.default.createElement(ErrorText, null, error.text));
};

var _default = TraversalQuestion;
exports.default = _default;