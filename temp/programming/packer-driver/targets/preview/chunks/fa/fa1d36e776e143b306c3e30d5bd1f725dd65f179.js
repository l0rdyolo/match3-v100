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

        checkMatch(piece, grid) {
          var matchedPieces = [];
          var {
            row,
            col
          } = piece;

          for (var direction of this.directions) {
            var currentRow = row + direction.dx;
            var currentCol = col;

            while (currentRow >= 0 && currentRow < grid.length) {
              var currentPiece = grid[currentRow][currentCol];

              if (currentPiece && currentPiece.node.name === piece.node.name) {
                matchedPieces.push(currentPiece);
              } else {
                break;
              }

              currentRow += direction.dx;
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
//# sourceMappingURL=fa1d36e776e143b306c3e30d5bd1f725dd65f179.js.map