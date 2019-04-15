"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = _interopRequireDefault(require("../../Theme/base/index"));

var _checkbox = _interopRequireDefault(require("../../Theme/components/checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var HiddenCheckbox = _styledComponents.default.input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "Checkbox__HiddenCheckbox",
  componentId: "dbenme-0"
})(["border:0;clip:rect(0 0 0 0);clippath:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]);

var Icon = _styledComponents.default.svg.withConfig({
  displayName: "Checkbox__Icon",
  componentId: "dbenme-1"
})(["fill:none;stroke:", ";stroke-width:2px;"], function (props) {
  return props.theme.checkbox.icon.color;
});

var StyledCheckbox = _styledComponents.default.div.withConfig({
  displayName: "Checkbox__StyledCheckbox",
  componentId: "dbenme-2"
})(["width:", "px;height:", "px;background:", ";border-radius:", "px;transition:all 150ms;", ":focus + &{box-shadow:0 0 0 3px ", ";}", "{visibility:", "}"], function (props) {
  return props.theme.checkbox.size;
}, function (props) {
  return props.theme.checkbox.size;
}, function (props) {
  return props.checked ? props.theme.checkbox.checked.color : props.theme.checkbox.unchecked.color;
}, function (props) {
  return props.theme.checkbox.borderRadius;
}, HiddenCheckbox, function (props) {
  return props.theme.checkbox.focus.color;
}, Icon, function (props) {
  return props.checked ? 'visible' : 'hidden';
});

var CheckboxContainer = _styledComponents.default.div.withConfig({
  displayName: "Checkbox__CheckboxContainer",
  componentId: "dbenme-3"
})(["display:inline-block;vertical-align:middle;padding:", "px;"], function (props) {
  return props.theme.checkbox.padding;
});

var Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["className", "checked"]);

  return _react.default.createElement(CheckboxContainer, {
    className: className,
    theme: props.theme
  }, _react.default.createElement(HiddenCheckbox, _extends({
    checked: checked
  }, props)), _react.default.createElement(StyledCheckbox, {
    checked: checked,
    theme: props.theme
  }, _react.default.createElement(Icon, {
    viewBox: "0 0 24 24",
    theme: props.theme
  }, _react.default.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))));
};

Checkbox.defaultProps = {
  theme: {
    checkbox: (0, _checkbox.default)(_index.default)
  }
};
var _default = Checkbox;
exports.default = _default;