"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _Actions = require("../Actions");

var _NumberField = _interopRequireDefault(require("../Components/NumberField"));

var _Button = _interopRequireDefault(require("../Components/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Label = _styledComponents.default.label.withConfig({
  displayName: "Home__Label",
  componentId: "sc-17g5ry5-0"
})(["display:flex;align-items:center;margin-bottom:20px;"]);

var Text = _styledComponents.default.span.withConfig({
  displayName: "Home__Text",
  componentId: "sc-17g5ry5-1"
})(["font-family:'Noto Sans',sans-serif;width:75px;"]);

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.state = {
      algo: "",
      node: ""
    };
    return _this;
  }

  _createClass(Home, [{
    key: "handleChange",
    value: function handleChange(event, state) {
      var obj = {};
      obj[state] = event.target.value;
      this.setState(obj);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var nodeId = null;
      if (this.state.node) nodeId = this.state.node;
      this.props.dispatch((0, _Actions.traversalStart)(this.state.algo, nodeId, this.props.history));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        }
      }, _react.default.createElement(Label, null, _react.default.createElement(Text, null, "Algo ID:"), _react.default.createElement(_NumberField.default, {
        onChange: function onChange(e) {
          return _this2.handleChange(e, "algo");
        }
      })), _react.default.createElement(Label, null, _react.default.createElement(Text, null, "Node ID:"), _react.default.createElement(_NumberField.default, {
        onChange: function onChange(e) {
          return _this2.handleChange(e, "node");
        }
      })), _react.default.createElement(_Button.default, {
        type: "submit"
      }, "Begin"));
    }
  }]);

  return Home;
}(_react.default.Component);

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)()(Home));

exports.default = _default;