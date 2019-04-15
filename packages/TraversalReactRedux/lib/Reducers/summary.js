"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actions = require("../actions");

var summary = function summary() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.TRAVERSAL_START:
    case _actions.TRAVERSAL_CONTINUE:
    case _actions.TRAVERSAL_PREVIOUS:
    case _actions.TRAVERSAL_NEXT:
      return null;

    case _actions.TRAVERSAL_SUMMARY_SET:
      return action.summary;

    default:
      return state;
  }
};

var _default = summary;
exports.default = _default;