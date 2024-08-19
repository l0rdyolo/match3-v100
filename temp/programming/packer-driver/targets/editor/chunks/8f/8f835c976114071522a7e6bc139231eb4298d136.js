System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Sprite, EffectManager, _dec, _class, _class2, _crd, ccclass, Direction, MatchChecker;

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
      Color = _cc.Color;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      EffectManager = _unresolved_2.EffectManager;
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
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).movePiece(pieceA, posB, 0.1);
          await (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).movePiece(pieceB, posA, 0.1); // Update the gridMap

          const posAData = gridMap.get(pieceA);
          const posBData = gridMap.get(pieceB);
          gridMap.set(pieceA, posBData);
          gridMap.set(pieceB, posAData);
          const horizontalVisited = new Set();
          const verticalVisited = new Set();
          this.checkMatches(pieceB, gridMap, horizontalVisited, verticalVisited);
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
            const sprite = neighbor.getChildByName("Sprite").getComponent(Sprite);

            if (sprite) {
              sprite.color = new Color(150, 150, 255); // Change color
            }

            visited.add(neighbor);
            this.visitNeighborWithDirection(neighbor, gridMap, direction, visited, depth + 1, maxDepth);
          }
        }

        static async checkMatches(currentPiece, gridMap, horizontalVisited, verticalVisited, depth = 0, maxDepth = 3) {
          horizontalVisited.add(currentPiece);
          verticalVisited.add(currentPiece);

          for (const direction of this.horizontalDirections) {
            this.visitNeighborWithDirection(currentPiece, gridMap, direction, horizontalVisited, depth, maxDepth);
          }

          for (const direction of this.verticalDirections) {
            this.visitNeighborWithDirection(currentPiece, gridMap, direction, verticalVisited, depth, maxDepth);
          }

          if (verticalVisited.size >= 3) {
            console.log("Vertical Match Detected");
            await this.handleMatch(Array.from(verticalVisited), gridMap);
          } else if (horizontalVisited.size >= 3) {
            console.log("Horizontal Match Detected");
            await this.handleMatch(Array.from(horizontalVisited), gridMap);
          }
        }

        static async handleMatch(matchedPieces, gridMap) {
          for (const piece of matchedPieces) {
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).decreaseScale(piece, 0.1, false);
            gridMap.delete(piece); // Assuming you have a method to return the piece to the pool
            //   this.returnPieceToPool(piece);
          }
        }

      }, _class2.horizontalDirections = [{
        dx: 0,
        dy: 1
      }, // Right
      {
        dx: 0,
        dy: -1
      } // Left
      ], _class2.verticalDirections = [{
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
//# sourceMappingURL=8f835c976114071522a7e6bc139231eb4298d136.js.map