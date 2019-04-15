"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = require("redux-saga/effects");

var _Helpers = require("../Helpers");

var actions = _interopRequireWildcard(require("../../../Actions"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = function _default(api) {
  return (
    /*#__PURE__*/
    regeneratorRuntime.mark(function traversalContinue(action) {
      var json;
      return regeneratorRuntime.wrap(function traversalContinue$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _effects.put)(actions.traversalDirection(false));

            case 2:
              _context.prev = 2;
              _context.next = 5;
              return (0, _effects.call)(api.fetchTraversalContinue, action.traversalId);

            case 5:
              json = _context.sent;
              _context.next = 8;
              return (0, _effects.put)(actions.setTraversal((0, _Helpers.normalizeTraversal)(json)));

            case 8:
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              console.log("traversalContinue error");
              console.log(_context.t0);
              alert("error");

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, traversalContinue, null, [[2, 10]]);
    })
  );
};

exports.default = _default;