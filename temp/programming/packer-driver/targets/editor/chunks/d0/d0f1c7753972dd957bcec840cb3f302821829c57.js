System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EffectManager, PoolHelper, PiecesPool, _dec, _class, _class2, _crd, ccclass, Direction, MatchChecker;

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../Effects/EffectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolHelper(extras) {
    _reporterNs.report("PoolHelper", "../PoolHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPiecesPool(extras) {
    _reporterNs.report("PiecesPool", "../Poolable/PiecesPool", _context.meta, extras);
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
    }, function (_unresolved_3) {
      PoolHelper = _unresolved_3.PoolHelper;
    }, function (_unresolved_4) {
      PiecesPool = _unresolved_4.PiecesPool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41c9dChSgVC0paVJJFOkc+1", "MatchChecker", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Node', 'Sprite', 'Vec3']);

      ({
        ccclass
      } = _decorator);

      (function (Direction) {
        Direction[Direction["Horizontal"] = 0] = "Horizontal";
        Direction[Direction["Vertical"] = 1] = "Vertical";
      })(Direction || (Direction = {}));

      _export("MatchChecker", MatchChecker = (_dec = ccclass("MatchChecker"), _dec(_class = (_class2 = class MatchChecker {
        static async SwapPiecePositions(pieceA, pieceB, posA, posB, gridMap) {
          await (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).movePiece(pieceA, posB, 0.1);
          await (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).movePiece(pieceB, posA, 0.1); // Update the gridMap

          const posAData = gridMap.get(pieceA);
          const posBData = gridMap.get(pieceB);
          gridMap.set(pieceA, posBData);
          gridMap.set(pieceB, posAData);
          this.checkMatches(pieceA, gridMap);
          this.checkMatches(pieceB, gridMap);
        }

        static getPieceAtPosition(position, gridMap) {
          var _Array$from$find;

          return (_Array$from$find = Array.from(gridMap.entries()).find(([_, pos]) => pos.row === position.row && pos.col === position.col)) == null ? void 0 : _Array$from$find[0];
        }

        static visitNeighborWithDirection(currentPiece, gridMap, direction, visited, depth, maxDepth) {
          if (depth > maxDepth) return;
          const currentPiecePosition = gridMap.get(currentPiece);
          const neighborPiecePosition = {
            row: currentPiecePosition.row + direction.dx,
            col: currentPiecePosition.col + direction.dy
          };
          const neighbor = this.getPieceAtPosition(neighborPiecePosition, gridMap);

          if (neighbor && !visited.has(neighbor) && neighbor.name === currentPiece.name) {
            visited.add(neighbor);
            this.visitNeighborWithDirection(neighbor, gridMap, direction, visited, depth + 1, maxDepth);
          }
        }

        static checkMatches(currentPiece, gridMap, maxDepth = 3) {
          const horizontalVisited = this.collectMatches(currentPiece, gridMap, this.directions.horizontal, maxDepth);
          const verticalVisited = this.collectMatches(currentPiece, gridMap, this.directions.vertical, maxDepth);
          let isVertical = false;
          let isHorizontal = false;

          if (horizontalVisited.size >= 3) {
            this.handleMatch(Array.from(horizontalVisited), gridMap);
            isHorizontal = true;
          }

          if (verticalVisited.size >= 3) {
            this.handleMatch(Array.from(verticalVisited), gridMap);
            isVertical = true;
          }

          return isVertical || isHorizontal;
        }

        static collectMatches(currentPiece, gridMap, directions, maxDepth) {
          const visited = new Set();
          visited.add(currentPiece);

          for (const direction of directions) {
            this.visitNeighborWithDirection(currentPiece, gridMap, direction, visited, 0, maxDepth);
          }

          return visited;
        }

        static async handleMatch(matchedPieces, gridMap) {
          for (const piece of matchedPieces) {
            await (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).decreaseScale(piece, 0.1, false);
            gridMap.delete(piece);
            (_crd && PoolHelper === void 0 ? (_reportPossibleCrUseOfPoolHelper({
              error: Error()
            }), PoolHelper) : PoolHelper).release(_crd && PiecesPool === void 0 ? (_reportPossibleCrUseOfPiecesPool({
              error: Error()
            }), PiecesPool) : PiecesPool, piece);
          }
        }

      }, _class2.directions = {
        horizontal: [{
          dx: 0,
          dy: 1
        }, // Right
        {
          dx: 0,
          dy: -1
        } // Left
        ],
        vertical: [{
          dx: 1,
          dy: 0
        }, // Down
        {
          dx: -1,
          dy: 0
        } // Up
        ]
      }, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0f1c7753972dd957bcec840cb3f302821829c57.js.map