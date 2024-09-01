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
          let matchedPieces = [];
          const {
            row,
            col
          } = piece;

          for (const direction of this.directions) {
            let currentRow = row;
            let currentCol = col + direction.dy;

            while (currentCol >= 0 && currentCol < grid[0].length) {
              const currentPiece = grid[currentRow][currentCol];
              if (!currentPiece || !piece) continue;

              if (currentPiece.canSelect && currentPiece.node.name === piece.node.name) {
                matchedPieces.push(currentPiece);
              } else {
                break;
              }

              currentCol += direction.dy;
            }
          }

          if (matchedPieces.length >= 2) {
            matchedPieces.push(piece);
          } else {
            matchedPieces = [];
          }

          return matchedPieces;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8ee2e9e3020100c2ad2de17fcd73a4c2bccf8682.js.map