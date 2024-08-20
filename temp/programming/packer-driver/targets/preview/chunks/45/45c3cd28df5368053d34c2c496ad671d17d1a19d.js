System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, CCInteger, InteractionManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GridGenerator;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPiecesPool(extras) {
    _reporterNs.report("PiecesPool", "../Poolable/PiecesPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInteractionManager(extras) {
    _reporterNs.report("InteractionManager", "../Interaction/InteractionManager", _context.meta, extras);
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
      InteractionManager = _unresolved_2.InteractionManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1d2cLMbEBBcKsAfI+8VjC+", "GridGenerator", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'CCInteger']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridGenerator", GridGenerator = (_dec = ccclass('GridManager'), _dec2 = property(CCInteger), _dec3 = property(CCInteger), _dec(_class = (_class2 = class GridGenerator extends Component {
        constructor() {
          super(...arguments);
          this.grid = [];
          this.piecesPool = null;
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
            for (var row = 0; row < _this.height; row++) {
              var piece = _this.createPiece(row, 0);
            } // for (let row = 0; row < this.GRID_ROW; row++) {
            //   this.grid[row] = [];
            //   const piecesInRow: PieceProps[] = [];
            //   for (let col = 0; col < this.GRID_ROW; col++) {
            //     const piece: Node = this.createPiece(row, col);
            //     this.grid[row][col] = piece;
            //     const pieceLastPosition = this.getCenteredPosition(col, row);
            //     const pieceFirstPosition = new Vec3(
            //       pieceLastPosition.x,
            //       this.GRID_ROW * this.PIECE_CONTENT_SIZE
            //     );
            //     piece.setPosition(pieceFirstPosition);
            //     //piecelere event listener ekliyoruz
            //     // piece.on(Node.EventType.TOUCH_START, this.onPieceClicked, this);
            //     piece.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
            //       this.interactionManager.onPieceClicked(event, piece , this.gridMap);
            //     });
            //     this.grid[row][col] = piece;
            //     const pieceProps: PieceProps = {
            //       piece: piece,
            //       targetPosition: pieceLastPosition,
            //     };
            //     piecesInRow.push(pieceProps);
            //   }
            //   await EffectManager.animateRowFall(piecesInRow, 0.1);
            // }

          })();
        } //bu fonksiyon init olurken match var mı diye kontrol edip piece üretiyor.


        createPiece(row, col) {
          var piece;

          do {
            piece = this.piecesPool.getPieceFromPool();
            piece.setParent(this.node);
          } while (this.createsMatch(piece, row, col, this.grid));

          piece.setPosition(this.getCenteredPosition(col, row));
          this.node.addChild(piece);
          return piece;
        }

        createsMatch(piece, row, col, grid) {
          var _grid$col, _grid$col2, _grid$row, _grid$row2;

          if (row >= 2 && ((_grid$col = grid[row - 1][col]) == null ? void 0 : _grid$col.name) === piece.name && ((_grid$col2 = grid[row - 2][col]) == null ? void 0 : _grid$col2.name) === piece.name) {
            this.piecesPool.returnPieceToPool(piece);
            return true;
          }

          if (col >= 2 && ((_grid$row = grid[row][col - 1]) == null ? void 0 : _grid$row.name) === piece.name && ((_grid$row2 = grid[row][col - 2]) == null ? void 0 : _grid$row2.name) === piece.name) {
            this.piecesPool.returnPieceToPool(piece);
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
//# sourceMappingURL=45c3cd28df5368053d34c2c496ad671d17d1a19d.js.map