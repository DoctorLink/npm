"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(baseTheme) {
  return {
    borderRadius: 0,
    padding: '15px 32px',
    fontFamily: baseTheme.typography.fontFamily,
    fontSize: baseTheme.typography.button.size,
    color: baseTheme.colors.brand100,
    hoverColor: baseTheme.colors.brand200
  };
};

exports.default = _default;