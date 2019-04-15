"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = _interopRequireDefault(require("../../Theme/base/index"));

var _label = _interopRequireDefault(require("../../Theme/components/label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledLabel = _styledComponents.default.label.withConfig({
  displayName: "Label__StyledLabel",
  componentId: "sc-17h2rrx-0"
})(["display:flex;cursor:pointer;"]);

var DisplayText = _styledComponents.default.div.withConfig({
  displayName: "Label__DisplayText",
  componentId: "sc-17h2rrx-1"
})(["font-family:", ";padding:", "px;padding-left:0;display:inline-block;"], function (p) {
  return p.theme.label.fontFamily;
}, function (p) {
  return p.theme.label.padding;
});

var Label = function Label(_ref) {
  var answer = _ref.answer,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["answer", "children"]);

  return _react.default.createElement(StyledLabel, props, children, _react.default.createElement(DisplayText, {
    theme: props.theme,
    dangerouslySetInnerHTML: {
      __html: answer.displayText
    }
  }));
};

Label.defaultProps = {
  theme: {
    label: (0, _label.default)(_index.default)
  }
};
var _default = Label;
exports.default = _default;