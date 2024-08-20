System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, CCInteger, Piece, InteractionManager, PieceTypes, PiecePool, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GridGenerator;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInteractionManager(extras) {
    _reporterNs.report("InteractionManager", "../Interaction/InteractionManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPieceTypes(extras) {
    _reporterNs.report("PieceTypes", "../Piece/PieceTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPiecePool(extras) {
    _reporterNs.report("PiecePool", "../Piece/PiecePool", _context.meta, extras);
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
      InteractionManager = _unresolved_3.InteractionManager;
    }, function (_unresolved_4) {
      PieceTypes = _unresolved_4.PieceTypes;
    }, function (_unresolved_5) {
      PiecePool = _unresolved_5.PiecePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1d2cLMbEBBcKsAfI+8VjC+", "GridGenerator", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'CCInteger']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridGenerator", GridGenerator = (_dec = ccclass("GridManager"), _dec2 = property(CCInteger), _dec3 = property(CCInteger), _dec(_class = (_class2 = class GridGenerator extends Component {
        constructor() {
          super(...arguments);
          this.grid = [];
          this.PIECE_OFFSET = 5;

          _initializerDefineProperty(this, "width", _descriptor, this);

          _initializerDefineProperty(this, "height", _descriptor2, this);

          this.PIECE_CONTENT_SIZE = 100;
          this.interactionManager = new (_crd && InteractionManager === void 0 ? (_reportPossibleCrUseOfInteractionManager({
            error: Error()
          }), InteractionManager) : InteractionManager)();
        }

        start() {
          //!TODO: grid yerleşmesini ve content size'ı responsive yapmalıyız
          // this.node.setPosition(-7*50, -500);
          this.Generate();
        }

        Generate() {
          var _this = this;

          return _asyncToGenerator(function* () {
            for (var row = 0; row < _this.width; row++) {
              _this.grid[row] = [];

              for (var col = 0; col < _this.height; col++) {
                var pieceNode = _this.createPiece(row, col);

                var piece = new (_crd && Piece === void 0 ? (_reportPossibleCrUseOfPiece({
                  error: Error()
                }), Piece) : Piece)(row, col, pieceNode, (_crd && PieceTypes === void 0 ? (_reportPossibleCrUseOfPieceTypes({
                  error: Error()
                }), PieceTypes) : PieceTypes).Normal);
                _this.grid[row][col] = piece;
              }
            }
          })();
        } //bu fonksiyon init olurken match var mı diye kontrol edip piece üretiyor.


        createPiece(row, col) {
          var piece;

          do {
            piece = (_crd && PiecePool === void 0 ? (_reportPossibleCrUseOfPiecePool({
              error: Error()
            }), PiecePool) : PiecePool).Instance.getPiece();
            if (!piece) continue;
            piece.setParent(this.node);
            piece.setPosition(this.getCenteredPosition(col, row));
            this.node.addChild(piece);
          } while (this.createsMatch(piece, row, col, this.grid));

          return piece;
        }

        createsMatch(piece, row, col, grid) {
          var _grid$col, _grid$col2, _grid$row, _grid$row2;

          return false;

          if (row >= 2 && ((_grid$col = grid[row - 1][col]) == null ? void 0 : _grid$col.node.name) === piece.name && ((_grid$col2 = grid[row - 2][col]) == null ? void 0 : _grid$col2.node.name) === piece.name) {
            // this.piecesPool.returnPieceToPool(piece);
            return true;
          }

          if (col >= 2 && ((_grid$row = grid[row][col - 1]) == null ? void 0 : _grid$row.node.name) === piece.name && ((_grid$row2 = grid[row][col - 2]) == null ? void 0 : _grid$row2.node.name) === piece.name) {
            // this.piecesPool.returnPieceToPool(piece);
            return true;
          }

          return false;
        }

        getCenteredPosition(j, i) {
          //EVERY game board should be square matrix
          var _j = j * (this.PIECE_CONTENT_SIZE + this.PIECE_OFFSET); //- ((this.PIECE_CONTENT_SIZE * 4.5))//(Math.round(this.GRID_ROW / 2))) )


          var _i = i * (this.PIECE_CONTENT_SIZE + this.PIECE_OFFSET); //- ((this.PIECE_CONTENT_SIZE * 4.5))//(Math.round(this.GRID_ROW / 2))) )


          return new Vec3(_j, _i);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "width", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "height", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e8b033df634a39162e3c8fbb36fc7cb38ea90745.js.map