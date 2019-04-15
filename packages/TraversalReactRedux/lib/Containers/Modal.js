"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactPose = _interopRequireWildcard(require("react-pose"));

var _reactRedux = require("react-redux");

var _Actions = require("../Actions");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WrapPose = _reactPose.default.div({
  enter: {
    opacity: 1,
    transition: {
      default: {
        duration: 150
      }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      default: {
        duration: 150
      }
    }
  }
});

var Wrap = (0, _styledComponents.default)(WrapPose).withConfig({
  displayName: "Modal__Wrap",
  componentId: "gaudjj-0"
})(["top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.8);position:fixed;overflow-x:hidden;overflow-y:auto;z-index:1;-webkit-animation-iteration-count:2;animation-iteration-count:2;zoom:1;transform-style:preserve-3d;"]);

var Curtain = _styledComponents.default.div.withConfig({
  displayName: "Modal__Curtain",
  componentId: "gaudjj-1"
})(["box-sizing:border-box;text-align:center;position:absolute;width:100%;height:100%;left:0;top:0;padding:0 8px;white-space:nowrap;::before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-0.25em;}"]);

var Container = _styledComponents.default.div.withConfig({
  displayName: "Modal__Container",
  componentId: "gaudjj-2"
})(["white-space:normal;cursor:auto;width:100%;position:relative;display:inline-block;vertical-align:middle;margin:0 auto;text-align:left;"]);

var ContentPose = _reactPose.default.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 100,
    transition: {
      y: {
        type: 'spring',
        stiffness: 1000,
        damping: 15
      },
      default: {
        duration: 300
      }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 150
    }
  }
});

var Content = (0, _styledComponents.default)(ContentPose).withConfig({
  displayName: "Modal__Content",
  componentId: "gaudjj-3"
})(["box-sizing:border-box;background-color:#fff;border-radius:10px;padding:10px;text-align:left;position:relative;max-width:650px;margin:40px auto;font-family:'Noto Sans',sans-serif;@media screen and (min-width:400px){padding:20px 32px 32px;}"]);

var Header = _styledComponents.default.div.withConfig({
  displayName: "Modal__Header",
  componentId: "gaudjj-4"
})(["display:flex;align-items:flex-start;"]);

var Title = _styledComponents.default.h3.withConfig({
  displayName: "Modal__Title",
  componentId: "gaudjj-5"
})(["flex:1;margin:0 0 20px;"]);

var Icon = _styledComponents.default.svg.withConfig({
  displayName: "Modal__Icon",
  componentId: "gaudjj-6"
})(["fill:none;stroke:black;stroke-width:2px;stroke-linecap:round;stroke-linejoin:round;cursor:pointer;width:24px;"]);

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      return document.addEventListener('mousedown', _this.handleClickOutside);
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      return document.removeEventListener('mousedown', _this.handleClickOutside);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      if (_this.node && !_this.node.contains(event.target)) _this.props.closeModal();
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          explanation = _this$props.explanation,
          closeModal = _this$props.closeModal;
      return _react.default.createElement(_reactPose.PoseGroup, null, explanation && [_react.default.createElement(Wrap, {
        key: 'wrap'
      }, _react.default.createElement(Curtain, null, _react.default.createElement(Container, null, _react.default.createElement(Content, {
        ref: function ref(node) {
          _this2.node = node;
        }
      }, _react.default.createElement(Header, null, _react.default.createElement(Title, null, "Explanation"), _react.default.createElement(Icon, {
        viewBox: "0 0 24 24",
        onClick: closeModal
      }, _react.default.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
      }), _react.default.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
      }))), _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: explanation
        }
      })))))]);
    }
  }]);

  return Modal;
}(_react.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeModal: function closeModal() {
      return dispatch((0, _Actions.closeModal)());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    explanation: state.modal
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Modal);

exports.default = _default;