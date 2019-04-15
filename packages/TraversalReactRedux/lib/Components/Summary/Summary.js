"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactPose = _interopRequireWildcard(require("react-pose"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    body {\n        overflow: hidden;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function delayUnmounting(Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.state = {
          shouldRender: _this.props.isMounted
        };
        return _this;
      }

      _createClass(_class, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var _this2 = this;

          if (prevProps.isMounted && !this.props.isMounted) {
            setTimeout(function () {
              return _this2.setState({
                shouldRender: false
              });
            }, this.props.delayTime);
          } else if (!prevProps.isMounted && this.props.isMounted) {
            this.setState({
              shouldRender: true
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          return this.state.shouldRender ? _react.default.createElement(Component, this.props) : null;
        }
      }]);

      return _class;
    }(_react.default.Component)
  );
}

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
var BodyOverflowHidden = delayUnmounting(GlobalStyle);

var PosedSC = _reactPose.default.div({
  enter: {
    x: '0%',
    staggerChildren: 10
  },
  exit: {
    x: '100%'
  }
});

var SummaryContainer = (0, _styledComponents.default)(PosedSC).withConfig({
  displayName: "Summary__SummaryContainer",
  componentId: "sc-6wecl6-0"
})(["font-family:'Noto Sans',sans-serif;padding:10px;background:white;position:fixed;top:0;height:100%;right:0;max-width:500px;width:100%;border-left:1px solid #f1f1f1;overflow-y:auto;box-sizing:border-box;"]);

var SummaryChild = _reactPose.default.div({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
});

var SummaryHeader = (0, _styledComponents.default)(SummaryChild).withConfig({
  displayName: "Summary__SummaryHeader",
  componentId: "sc-6wecl6-1"
})(["padding:10px;display:flex;align-items:flex-start;"]);

var SummaryTitle = _styledComponents.default.h2.withConfig({
  displayName: "Summary__SummaryTitle",
  componentId: "sc-6wecl6-2"
})(["flex:1;margin:0;"]);

var SummaryEmpty = _styledComponents.default.h4.withConfig({
  displayName: "Summary__SummaryEmpty",
  componentId: "sc-6wecl6-3"
})(["padding:10px;margin:0;"]);

var SummaryQuestion = (0, _styledComponents.default)(SummaryChild).withConfig({
  displayName: "Summary__SummaryQuestion",
  componentId: "sc-6wecl6-4"
})(["padding:10px;border-bottom:1px solid #f1f1f1;cursor:pointer;"]);

var Icon = _styledComponents.default.svg.withConfig({
  displayName: "Summary__Icon",
  componentId: "sc-6wecl6-5"
})(["fill:none;stroke:black;stroke-width:2px;stroke-linecap:round;stroke-linejoin:round;cursor:pointer;width:24px;"]);

var SummaryQuestionText = _styledComponents.default.div.withConfig({
  displayName: "Summary__SummaryQuestionText",
  componentId: "sc-6wecl6-6"
})(["color:#666;"]);

var SummaryAnswerText = _styledComponents.default.div.withConfig({
  displayName: "Summary__SummaryAnswerText",
  componentId: "sc-6wecl6-7"
})(["color:#1018D5;"]);

var Summary = function Summary(_ref) {
  var summary = _ref.summary,
      close = _ref.close,
      jumpBack = _ref.jumpBack;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(BodyOverflowHidden, {
    delayTime: 500,
    isMounted: summary
  }), _react.default.createElement(_reactPose.PoseGroup, null, summary && [_react.default.createElement(SummaryContainer, {
    key: "summary"
  }, _react.default.createElement(SummaryHeader, null, _react.default.createElement(SummaryTitle, null, "Question Summary"), _react.default.createElement(Icon, {
    viewBox: "0 0 24 24",
    onClick: close
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
  }))), summary.questions.length === 0 && _react.default.createElement(SummaryEmpty, null, "No questions to display."), summary.questions.length > 0 && summary.questions.map(function (question) {
    return _react.default.createElement(SummaryQuestion, {
      key: "".concat(question.algoId, "_").concat(question.nodeId),
      onClick: function onClick() {
        return jumpBack(summary.traversalId, question.algoId, question.nodeId);
      }
    }, _react.default.createElement(SummaryQuestionText, {
      dangerouslySetInnerHTML: {
        __html: question.summaryText ? question.summaryText : question.displayText
      }
    }), _react.default.createElement(SummaryAnswerText, null, question.answers.filter(function (x) {
      return x.isAnswered;
    }).map(function (answer) {
      var text = "".concat(answer.value ? answer.value + " " : '').concat(answer.displayText);
      return _react.default.createElement("div", {
        key: "".concat(question.algoId, "_").concat(question.nodeId, "_").concat(answer.answerId),
        dangerouslySetInnerHTML: {
          __html: text
        }
      });
    }), question.answers.filter(function (x) {
      return x.isAnswered;
    }).length === 0 && question.answers.filter(function (x) {
      return x.answerId === 0;
    }).length === 0 && _react.default.createElement("div", null, "None")));
  }))]));
};

var _default = Summary;
exports.default = _default;