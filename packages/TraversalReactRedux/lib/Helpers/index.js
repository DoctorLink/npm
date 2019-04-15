"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traversalResponse = exports.normalizeTraversal = void 0;

var _normalizr = require("normalizr");

var normalizeTraversal = function normalizeTraversal(json) {
  var answer = new _normalizr.schema.Entity('answers', {}, {
    idAttribute: function idAttribute(value) {
      return "".concat(value.nodeId, "_").concat(value.questionId, "_").concat(value.answerId);
    }
  });
  var question = new _normalizr.schema.Entity('questions', {
    answers: [answer]
  }, {
    idAttribute: function idAttribute(value) {
      return "".concat(value.nodeId, "_").concat(value.questionId);
    }
  });
  var error = new _normalizr.schema.Entity('errors', {}, {
    idAttribute: function idAttribute(value, parent) {
      return "".concat(parent.nodeId, "_").concat(value.questionId);
    }
  });
  var node = new _normalizr.schema.Entity('nodes', {
    questions: [question],
    errors: [error]
  }, {
    idAttribute: function idAttribute(value) {
      return value.nodeId;
    }
  });
  var traversal = {
    nodes: [node]
  };
  var normalizedData = (0, _normalizr.normalize)(json.data, traversal);
  normalizedData.entities.traversalId = normalizedData.result.traversalId;
  normalizedData.entities.nodeIds = normalizedData.result.nodes;
  normalizedData.entities.algoId = normalizedData.result.algoId;
  normalizedData.entities.assessmentType = json.data.assessmentType;
  if (!normalizedData.entities.errors) normalizedData.entities.errors = {};
  return normalizedData.entities;
};

exports.normalizeTraversal = normalizeTraversal;

var traversalResponse = function traversalResponse(traversal) {
  return {
    traversalId: traversal.traversalId,
    responses: !traversal.answers ? null : Object.keys(traversal.answers).map(function (answerId) {
      var a = traversal.answers[answerId];
      if ((!a.controlValue || a.controlValue === "") && !a.controlChecked) return undefined;
      return {
        nodeId: a.nodeId,
        questionId: a.questionId,
        answerId: a.answerId,
        value: a.controlValue
      };
    }).filter(function (a) {
      return a;
    })
  };
};

exports.traversalResponse = traversalResponse;