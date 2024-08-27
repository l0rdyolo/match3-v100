System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GridManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GravityHandler;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridManager(extras) {
    _reporterNs.report("GridManager", "../Grid/GridManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      GridManager = _unresolved_2.GridManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae996LRhyRNRYM94TseN4vN", "GravityHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GravityHandler", GravityHandler = (_dec = ccclass('GravityHandler'), _dec2 = property(_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
        error: Error()
      }), GridManager) : GridManager), _dec(_class = (_class2 = class GravityHandler extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gridManager", _descriptor, this);
        }

        applyGravity(matches) {
          const columnPieceCount = new Map();
          let col; // Sütunlarda kaç adet boşluk oluştuğunu hesapla

          for (const piece of matches) {
            col = piece.col;

            if (columnPieceCount.has(col)) {
              columnPieceCount.set(col, columnPieceCount.get(col) + 1);
            } else {
              columnPieceCount.set(col, 1);
            }
          }

          this.applyGravityToCol(col, columnPieceCount);
        }

        applyGravityToCol(col, columnPieceCount) {
          const emptySpaces = columnPieceCount.get(col);

          for (let i = 0; i < emptySpaces; i++) {
            this.applyGravityForSingleColumn(col, emptySpaces);
          }
        }

        applyGravityForSingleColumn(col, emptySpaces) {
          const grid = (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
            error: Error()
          }), GridManager) : GridManager).getInstance().grid;

          for (let row = grid.length - 1; row >= 0; row--) {
            const piece = grid[row][col];
            console.log(`${row}'deki piece ${piece}`);

            if (piece.node !== null && piece !== undefined) {
              const newRow = row + emptySpaces;

              if (newRow < grid.length) {
                console.log(`Moving piece at (row: ${row}, col: ${col}) to (row: ${newRow}, col: ${col})`); // Parçayı yeni yerine taşı

                piece.updatePosition(0, 0);
                grid[newRow][col] = piece;
                piece.row = newRow;
                grid[row][col] = null;
              }
            }
          } // Yeni parçalara yer açılması için boş kalan üst alanları doldur
          // for (let i = 0; i < emptySpaces; i++) {
          //     const newPiece = this.gridManager.createPiece(0, col);
          //     grid[i][col] = newPiece;
          //     console.log(`New piece created at (row: ${i}, col: ${col})`);
          // }

        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gridManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee10aa4ea7130513f604889f8cd1388b86716c00.js.map