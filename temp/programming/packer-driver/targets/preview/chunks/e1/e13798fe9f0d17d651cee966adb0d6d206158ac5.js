System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EffectManager, _dec, _class, _crd, ccclass, Direction, MatchChecker;

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

      __checkObsolete__(['_decorator', 'buildShadowPass', 'Node', 'Vec2', 'Vec3']);

      ({
        ccclass
      } = _decorator);

      (function (Direction) {
        Direction[Direction["Horizontal"] = 0] = "Horizontal";
        Direction[Direction["Vertical"] = 1] = "Vertical";
      })(Direction || (Direction = {}));

      _export("MatchChecker", MatchChecker = (_dec = ccclass("MatchChecker"), _dec(_class = class MatchChecker {
        constructor() {
          this.dx = [0, 0, 1, -1];
          this.dy = [1, -1, 0, 0];
        }

        static CheckSwapedPieces(pieceA) {
          // this.checkSurroundings(pieceA)
          // this.checkSurroundings(pieceB)
          var samePieceCount = 1;
        }

        static checkSurroundings(grid, row, col) {// for (const direction of this.directions) {
          //   const newRow = row + direction.dx;
          //   const newCol = col + direction.dy;
          //   if (this.isWithinBounds(grid, newRow, newCol)) {
          //     const neighbor = grid[newRow][newCol];
          //     console.log(`Checking piece at [${newRow}, ${newCol}]`);
          //   }
          // }
        }

        static isWithinBounds(grid, row, col) {
          return row >= 0 && row < grid.length && col >= 0 && col < grid[row].length;
        }

        static SwapPiecePositions(pieceA, pieceB, posA, posB) {
          var _this = this;

          return _asyncToGenerator(function* () {
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceA, posB, 0.1);
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceB, posA, 0.1);

            _this.CheckSwapedPieces(pieceA);

            _this.CheckSwapedPieces(pieceB);
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e13798fe9f0d17d651cee966adb0d6d206158ac5.js.map