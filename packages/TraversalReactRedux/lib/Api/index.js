"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var fetchOptions = function fetchOptions(body) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
}; ///POST


var fetchTraversalStart = function fetchTraversalStart(api) {
  return function (algoId, nodeId) {
    var qs = nodeId ? "?nodeId=".concat(nodeId) : "";
    return fetch("".concat(api, "/Traversal/StartAsync/").concat(algoId).concat(qs), fetchOptions(null)).then(function (response) {
      return response.json();
    });
  };
};

var fetchTraversalNext = function fetchTraversalNext(api) {
  return function (traversalResponse) {
    return fetch("".concat(api, "/Traversal/NextAsync"), fetchOptions(traversalResponse)).then(function (response) {
      return response.json();
    });
  };
};

var fetchTraversalPrevious = function fetchTraversalPrevious(api) {
  return function (traversalId, algoId, nodeId) {
    var qs = algoId && nodeId ? "?algoId=".concat(algoId, "&nodeId=").concat(nodeId) : "";
    return fetch("".concat(api, "/Traversal/PreviousAsync/").concat(traversalId).concat(qs), fetchOptions(null)).then(function (response) {
      return response.json();
    });
  };
}; ///GET


var fetchTraversalContinue = function fetchTraversalContinue(api) {
  return function (traversalId) {
    return fetch("".concat(api, "/Traversal/ContinueAsync/").concat(traversalId)).then(function (response) {
      return response.json();
    });
  };
};

var fetchTraversalSummary = function fetchTraversalSummary(api) {
  return function (traversalId) {
    return fetch("".concat(api, "/Traversal/SummaryAsync/").concat(traversalId)).then(function (response) {
      return response.json();
    });
  };
};

var fetchTraversalConclusion = function fetchTraversalConclusion(api) {
  return function (traversalId) {
    return fetch("".concat(api, "/Traversal/ConclusionAsync/").concat(traversalId)).then(function (response) {
      return response.json();
    });
  };
};

var fetchTraversalSymptomReport = function fetchTraversalSymptomReport(api) {
  return function (traversalId) {
    return fetch("".concat(api, "/Traversal/SymptomReportAsync/").concat(traversalId)).then(function (response) {
      return response.json();
    });
  };
};

var _default = function _default(apiUrl) {
  fetchTraversalStart(apiUrl), fetchTraversalNext(apiUrl), fetchTraversalPrevious(apiUrl), fetchTraversalContinue(apiUrl), fetchTraversalSummary(apiUrl), fetchTraversalConclusion(apiUrl), fetchTraversalSymptomReport(apiUrl);
};

exports.default = _default;