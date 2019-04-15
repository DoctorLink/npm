"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _traversal = _interopRequireDefault(require("./traversal"));

var _summary = _interopRequireDefault(require("./summary"));

var _conclusion = _interopRequireDefault(require("./conclusion"));

var _modal = _interopRequireDefault(require("./modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  traversal: _traversal.default,
  summary: _summary.default,
  conclusion: _conclusion.default,
  modal: _modal.default
});

exports.default = _default;