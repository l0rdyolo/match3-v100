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
          const matchedPieces = [];
          this.CheckSwappedPieces(pieceA, gridMap, matchedPieces);
          this.CheckSwappedPieces(pieceB, gridMap, matchedPieces); // Handle matched pieces

          if (matchedPieces.length > 0) {
            console.log("Matched pieces:", matchedPieces);
            this.removeMatches(matchedPieces, gridMap);
          }
        }

        static CheckSwappedPieces(piece, gridMap, matchedPieces) {
          const {
            row,
            col
          } = gridMap.get(piece); // Check in all directions

          for (const {
            dx,
            dy
          } of this.directions) {
            const matchNodes = this.getMatchedNodes(gridMap, piece.name, row, col, dx, dy);

            if (matchNodes.length >= 2) {
              matchedPieces.push(piece, ...matchNodes); // Continue checking in the same direction for the matched nodes

              for (const matchNode of matchNodes) {
                const {
                  row: matchRow,
                  col: matchCol
                } = gridMap.get(matchNode);
                this.checkContinuation(matchNode, gridMap, matchedPieces, dx, dy);
              }
            }
          }
        }

        static checkContinuation(piece, gridMap, matchedPieces, dx, dy) {
          const {
            row,
            col
          } = gridMap.get(piece);
          const matchNodes = this.getMatchedNodes(gridMap, piece.name, row, col, dx, dy);

          if (matchNodes.length >= 2) {
            matchedPieces.push(...matchNodes); // Continue checking in the same direction for the new matched nodes

            for (const matchNode of matchNodes) {
              const {
                row: matchRow,
                col: matchCol
              } = gridMap.get(matchNode);
              this.checkContinuation(matchNode, gridMap, matchedPieces, dx, dy);
            }
          }
        }

        static getMatchedNodes(gridMap, pieceName, row, col, dx, dy) {
          const matchedNodes = [];
          let [i, j] = [row + dx, col + dy];

          while (this.isWithinBounds(i, j, gridMap) && this.isSamePiece(gridMap, pieceName, i, j)) {
            var _Array$from$find;

            const matchedNode = (_Array$from$find = Array.from(gridMap.entries()).find(([_, pos]) => pos.row === i && pos.col === j)) == null ? void 0 : _Array$from$find[0];

            if (matchedNode) {
              matchedNodes.push(matchedNode);
            }

            i += dx;
            j += dy;
          }

          return matchedNodes;
        }

        static isWithinBounds(row, col, gridMap) {
          return row >= 0 && col >= 0 && Array.from(gridMap.values()).some(pos => pos.row === row && pos.col === col);
        }

        static isSamePiece(gridMap, pieceName, row, col) {
          var _Array$from$find2;

          const piece = (_Array$from$find2 = Array.from(gridMap.entries()).find(([_, pos]) => pos.row === row && pos.col === col)) == null ? void 0 : _Array$from$find2[0];
          return (piece == null ? void 0 : piece.name) === pieceName;
        }

        static removeMatches(matchedPieces, gridMap) {
          matchedPieces.forEach(node => {
            gridMap.delete(node);
            node.destroy(); // Or return it to the pool
          });
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
//# sourceMappingURL=5e22f318c6c3942f6a4a479d63375644ea6e6af6.js.map