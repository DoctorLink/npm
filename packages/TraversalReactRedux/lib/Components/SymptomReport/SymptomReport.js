"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactPose = _interopRequireWildcard(require("react-pose"));

var _InfoIcon = _interopRequireDefault(require("../InfoIcon"));

var _colors = _interopRequireDefault(require("../../Theme/base/colors"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = {
  danger: '#e42817',
  moderate: '#ffa200',
  normal: 'green',
  conclusions: _colors.default.brand100,
  reasonBullets: _colors.default.lightBlue100
};

var PosedBlocks = _reactPose.default.div({
  enter: {
    staggerChildren: 200,
    delayChildren: 200
  }
});

var PanelBlocks = (0, _styledComponents.default)(PosedBlocks).withConfig({
  displayName: "SymptomReport__PanelBlocks",
  componentId: "w3cyfy-0"
})(["margin:0 -10px;"]);

var PosedPanel = _reactPose.default.div({
  enter: {
    opacity: 1,
    y: '0%'
  },
  exit: {
    y: '100%',
    opacity: 0
  }
});

var PanelContainer = (0, _styledComponents.default)(PosedPanel).withConfig({
  displayName: "SymptomReport__PanelContainer",
  componentId: "w3cyfy-1"
})(["box-sizing:border-box;padding:0 10px;float:", ";@media screen and (min-width:800px){width:50%;}"], function (p) {
  return p.float || 'left';
});
var Panel = (0, _styledComponents.default)(PosedPanel).withConfig({
  displayName: "SymptomReport__Panel",
  componentId: "w3cyfy-2"
})(["border-radius:4px;background-color:white;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);margin-bottom:30px;overflow:hidden;margin-right:10px;"]);

var PanelHeader = _styledComponents.default.div.withConfig({
  displayName: "SymptomReport__PanelHeader",
  componentId: "w3cyfy-3"
})(["box-sizing:border-box;display:flex;align-items:center;padding-top:16px;padding-left:16px;padding-right:16px;padding-bottom:16px;background-color:", ";@media screen and (min-width:800px){padding-left:24px;padding-right:24px;}"], function (p) {
  return p.color || '#666';
});

var PanelTitle = _styledComponents.default.span.withConfig({
  displayName: "SymptomReport__PanelTitle",
  componentId: "w3cyfy-4"
})(["color:", ";font-size:0.875rem;font-family:'Noto Sans',sans-serif;font-weight:400;line-height:1.5;font-size:1.5rem;"], function (p) {
  return p.color || 'white';
});

var PanelContent = _styledComponents.default.div.withConfig({
  displayName: "SymptomReport__PanelContent",
  componentId: "w3cyfy-5"
})(["box-sizing:border-box;padding:16px;&:last-child{}@media screen and (min-width:800px){padding-left:24px;padding-right:24px;}"]);

var PanelConclusion = (0, _styledComponents.default)(PanelContent).withConfig({
  displayName: "SymptomReport__PanelConclusion",
  componentId: "w3cyfy-6"
})(["border-bottom:1px solid #cacaca;&:last-of-type{border-bottom:none;}"]);

var BodyText = _styledComponents.default.p.withConfig({
  displayName: "SymptomReport__BodyText",
  componentId: "w3cyfy-7"
})(["margin:0;display:block;color:rgba(0,0,0,0.87);font-size:1rem;font-family:'Noto Sans',sans-serif;font-weight:400;line-height:1.5;font-weight:", ";"], function (p) {
  return p.bold ? 'bold' : 'normal';
});

var ConclisionTitle = _styledComponents.default.h6.withConfig({
  displayName: "SymptomReport__ConclisionTitle",
  componentId: "w3cyfy-8"
})(["font-family:'Noto Sans',sans-serif;display:inline;font-weight:normal;font-size:1.25rem;::after{content:\" \"}"]);

var SVG = _styledComponents.default.svg.withConfig({
  displayName: "SymptomReport__SVG",
  componentId: "w3cyfy-9"
})(["fill:none;stroke:white;stroke-width:3px;stroke-linecap:round;stroke-linejoin:round;margin-right:10px;"]);

var Icon = function Icon(_ref) {
  var state = _ref.state;
  if (state === 1) return _react.default.createElement(SVG, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), _react.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), _react.default.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "16"
  }));
  if (state === 2) return _react.default.createElement(SVG, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("path", {
    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), _react.default.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), _react.default.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "17"
  }));
  return _react.default.createElement(SVG, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), _react.default.createElement("polyline", {
    points: "22 4 12 14.01 9 11.01"
  }));
};

