"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents.default.div.withConfig({
  displayName: "TableHeaderCell__Container",
  componentId: "sc-1o090pr-0"
})(["display:flex;justify-content:", ";"], function (props) {
  return props.justifyContent || 'flex-start';
});

var DisplayText = _styledComponents.default.div.withConfig({
  displayName: "TableHeaderCell__DisplayText",
  componentId: "sc-1o090pr-1"
})(["display:inline-block;padding:10px;font-family:'Noto Sans',sans-serif;font-weight:normal;text-align:left;"]);

var ErrorText = _styledComponents.default.div.withConfig({
  displayName: "TableHeaderCell__ErrorText",
  componentId: "sc-1o090pr-2"
})(["font-size:12px;padding:0 10px 10px;font-family:'Noto Sans',sans-serif;color:red;text-align:left;"]);

var _default = function _default(_ref) {
  var text = _ref.text,
      error = _ref.error,
      children = _ref.children,
      justifyContent = _ref.justifyContent;
  return _react.default.createElement("th", null, _react.default.createElement(Container, {
    justifyContent: justifyContent
  }, _react.default.createElement(DisplayText, {
    dangerouslySetInnerHTML: {
      __html: text
    }
  }), children), error && _react.default.createElement(ErrorText, null, error.text));
};

exports.default = _default;