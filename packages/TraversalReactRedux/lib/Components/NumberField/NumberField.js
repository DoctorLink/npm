"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = _interopRequireDefault(require("../../Theme/base/index"));

var _numberfield = _interopRequireDefault(require("../../Theme/components/numberfield"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledInput = _styledComponents.default.input.attrs({
  type: 'number'
}).withConfig({
  displayName: "NumberField__StyledInput",
  componentId: "sc-1qejknk-0"
})(["width:", "px;height:", "px;font-family:", ";font-size:", "px;text-align:", ";margin:0 ", "px;border:0;border-bottom:1px solid black;transition:all 150ms;&:focus{outline:0;border-color:", ";border-bottom-width:2px;}"], function (p) {
  return p.theme.numberField.width;
}, function (p) {
  return p.theme.numberField.height;
}, function (p) {
  return p.theme.numberField.fontFamily;
}, function (p) {
  return p.theme.numberField.fontSize;
}, function (p) {
  return p.theme.numberField.textAlign;
}, function (p) {
  return p.theme.numberField.spacing;
}, function (p) {
  return p.theme.numberField.hoverColor;
});

var NumberField = function NumberField(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["className", "checked"]);

  return _react.default.createElement(StyledInput, _extends({
    className: className
  }, props));
};

NumberField.defaultProps = {
  theme: {
    numberField: (0, _numberfield.default)(_index.default)
  }
};
var _default = NumberField;
exports.default = _default;