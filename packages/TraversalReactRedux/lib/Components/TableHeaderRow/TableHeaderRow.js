"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styled from 'styled-components'
var _default = function _default(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tr", null, _react.default.createElement("th", null), children);
};

exports.default = _default;