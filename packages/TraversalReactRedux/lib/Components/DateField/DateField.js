"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = _interopRequireDefault(require("../../Theme/base/index"));

var _datefield = _interopRequireDefault(require("../../Theme/components/datefield"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledInput = _styledComponents.default.input.attrs({
  type: 'date'
}).withConfig({
  displayName: "DateField__StyledInput",
  componentId: "sc-1g2e4tb-0"
})(["width:", "px;height:", "px;font-family:", ";font-size:", "px;text-align:", ";margin:0 ", "px;border:0;border-bottom:1px solid black;&:focus{outline:0;border-color:", ";}"], function (p) {
  return p.theme.dateField.width;
}, function (p) {
  return p.theme.dateField.height;
}, function (p) {
  return p.theme.dateField.fontFamily;
}, function (p) {
  return p.theme.dateField.fontSize;
}, function (p) {
  return p.theme.dateField.textAlign;
}, function (p) {
  return p.theme.dateField.spacing;
}, function (p) {
  return p.theme.dateField.hoverColor;
});

var DateField = function DateField(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["className", "checked"]);

  return _react.default.createElement(StyledInput, _extends({
    className: className
  }, props));
};

DateField.defaultProps = {
  theme: {
    dateField: (0, _datefield.default)(_index.default)
  }
};
var _default = DateField;
exports.default = _default;