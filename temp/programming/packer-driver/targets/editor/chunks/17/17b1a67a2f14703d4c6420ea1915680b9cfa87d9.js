System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, VerticalMatchStrategy, _crd;

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchStrategy(extras) {
    _reporterNs.report("MatchStrategy", "./IMatchStrategy", _context.meta, extras);
  }

  _export("VerticalMatchStrategy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e55cyUictKw5AzfPmuH5sz", "VerticalMatchStrategy", undefined);

      _export("VerticalMatchStrategy", VerticalMatchStrategy = class VerticalMatchStrategy {
        constructor() {
          this.directions = [{
            dx: 1,
            dy: 0
          }, // Down
          {
            dx: -1,
            dy: 0
          } // Up
          ];
        }

        checkMatch(pieceA, pieceB, grid) {
          const firstCheck = this.checkSinglePieceMatch(pieceA, grid);
          let secondCheck = this.checkSinglePieceMatch(pieceB, grid);
          secondCheck = secondCheck.concat(firstCheck);
          return secondCheck;
          ;
        }

        checkSinglePieceMatch(piece, grid) {
          // VerticalMatchStrategy.ts
          const matches = [piece];
          const row = piece.row;
          const col = piece.col;

          for (let i = row - 1; i >= 0; i--) {
            const currentPiece = grid[i][col];
            if (currentPiece.isEmpty || piece.isEmpty) break;

            if (grid[i][col].node.name === piece.node.name) {
              matches.push(currentPiece);
            } else {
              break;
            }
          }

          for (let i = row + 1; i < grid.length; i++) {
            const currentPiece = grid[i][col];
            if (currentPiece.isEmpty || piece.isEmpty) break;

            if (currentPiece.node.name === piece.node.name) {
              matches.push(currentPiece);
            } else {
              break;
            }
          }

          return matches.length >= 3 ? matches : [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=17b1a67a2f14703d4c6420ea1915680b9cfa87d9.js.map