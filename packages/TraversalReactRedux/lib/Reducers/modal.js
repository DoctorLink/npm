"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actions = require("../actions");

var modal = function modal() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.POPULATE_MODAL:
      return action.content;

    case _actions.CLOSE_MODAL:
      return null;

    default:
      return state;
  }
};

var _default = modal;
exports.default = _default;