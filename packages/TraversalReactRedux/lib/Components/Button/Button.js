"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = _interopRequireDefault(require("../../Theme/base/index"));

var _button = _interopRequireDefault(require("../../Theme/components/button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = _styledComponents.default.button.withConfig({
  displayName: "Button",
  componentId: "dhfjbs-0"
})(["font-family:'Noto Sans',sans-serif;transition:all 150ms;background-color:", ";border:none;border-radius:", "px;color:white;padding:", ";text-align:center;text-decoration:none;display:inline-block;font-size:", "px;cursor:pointer;&:hover{background:", ";}"], function (props) {
  return props.theme.button.color;
}, function (props) {
  return props.theme.button.borderRadius;
}, function (props) {
  return props.theme.button.padding;
}, function (props) {
  return props.theme.button.fontSize;
}, function (props) {
  return props.theme.button.hoverColor;
});

Button.defaultProps = {
  theme: {
    button: (0, _button.default)(_index.default)
  }
};
var _default = Button;
exports.default = _default;