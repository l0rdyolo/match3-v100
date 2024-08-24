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
          console.log(pieceA, pieceB, "a");
          const grid = (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
            error: Error()
          }), GridManager) : GridManager).getInstance().grid;
          const firstCheck = this.checkSinglePieceMatch(pieceA, grid);
          let secondCheck = this.checkSinglePieceMatch(pieceB, grid);
          secondCheck = secondCheck.concat(firstCheck);
          return secondCheck;
          ;
        }

        checkSinglePieceMatch(piece, grid) {
          const matchedPieces = [];
          const {
            row,
            col
          } = piece;

          for (const direction of this.directions) {
            let currentRow = row + direction.dx;
            let currentCol = col;

            while (currentRow >= 0 && currentRow < grid.length) {
              const currentPiece = grid[currentRow][currentCol];

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
//# sourceMappingURL=68c8c4b96f42be51cfeee888f95b516d074c9c0f.js.map