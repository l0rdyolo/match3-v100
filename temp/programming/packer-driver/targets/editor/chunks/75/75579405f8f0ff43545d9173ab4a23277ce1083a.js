System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EffectManager, _dec, _class, _class2, _crd, ccclass, Direction, MatchChecker;

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
        static async SwapPiecePositions(pieceA, pieceB, posA, posB, gridMap) {
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).movePiece(pieceA, posB, 0.1);
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).movePiece(pieceB, posA, 0.1); // GridMap'i güncelle

          const posAData = gridMap.get(pieceA);
          const posBData = gridMap.get(pieceB);
          gridMap.set(pieceA, posBData);
          gridMap.set(pieceB, posAData);
          this.CheckSwappedPieces(pieceA, gridMap);
          this.CheckSwappedPieces(pieceB, gridMap);
        }

        static CheckSwappedPieces(piece, gridMap) {
          const {
            row,
            col
          } = gridMap.get(piece); // Surrounding pieces' match check

          for (const {
            dx,
            dy
          } of this.directions) {
            const matchCount = 1 + this.countMatches(gridMap, piece.name, row, col, dx, dy);

            if (matchCount >= 3) {
              console.log(`Match found starting at ${row}, ${col} in direction ${dx}, ${dy}`); // Additional logic for match handling goes here
            }
          }
        }

        static countMatches(gridMap, pieceName, row, col, dx, dy) {
          let matchCount = 0;
          let [i, j] = [row + dx, col + dy];

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

          const piece = (_Array$from$find = Array.from(gridMap.entries()).find(([_, pos]) => pos.row === row && pos.col === col)) == null ? void 0 : _Array$from$find[0];
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
//# sourceMappingURL=75579405f8f0ff43545d9173ab4a23277ce1083a.js.map