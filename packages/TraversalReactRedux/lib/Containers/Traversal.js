"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _Actions = require("../Actions");

var _Traversal = _interopRequireDefault(require("../Components/Modules/Traversal"));

var _SymptomReport = _interopRequireDefault(require("../Components/SymptomReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Traversal = function Traversal(_ref) {
  var traversal = _ref.traversal,
      conclusion = _ref.conclusion,
      match = _ref.match,
      dispatch = _ref.dispatch,
      history = _ref.history;
  var id = match.params['id'];

  if (!traversal || traversal.traversalId !== id) {
    dispatch((0, _Actions.traversalContinue)(id));
    return null;
  }

  if (traversal.nodeIds.length === 0) {
    if (traversal.assessmentType === 1) {
      if (!conclusion || conclusion.traversalId !== id || !conclusion.symptomReport) {
        dispatch((0, _Actions.traversalSymptomReportGet)(id));
        return null;
      }

      return _react.default.createElement(_SymptomReport.default, {
        conclusion: conclusion,
        showExplanation: function showExplanation(explanation) {
          return dispatch((0, _Actions.populateModal)(explanation));
        }
      });
    }

    if (!conclusion || conclusion.traversalId !== id) {
      dispatch((0, _Actions.traversalConclusionGet)(id));
      return null;
    }

    return conclusion.conclusions.filter(function (c) {
      return !c.silent;
    }).map(function (conc) {
      return _react.default.createElement("div", {
        key: conc.assetId
      }, conc.assetId, ": ", conc.displayText);
    });
  }

  return _react.default.createElement(_Traversal.default, {
    traversal: traversal,
    next: function next(traversal) {
      return dispatch((0, _Actions.traversalNext)(traversal));
    },
    previous: function previous(traversalId) {
      return dispatch((0, _Actions.traversalPrevious)(traversalId));
    },
    showSummary: function showSummary(traversalId) {
      return dispatch((0, _Actions.traversalSummaryGet)(traversalId));
    },
    showExplanation: function showExplanation(explanation) {
      return dispatch((0, _Actions.populateModal)(explanation));
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    traversal: state.traversal,
    conclusion: state.conclusion
  };
};

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Traversal));

exports.default = _default;