var _default = function _default(_ref2) {
  var conclusion = _ref2.conclusion,
      showExplanation = _ref2.showExplanation;
  var symptomReport = conclusion.symptomReport;

  var level = function level() {
    switch (symptomReport.messageLevel) {
      case 3:
        return colors.normal;

      case 2:
        return colors.moderate;

      default:
        return colors.danger;
    }
  };

  return _react.default.createElement(_reactPose.PoseGroup, {
    animateOnMount: true
  }, _react.default.createElement(Panel, {
    fullWidth: true,
    key: "header"
  }, _react.default.createElement(PanelHeader, {
    color: level()
  }, _react.default.createElement(Icon, {
    state: symptomReport.messageLevel
  }), _react.default.createElement(PanelTitle, null, symptomReport.messageTitle)), _react.default.createElement(PanelContent, null, _react.default.createElement(BodyText, {
    dangerouslySetInnerHTML: {
      __html: symptomReport.messageDescription
    }
  }))), _react.default.createElement(PanelBlocks, {
    key: "bullets"
  }, _react.default.createElement(PanelContainer, {
    float: 'right',
    animateOnMount: true
  }, symptomReport.dangerBullets && symptomReport.dangerBullets.length > 0 && _react.default.createElement(Panel, null, _react.default.createElement(PanelHeader, {
    color: colors.danger
  }, _react.default.createElement(PanelTitle, null, symptomReport.dangerBulletTitle)), symptomReport.dangerBullets.map(function (bullet, i) {
    return _react.default.createElement(PanelConclusion, {
      key: i
    }, _react.default.createElement(BodyText, null, bullet.displayText));
  })), symptomReport.contactBullets && symptomReport.contactBullets.length > 0 && _react.default.createElement(Panel, null, _react.default.createElement(PanelHeader, {
    color: colors.moderate
  }, _react.default.createElement(PanelTitle, null, symptomReport.contactBulletTitle)), symptomReport.contactBullets.map(function (bullet, i) {
    return _react.default.createElement(PanelConclusion, {
      key: i
    }, _react.default.createElement(BodyText, null, bullet.displayText));
  }))), _react.default.createElement(PanelContainer, {
    key: "concs"
  }, symptomReport.reasonConclusions && symptomReport.reasonConclusions.length > 0 && _react.default.createElement(Panel, null, _react.default.createElement(PanelHeader, {
    color: colors.conclusions
  }, _react.default.createElement(PanelTitle, null, symptomReport.reasonConclusionTitle)), symptomReport.reasonConclusions.map(function (conclusion, i) {
    return _react.default.createElement(PanelConclusion, {
      key: i
    }, _react.default.createElement(ConclisionTitle, null, conclusion.displayText), _react.default.createElement(_InfoIcon.default, {
      inline: true,
      onClick: showExplanation,
      explanation: conclusion.explanation
    }), _react.default.createElement(BodyText, null, conclusion.truncated));
  })), symptomReport.otherConclusions && symptomReport.otherConclusions.length > 0 && _react.default.createElement(Panel, null, _react.default.createElement(PanelHeader, {
    color: colors.conclusions
  }, _react.default.createElement(PanelTitle, null, symptomReport.otherConclusionTitle)), symptomReport.otherConclusions.map(function (conclusion, i) {
    return _react.default.createElement(PanelConclusion, {
      key: i
    }, _react.default.createElement(ConclisionTitle, null, conclusion.displayText), _react.default.createElement(_InfoIcon.default, {
      inline: true,
      onClick: showExplanation,
      explanation: conclusion.explanation
    }));
  })), symptomReport.informationConclusions && symptomReport.informationConclusions.length > 0 && _react.default.createElement(Panel, null, _react.default.createElement(PanelHeader, {
    color: colors.conclusions
  }, _react.default.createElement(PanelTitle, null, symptomReport.informationConclusionTitle)), symptomReport.informationConclusions.map(function (conclusion, i) {
    return _react.default.createElement(PanelConclusion, {
      key: i
    }, _react.default.createElement(ConclisionTitle, null, conclusion.displayText), _react.default.createElement(_InfoIcon.default, {
      inline: true,
      onClick: showExplanation,
      explanation: conclusion.explanation
    }));
  }))), _react.default.createElement(PanelContainer, {
    key: "reasons"
  }, symptomReport.reasonBullets && symptomReport.reasonBullets.length > 0 && _react.default.createElement(Panel, null, _react.default.createElement(PanelHeader, {
    color: colors.reasonBullets
  }, _react.default.createElement(PanelTitle, null, symptomReport.reasonBulletTitle)), symptomReport.reasonBullets.map(function (bullet, i) {
    return _react.default.createElement(PanelConclusion, {
      key: i
    }, _react.default.createElement(BodyText, {
      bold: i === 0
    }, bullet.displayText));
  })))));
};

exports.default = _default;