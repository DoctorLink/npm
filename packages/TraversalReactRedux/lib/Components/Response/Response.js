"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = _interopRequireDefault(require("../../Theme/base/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Response = _styledComponents.default.div.withConfig({
  displayName: "Response",
  componentId: "mhl0eb-0"
})(["margin-bottom:", "px;"], function (p) {
  return p.theme.spacing.responseMargin;
});

Response.defaultProps = {
  theme: _index.default
};
var _default = Response;
exports.default = _default;