"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = require("redux-saga/effects");

var actions = _interopRequireWildcard(require("../../../Actions"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = function _default(api) {
  return (
    /*#__PURE__*/
    regeneratorRuntime.mark(function traversalConclusion(action) {
      var json;
      return regeneratorRuntime.wrap(function traversalConclusion$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _effects.call)(api.fetchTraversalConclusion, action.traversalId);

            case 3:
              json = _context.sent;
              _context.next = 6;
              return (0, _effects.put)(actions.traversalConclusionSet({
                traversalId: action.traversalId,
                conclusions: json.data
              }));

            case 6:
              _context.next = 13;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log("traversalConclusion error");
              console.log(_context.t0);
              alert("error");

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, traversalConclusion, null, [[0, 8]]);
    })
  );
};

exports.default = _default;