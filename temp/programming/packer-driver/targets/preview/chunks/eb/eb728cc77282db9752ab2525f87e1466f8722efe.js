System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GridManager, SingletonComponent, _dec, _class, _crd, ccclass, property, GravityHandler;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);
          this.grid = [];
          this.gridManager = void 0;
        }

        onLoad() {
          super.onLoad();
          this.gridManager = (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
            error: Error()
          }), GridManager) : GridManager).getInstance();
          this.grid = this.gridManager.grid;
        }

        applyGravity() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var moved = false;

            do {
              moved = false;

              for (var col = 0; col < _this.grid[0].length; col++) {
                for (var row = _this.grid.length - 1; row > 0; row--) {
                  if (_this.grid[row][col] === null && _this.grid[row - 1][col] !== null) {
                    // await this.movePieceDown(row - 1, col);
                    moved = true;
                  }
                }
              }
            } while (moved); // await this.fillEmptySpaces();

          })();
        }
        /* async movePieceDown(row: number, col: number) {
             const piece = this.grid[row][col];
             if (piece) {
                 const targetRow = this.findLowestEmptyRow(col, row);
                 if (targetRow !== row) {
                     this.grid[targetRow][col] = piece;
                     this.grid[row][col] = null;
                      piece.row = targetRow;
                     const targetPos = this.gridManager.getPositionForCell(targetRow, col);
                     await EffectManager.movePiece(piece.node, targetPos, 0.2);
                 }
             }
         }
         
         findLowestEmptyRow(col: number, startRow: number): number {
             for (let row = this.grid.length - 1; row > startRow; row--) {
                 if (this.grid[row][col] === null) {
                     return row;
                 }
             }
             return startRow;
         }
          async fillEmptySpaces() {
             for (let col = 0; col < this.grid[0].length; col++) {
                 let emptyCount = 0;
                 for (let row = 0; row < this.grid.length; row++) {
                     if (this.grid[row][col] === null) {
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
                     this.grid[targetRow][col] = newPiece;
                      const startPos = this.gridManager.getPositionForCell(-1, col);
                     const targetPos = this.gridManager.getPositionForCell(targetRow, col);
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
//# sourceMappingURL=eb728cc77282db9752ab2525f87e1466f8722efe.js.map