"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = _styledComponents.default.table.attrs({
  cellSpacing: 0,
  cellPadding: 0
}).withConfig({
  displayName: "TableQuestion__Table",
  componentId: "aadwoh-0"
})(["width:100%;margin-bottom:20px;"]);

var _default = function _default(_ref) {
  var children = _ref.children;
  return _react.default.createElement(Table, null, _react.default.createElement("tbody", null, children));
};

exports.default = _default;