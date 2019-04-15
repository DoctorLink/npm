"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _Actions = require("../Actions");

var _Summary = _interopRequireDefault(require("../Components/Summary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Summary = function Summary(_ref) {
  var summary = _ref.summary,
      dispatch = _ref.dispatch;
  return _react.default.createElement(_Summary.default, {
    summary: summary,
    close: function close() {
      return dispatch((0, _Actions.traversalSummarySet)(null));
    },
    jumpBack: function jumpBack(traversalId, algoId, nodeId) {
      return dispatch((0, _Actions.traversalPrevious)(traversalId, algoId, nodeId));
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    summary: state.summary
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Summary);

exports.default = _default;