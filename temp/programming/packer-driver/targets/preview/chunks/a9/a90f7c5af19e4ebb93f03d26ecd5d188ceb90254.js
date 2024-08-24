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

        checkMatch(pieceA, pieceB) {
          return;
          var matchedPieces = [];
          var {
            row,
            col
          } = piece;

          for (var direction of this.directions) {
            var currentRow = row;
            var currentCol = col + direction.dy;

            while (currentCol >= 0 && currentCol < grid[0].length) {
              var currentPiece = grid[currentRow][currentCol];

              if (currentPiece && currentPiece.node.name === piece.node.name) {
                matchedPieces.push(currentPiece);
              } else {
                break;
              }

              currentCol += direction.dy;
            }
          }

          if (matchedPieces.length >= 2) {
            matchedPieces.push(piece);
          }

          return matchedPieces;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a90f7c5af19e4ebb93f03d26ecd5d188ceb90254.js.map