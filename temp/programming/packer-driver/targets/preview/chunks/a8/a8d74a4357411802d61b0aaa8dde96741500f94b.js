System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GridManager, VerticalMatchStrategy, _crd;

  function _reportPossibleCrUseOfGridManager(extras) {
    _reporterNs.report("GridManager", "../../Grid/GridManager", _context.meta, extras);
  }

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
    }, function (_unresolved_2) {
      GridManager = _unresolved_2.GridManager;
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

        checkMatch(pieceA, pieceB) {
          console.log("vertical matc");
          var grid = (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
            error: Error()
          }), GridManager) : GridManager).getInstance().grid;
          var firstCheck = this.checkSinglePieceMatch(pieceA, grid);
          var secondCheck = this.checkSinglePieceMatch(pieceB, grid); // secondCheck = secondCheck.concat(firstCheck)

          console.log(firstCheck, secondCheck);
          return secondCheck;
          ;
        }

        checkSinglePieceMatch(piece, grid) {
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
//# sourceMappingURL=a8d74a4357411802d61b0aaa8dde96741500f94b.js.map