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
          var firstCheck = this.checkSinglePieceMatch(pieceA, grid);
          var secondCheck = this.checkSinglePieceMatch(pieceB, grid);
          secondCheck = secondCheck.concat(firstCheck);
          return secondCheck;
          ;
        }

        checkSinglePieceMatch(piece, grid) {
          // VerticalMatchStrategy.ts
          var matches = [piece];
          var row = piece.row;
          var col = piece.col; // Üstteki elemanları kontrol et

          for (var i = row - 1; i >= 0; i--) {
            if (grid[i][col].node.name === piece.node.name) {
              matches.push(grid[i][col]);
            } else {
              break; // Eşleşme kesilirse dur
            }
          } // Alttaki elemanları kontrol et


          for (var _i = row + 1; _i < grid.length; _i++) {
            if (grid[_i][col].node.name === piece.node.name) {
              matches.push(grid[_i][col]);
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
//# sourceMappingURL=74120cfd29971d6b992b54bbf61d50e6fa9aa0d4.js.map