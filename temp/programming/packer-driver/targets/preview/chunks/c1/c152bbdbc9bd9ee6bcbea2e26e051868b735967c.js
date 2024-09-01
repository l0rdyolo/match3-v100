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
          var firstCheck = this.checkSinglePieceMatch(pieceA, grid);
          var secondCheck = this.checkSinglePieceMatch(pieceB, grid);
          secondCheck = secondCheck.concat(firstCheck);
          return secondCheck;
          ;
        }

        checkSinglePieceMatch(piece, grid) {
          var matches = [piece];
          var row = piece.row;
          var col = piece.col; // Soldaki elemanları kontrol et

          for (var i = col - 1; i >= 0; i--) {
            if (grid[row][i].node.name === piece.node.name) {
              matches.push(grid[row][i]);
            } else {
              break; // Eşleşme kesilirse dur
            }
          } // Sağdaki elemanları kontrol et


          for (var _i = col + 1; _i < grid[row].length; _i++) {
            if (grid[row][_i].node.name === piece.node.name) {
              matches.push(grid[row][_i]);
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
//# sourceMappingURL=c152bbdbc9bd9ee6bcbea2e26e051868b735967c.js.map