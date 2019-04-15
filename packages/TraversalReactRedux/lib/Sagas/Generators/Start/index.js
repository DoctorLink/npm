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
    regeneratorRuntime.mark(function traversalStart(action) {
      var json;
      return regeneratorRuntime.wrap(function traversalStart$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _effects.put)(actions.traversalDirection(false));

            case 2:
              _context.prev = 2;
              _context.next = 5;
              return (0, _effects.call)(api.fetchTraversalStart, action.algoId, action.nodeId);

            case 5:
              json = _context.sent;
              _context.next = 8;
              return (0, _effects.put)(actions.setTraversal((0, _Helpers.normalizeTraversal)(json)));

            case 8:
              _context.next = 10;
              return (0, _effects.call)(action.history.push, "/traversal/" + json.data.traversalId);

            case 10:
              _context.next = 12;
              return (0, _effects.call)(window.scroll, 0, 0);

            case 12:
              _context.next = 19;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);
              console.log("traversalStart error");
              console.log(_context.t0);
              alert("error");

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, traversalStart, null, [[2, 14]]);
    })
  );
};

exports.default = _default;