"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = _interopRequireDefault(require("../../Theme/base/index"));

var _radio = _interopRequireDefault(require("../../Theme/components/radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var HiddenRadio = _styledComponents.default.input.attrs({
  type: 'radio'
}).withConfig({
  displayName: "Radio__HiddenRadio",
  componentId: "sc-17omm2u-0"
})(["border:0;clip:rect(0 0 0 0);clippath:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]);

var Icon = _styledComponents.default.svg.withConfig({
  displayName: "Radio__Icon",
  componentId: "sc-17omm2u-1"
})(["fill:", ";stroke:none;stroke-width:2px;"], function (props) {
  return props.theme.radio.icon.color;
});

var StyledRadio = _styledComponents.default.div.withConfig({
  displayName: "Radio__StyledRadio",
  componentId: "sc-17omm2u-2"
})(["width:", "px;height:", "px;background:", ";border-radius:", "px;transition:all 150ms;", ":focus + &{box-shadow:0 0 0 3px ", ";}", "{visibility:", ";}"], function (props) {
  return props.theme.radio.size;
}, function (props) {
  return props.theme.radio.size;
}, function (props) {
  return props.checked ? props.theme.radio.checked.color : props.theme.radio.unchecked.color;
}, function (props) {
  return props.theme.radio.size / 2;
}, HiddenRadio, function (props) {
  return props.theme.radio.focus.color;
}, Icon, function (props) {
  return props.checked ? 'visible' : 'hidden';
});

var RadioContainer = _styledComponents.default.div.withConfig({
  displayName: "Radio__RadioContainer",
  componentId: "sc-17omm2u-3"
})(["display:inline-block;vertical-align:middle;padding:", "px;"], function (props) {
  return props.theme.radio.padding;
});

var Radio = function Radio(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["className", "checked"]);

  return _react.default.createElement(RadioContainer, {
    className: className,
    theme: props.theme
  }, _react.default.createElement(HiddenRadio, _extends({
    checked: checked
  }, props)), _react.default.createElement(StyledRadio, {
    checked: checked,
    theme: props.theme
  }, _react.default.createElement(Icon, {
    viewBox: "0 0 24 24",
    theme: props.theme
  }, _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }))));
};

Radio.defaultProps = {
  theme: {
    radio: (0, _radio.default)(_index.default)
  }
};
var _default = Radio;
exports.default = _default;