System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HorizontalMatchStrategy, _crd;

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchStrategy(extras) {
    _reporterNs.report("MatchStrategy", "./IMatchStrategy", _context.meta, extras);
  }

  _export("HorizontalMatchStrategy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9ffbemCf8hIVY0EqIGp39Pn", "HorizontalMatchStrategy", undefined);

      _export("HorizontalMatchStrategy", HorizontalMatchStrategy = class HorizontalMatchStrategy {
        constructor() {
          this.directions = [{
            dx: 0,
            dy: 1
          }, // Right
          {
            dx: 0,
            dy: -1
          } // Left
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
          const matches = [piece];
          const row = piece.row;
          const col = piece.col; // Soldaki elemanları kontrol et

          for (let i = col - 1; i >= 0; i--) {
            const currentPiece = grid[row][i];
            if (currentPiece.isEmpty || piece.isEmpty) break;

            if (currentPiece.node.name === piece.node.name) {
              matches.push(currentPiece);
            } else {
              break; // Eşleşme kesilirse dur
            }
          } // Sağdaki elemanları kontrol et


          for (let i = col + 1; i < grid[row].length; i++) {
            const currentPiece = grid[row][i];
            if (currentPiece.isEmpty || piece.isEmpty) break;

            if (currentPiece.node.name === piece.node.name) {
              matches.push(currentPiece);
            } else {
              break; // Eşleşme kesilirse dur
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
//# sourceMappingURL=bba17a3ac0d2450e1ff87ca060c86d17913b3b78.js.map