"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = _styledComponents.default.div.withConfig({
  displayName: "Section",
  componentId: "je6knn-0"
})(["font-family:'Noto Sans',sans-serif;font-weight:bold;padding:10px;"]);

var _default = function _default(_ref) {
  var text = _ref.text;
  return text && _react.default.createElement(Section, null, text);
};

exports.default = _default;