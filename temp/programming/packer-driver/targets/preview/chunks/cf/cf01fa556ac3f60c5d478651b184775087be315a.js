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
          var col = piece.col;

          for (var i = row - 1; i >= 0; i--) {
            var currentPiece = grid[i][col];
            if (currentPiece.isEmpty || piece.isEmpty) break;

            if (grid[i][col].node.name === piece.node.name) {
              matches.push(currentPiece);
            } else {
              break;
            }
          }

          for (var _i = row + 1; _i < grid.length; _i++) {
            var _currentPiece = grid[_i][col];
            if (_currentPiece.isEmpty || piece.isEmpty) break;

            if (_currentPiece.node.name === piece.node.name) {
              matches.push(_currentPiece);
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
//# sourceMappingURL=cf01fa556ac3f60c5d478651b184775087be315a.js.map