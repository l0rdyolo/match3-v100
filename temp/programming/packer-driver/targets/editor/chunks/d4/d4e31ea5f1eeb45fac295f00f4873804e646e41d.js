System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, CCInteger, Piece, PieceTypes, PiecePool, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GridGenerator;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPieceTypes(extras) {
    _reporterNs.report("PieceTypes", "../Piece/PieceTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPiecePool(extras) {
    _reporterNs.report("PiecePool", "../Piece/PiecePool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGrid(extras) {
    _reporterNs.report("IGrid", "./IGrid", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      CCInteger = _cc.CCInteger;
    }, function (_unresolved_2) {
      Piece = _unresolved_2.Piece;
    }, function (_unresolved_3) {
      PieceTypes = _unresolved_3.PieceTypes;
    }, function (_unresolved_4) {
      PiecePool = _unresolved_4.PiecePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1d2cLMbEBBcKsAfI+8VjC+", "GridGenerator", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'CCInteger']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridGenerator", GridGenerator = (_dec = ccclass("GridGenerator"), _dec2 = property(CCInteger), _dec3 = property(CCInteger), _dec(_class = (_class2 = class GridGenerator extends Component {
        constructor(...args) {
          super(...args);
          this.grid = [];

          _initializerDefineProperty(this, "width", _descriptor, this);

          _initializerDefineProperty(this, "height", _descriptor2, this);
        }

        //! todo rowları tweenleyebiliriz
        Generate() {
          for (let row = 0; row < this.height; row++) {
            // `height` ve `width` değişti
            this.grid[row] = [];

            for (let col = 0; col < this.width; col++) {
              // `width` ve `height` değişti
              const piece = this.createPiece(row, col);
              this.grid[row][col] = piece;
              piece.node.setScale(Vec3.ZERO);
              piece.Highlight(0.5, Vec3.ONE);
            }
          }

          return this.grid;
        }

        createPiece(row, col) {
          let pieceNode;
          let piece;

          do {
            pieceNode = (_crd && PiecePool === void 0 ? (_reportPossibleCrUseOfPiecePool({
              error: Error()
            }), PiecePool) : PiecePool).getInstance().getPiece();

            if (!pieceNode) {
              console.error("Piece could not be instantiated.");
              continue;
            }

            piece = new (_crd && Piece === void 0 ? (_reportPossibleCrUseOfPiece({
              error: Error()
            }), Piece) : Piece)(row, col, pieceNode, (_crd && PieceTypes === void 0 ? (_reportPossibleCrUseOfPieceTypes({
              error: Error()
            }), PieceTypes) : PieceTypes).Normal);
            piece.init();
            piece.node.setParent(this.node);
            this.node.addChild(piece.node);
          } while (this.createsMatch(piece, row, col, this.grid));

          return piece;
        }

        createsMatchByName(piece, row, col, grid) {
          var _grid$col, _grid$col2, _grid$row, _grid$row2;

          let isMatch = false;

          if (row >= 2 && ((_grid$col = grid[row - 1][col]) == null ? void 0 : _grid$col.node.name) === piece.node.name && ((_grid$col2 = grid[row - 2][col]) == null ? void 0 : _grid$col2.node.name) === piece.node.name) {
            isMatch = true;
          }

          if (col >= 2 && ((_grid$row = grid[row][col - 1]) == null ? void 0 : _grid$row.node.name) === piece.node.name && ((_grid$row2 = grid[row][col - 2]) == null ? void 0 : _grid$row2.node.name) === piece.node.name) {
            isMatch = true;
          }

          if (isMatch) (_crd && PiecePool === void 0 ? (_reportPossibleCrUseOfPiecePool({
            error: Error()
          }), PiecePool) : PiecePool).getInstance().returnPiece(piece.node);
          return isMatch;
        }

        createsMatch(piece, row, col, grid) {
          return this.createsMatchByName(piece, row, col, grid);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "width", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "height", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4e31ea5f1eeb45fac295f00f4873804e646e41d.js.map