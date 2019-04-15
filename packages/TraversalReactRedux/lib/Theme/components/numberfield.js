"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(baseTheme) {
  return {
    width: baseTheme.spacing.inputField.width,
    height: baseTheme.spacing.inputField.height,
    fontFamily: baseTheme.typography.fontFamily,
    fontSize: baseTheme.typography.inputField.size,
    textAlign: baseTheme.typography.inputField.textAlign,
    spacing: baseTheme.spacing.padding,
    hoverColor: baseTheme.colors.brand100
  };
};

exports.default = _default;