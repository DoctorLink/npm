"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(baseTheme) {
  return {
    size: 20,
    padding: baseTheme.spacing.padding,
    checked: {
      color: baseTheme.colors.brand100
    },
    unchecked: {
      color: baseTheme.colors.brand50
    },
    icon: {
      color: baseTheme.colors.brand50
    },
    focus: {
      color: baseTheme.colors.lightBlue100
    }
  };
};

exports.default = _default;