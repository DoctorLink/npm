"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = require("redux-saga/effects");

var actions = _interopRequireWildcard(require("../Actions"));

var generators = _interopRequireWildcard(require("./Generators"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = function _default(api) {
  return (
    /*#__PURE__*/
    regeneratorRuntime.mark(function rootSaga() {
      return regeneratorRuntime.wrap(function rootSaga$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _effects.takeLatest)(actions.TRAVERSAL_START, generators.Start(api));

            case 2:
              _context.next = 4;
              return (0, _effects.takeLatest)(actions.TRAVERSAL_CONTINUE, generators.TRAVERSAL_CONTINUE(api));

            case 4:
              _context.next = 6;
              return (0, _effects.takeLatest)(actions.TRAVERSAL_NEXT, generators.Next(api));

            case 6:
              _context.next = 8;
              return (0, _effects.takeLatest)(actions.TRAVERSAL_PREVIOUS, generators.Previous(api));

            case 8:
              _context.next = 10;
              return (0, _effects.takeLatest)(actions.TRAVERSAL_SUMMARY_GET, generators.Summary(api));

            case 10:
              _context.next = 12;
              return (0, _effects.takeLatest)(actions.TRAVERSAL_CONCLUSION_GET, generators.Conclusions(api));

            case 12:
              _context.next = 14;
              return (0, _effects.takeLatest)(actions.TRAVERSAL_SYMPTOM_REPORT_GET, generators.SymptomReport(api));

            case 14:
              _context.next = 16;
              return (0, _effects.takeLatest)(actions.TOGGLE_RADIO, generators.AutoForward());

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, rootSaga);
    })
  );
};

exports.default = _default;