System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EffectManager, _dec, _class, _class2, _crd, ccclass, Direction, MatchChecker;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../Effects/EffectManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EffectManager = _unresolved_2.EffectManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41c9dChSgVC0paVJJFOkc+1", "MatchChecker", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Vec3']);

      ({
        ccclass
      } = _decorator);

      (function (Direction) {
        Direction[Direction["Horizontal"] = 0] = "Horizontal";
        Direction[Direction["Vertical"] = 1] = "Vertical";
      })(Direction || (Direction = {}));

      _export("MatchChecker", MatchChecker = (_dec = ccclass("MatchChecker"), _dec(_class = (_class2 = class MatchChecker {
        static SwapPiecePositions(pieceA, pieceB, posA, posB, gridMap) {
          var _this = this;

          return _asyncToGenerator(function* () {
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceA, posB, 0.1);
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceB, posA, 0.1); // GridMap'i güncelle

            var posAData = gridMap.get(pieceA);
            var posBData = gridMap.get(pieceB);
            gridMap.set(pieceA, posBData);
            gridMap.set(pieceB, posAData);

            _this.CheckSwappedPieces(pieceA, gridMap);

            _this.CheckSwappedPieces(pieceB, gridMap);
          })();
        }

        static CheckSwappedPieces(piece, gridMap) {
          var {
            row,
            col
          } = gridMap.get(piece); // Surrounding pieces' match check

          for (var {
            dx,
            dy
          } of this.directions) {
            var matchCount = 1 + this.countMatches(gridMap, piece.name, row, col, dx, dy);

            if (matchCount >= 3) {
              console.log("Match found starting at " + row + ", " + col + " in direction " + dx + ", " + dy); // Additional logic for match handling goes here
            }
          }
        }

        static countMatches(gridMap, pieceName, row, col, dx, dy) {
          var matchCount = 0;
          var [i, j] = [row + dx, col + dy];

          while (this.isWithinBounds(i, j, gridMap) && this.isSamePiece(gridMap, pieceName, i, j)) {
            matchCount++;
            i += dx;
            j += dy;
          }

          return matchCount;
        }

        static isWithinBounds(row, col, gridMap) {
          return row >= 0 && col >= 0 && Array.from(gridMap.values()).some(pos => pos.row === row && pos.col === col);
        }

        static isSamePiece(gridMap, pieceName, row, col) {
          var _Array$from$find;

          var piece = (_Array$from$find = Array.from(gridMap.entries()).find(_ref => {
            var [_, pos] = _ref;
            return pos.row === row && pos.col === col;
          })) == null ? void 0 : _Array$from$find[0];
          return (piece == null ? void 0 : piece.name) === pieceName;
        }

      }, _class2.directions = [{
        dx: 0,
        dy: 1
      }, // Right
      {
        dx: 0,
        dy: -1
      }, // Left
      {
        dx: 1,
        dy: 0
      }, // Down
      {
        dx: -1,
        dy: 0
      } // Up
      ], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=29ecf738e3ccb84c5a68f6b65434f13c27d02b55.js.map