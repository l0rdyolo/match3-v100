System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Sprite, EffectManager, _dec, _class, _class2, _crd, ccclass, property, Direction, MatchChecker;

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

      __checkObsolete__(['_decorator', 'Color', 'director', 'Node', 'Sprite', 'SpriteRenderer', 'Vec3']);

      ({
        ccclass,
        property
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

          this.highlightNeighbors(pieceA, gridMap);
          const posAData = gridMap.get(pieceA);
          const posBData = gridMap.get(pieceB);
          gridMap.set(pieceA, posBData);
          gridMap.set(pieceB, posAData);
        }

        static highlightNeighbors(currentPiece, gridMap, visited = new Set(), depth = 0, maxDepth = 5 // Set an appropriate max depth to prevent stack overflow
        ) {
          if (depth > maxDepth) return;
          visited.add(currentPiece);

          for (const {
            dx,
            dy
          } of this.directions) {
            const currentPiecePosition = gridMap.get(currentPiece);
            const neighborPiecePosition = {
              row: currentPiecePosition.row + dx,
              col: currentPiecePosition.col + dy
            };
            const neighbor = this.getPieceAtPosition(neighborPiecePosition, gridMap);

            if (neighbor && !visited.has(neighbor)) {
              if (neighbor.name === currentPiece.name) {
                const sprite = neighbor.getChildByName("Sprite").getComponent(Sprite);

                if (sprite) {
                  sprite.color = new Color(150, 150, 255); // Change color
                }

                this.highlightNeighbors(neighbor, gridMap, visited, depth + 1, maxDepth);
              }
            }
          }
        }

        static getPieceAtPosition(position, gridMap) {
          var _Array$from$find;

          return (_Array$from$find = Array.from(gridMap.entries()).find(([_, pos]) => pos.row === position.row && pos.col === position.col)) == null ? void 0 : _Array$from$find[0];
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
//# sourceMappingURL=238fe08544402230e50aa9acc595d1760d31f25b.js.map