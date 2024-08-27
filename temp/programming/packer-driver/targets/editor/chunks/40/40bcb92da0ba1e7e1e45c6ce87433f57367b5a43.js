System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GridManager, SingletonComponent, _dec, _class, _crd, ccclass, property, GravityHandler;

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridManager(extras) {
    _reporterNs.report("GridManager", "../Grid/GridManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../SingletonComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GridManager = _unresolved_2.GridManager;
    }, function (_unresolved_3) {
      SingletonComponent = _unresolved_3.SingletonComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae996LRhyRNRYM94TseN4vN", "GravityHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GravityHandler", GravityHandler = (_dec = ccclass('GravityHandler'), _dec(_class = class GravityHandler extends (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
        error: Error()
      }), SingletonComponent) : SingletonComponent) {
        onLoad() {
          super.onLoad();
        }

        async applyGravity() {
          const grid = (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
            error: Error()
          }), GridManager) : GridManager).getInstance().grid;
          console.log(grid);

          for (let col = 0; col < grid[0].length; col++) {
            for (let row = grid.length - 1; row > 0; row--) {
              if (grid[row][col] === null && grid[row][col].node !== null && grid[row - 1][col].node !== null) {
                console.log("aaaa");
                await this.movePieceDown(row - 1, col, grid); // moved = true;
              }
            }
          }

          return;
          let moved = false;

          do {
            moved = false;

            for (let col = 0; col < grid[0].length; col++) {
              for (let row = grid.length - 1; row > 0; row--) {
                if (grid[row][col] === null && grid[row - 1][col] !== null) {
                  await this.movePieceDown(row - 1, col, grid);
                  moved = true;
                }
              }
            }
          } while (moved); // await this.fillEmptySpaces();

        }

        async movePieceDown(row, col, grid) {
          const piece = grid[row][col];

          if (piece) {
            const targetRow = this.findLowestEmptyRow(col, row, grid);

            if (targetRow !== row) {
              grid[targetRow][col] = piece;
              grid[row][col] = null;
              piece.row = targetRow;
              piece.updatePosition(); // await EffectManager.movePiece(piece.node, targetPos, 0.2);
            }
          }
        }

        findLowestEmptyRow(col, startRow, grid) {
          for (let row = grid.length - 1; row > startRow; row--) {
            if (grid[row][col] === null) {
              return row;
            }
          }

          return startRow;
        }
        /*
         async fillEmptySpaces() {
            for (let col = 0; col < grid[0].length; col++) {
                let emptyCount = 0;
                for (let row = 0; row < grid.length; row++) {
                    if (grid[row][col] === null) {
                        emptyCount++;
                    }
                }
                 for (let i = 0; i < emptyCount; i++) {
                    const newPieceNode = PiecePool.getInstance().getPiece();
                    if (!newPieceNode) {
                        console.error("PiecePool could not provide a new piece.");
                        continue;
                    }
                     const targetRow = this.findLowestEmptyRow(col, -1);
                    const newPiece = new Piece(targetRow, col, newPieceNode);
                    grid[targetRow][col] = newPiece;
                     const startPos = gridManager.getPositionForCell(-1, col);
                    const targetPos = gridManager.getPositionForCell(targetRow, col);
                     newPiece.node.setPosition(startPos);
                    await EffectManager.movePiece(newPiece.node, targetPos, 0.2);
                }
            }
        }
             */


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=40bcb92da0ba1e7e1e45c6ce87433f57367b5a43.js.map