"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TD = _styledComponents.default.td.withConfig({
  displayName: "TableAnswerCell__TD",
  componentId: "hmhs82-0"
})(["position:relative;text-align:center;"]);

var Label = _styledComponents.default.label.withConfig({
  displayName: "TableAnswerCell__Label",
  componentId: "hmhs82-1"
})(["position:absolute;top:0;bottom:0;left:0;right:0;cursor:pointer;"]);

var _default = function _default(_ref) {
  var answerId = _ref.answerId,
      children = _ref.children;
  return _react.default.createElement(TD, null, children, _react.default.createElement(Label, {
    htmlFor: answerId
  }));
};

exports.default = _default;