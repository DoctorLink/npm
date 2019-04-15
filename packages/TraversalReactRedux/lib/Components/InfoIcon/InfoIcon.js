"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = _interopRequireDefault(require("../../Theme/base/index"));

var _infoicon = _interopRequireDefault(require("../../Theme/components/infoicon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InfoButton = _styledComponents.default.div.withConfig({
  displayName: "InfoIcon__InfoButton",
  componentId: "sc-71ssqd-0"
})(["display:inline-block;width:25px;height:25px;padding:10px 0;cursor:pointer;flex-basis:25px;flex-grow:0;flex-shrink:0;vertical-align:middle;margin-top:", ";"], function (props) {
  return props.inline ? '-8px' : '';
});

var Icon = _styledComponents.default.svg.withConfig({
  displayName: "InfoIcon__Icon",
  componentId: "sc-71ssqd-1"
})(["transition:all 150ms;fill:none;stroke:", ";stroke-width:2px;stroke-linecap:round;stroke-linejoin:round;", ":hover &{stroke:", ";}"], function (p) {
  return p.theme.infoIcon.color;
}, InfoButton, function (p) {
  return p.theme.infoIcon.hoverColor;
});

var InfoIcon = function InfoIcon(_ref) {
  var _onClick = _ref.onClick,
      explanation = _ref.explanation,
      inline = _ref.inline,
      props = _objectWithoutProperties(_ref, ["onClick", "explanation", "inline"]);

  return explanation && explanation !== "" && _react.default.createElement(InfoButton, {
    inline: inline,
    theme: props.theme,
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick(explanation);
    }
  }, _react.default.createElement(Icon, {
    theme: props.theme,
    viewBox: "0 0 24 24"
  }, _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), _react.default.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), _react.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "8"
  })));
};

InfoIcon.defaultProps = {
  theme: {
    infoIcon: (0, _infoicon.default)(_index.default)
  }
};
var _default = InfoIcon;
exports.default = _default;