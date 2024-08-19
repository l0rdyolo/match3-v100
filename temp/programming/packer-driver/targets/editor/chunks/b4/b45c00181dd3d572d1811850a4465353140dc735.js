System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, CCInteger, PiecesPool, EffectManager, InteractionManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GridGenerator;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPiecesPool(extras) {
    _reporterNs.report("PiecesPool", "../Poolable/PiecesPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../Effects/EffectManager", _context.meta, extras);
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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      CCInteger = _cc.CCInteger;
    }, function (_unresolved_2) {
      PiecesPool = _unresolved_2.PiecesPool;
    }, function (_unresolved_3) {
      EffectManager = _unresolved_3.EffectManager;
    }, function (_unresolved_4) {
      InteractionManager = _unresolved_4.InteractionManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1d2cLMbEBBcKsAfI+8VjC+", "GridGenerator", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'systemEvent', 'SystemEventType', 'EventTouch', 'Vec2', 'CCInteger']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridGenerator", GridGenerator = (_dec = ccclass('GridGenerator'), _dec2 = property(_crd && PiecesPool === void 0 ? (_reportPossibleCrUseOfPiecesPool({
        error: Error()
      }), PiecesPool) : PiecesPool), _dec3 = property(CCInteger), _dec(_class = (_class2 = class GridGenerator extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "piecesPool", _descriptor, this);

          this.PIECE_CONTENT_SIZE = 100;

          _initializerDefineProperty(this, "GRID_ROW", _descriptor2, this);

          this.interactionManager = new (_crd && InteractionManager === void 0 ? (_reportPossibleCrUseOfInteractionManager({
            error: Error()
          }), InteractionManager) : InteractionManager)();
        }

        start() {
          this.node.setPosition(-500, 0);
          const grid = this.generateGrid();
        }

        async generateGrid() {
          const grid = [];

          for (let row = 0; row < this.GRID_ROW; row++) {
            grid[row] = [];
            const piecesInRow = [];

            for (let col = 0; col < this.GRID_ROW; col++) {
              //başlangıçta match olmama durumlarını kontrol ediyoruz
              let piece;

              do {
                piece = this.piecesPool.getPieceFromPool();
                piece.setParent(this.node);
              } while (this.createsMatch(piece, row, col, grid)); //tween animasyonu için başlangıç ve bitiş pozisyonu belirliyoruz


              const pieceLastPosition = this.getCenteredPosition(col, row);
              const pieceFirstPosition = new Vec3(pieceLastPosition.x, this.GRID_ROW * this.PIECE_CONTENT_SIZE);
              piece.setPosition(pieceFirstPosition); //piecelere event listener ekliyoruz
              // piece.on(Node.EventType.TOUCH_START, this.onPieceClicked, this);

              piece.on(Node.EventType.TOUCH_START, event => {
                this.interactionManager.onPieceClicked(event, piece);
              });
              grid[row][col] = piece;
              const pieceProps = {
                piece: piece,
                targetPosition: pieceLastPosition
              };
              piecesInRow.push(pieceProps); //tek tek düşmeleri
              // await EffectManager.fallPieceToGridPosition(piece , pieceLastPosition , 0.05 ,  10)
            }

            await (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).animateRowFall(piecesInRow, 0.1);
          }
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
          const _j = j * this.PIECE_CONTENT_SIZE; //- ((this.PIECE_CONTENT_SIZE * 4.5))//(Math.round(this.GRID_ROW / 2))) )


          const _i = i * this.PIECE_CONTENT_SIZE; //- ((this.PIECE_CONTENT_SIZE * 4.5))//(Math.round(this.GRID_ROW / 2))) ) 


          return new Vec3(_j, _i);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "piecesPool", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GRID_ROW", [_dec3], {
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
//# sourceMappingURL=b45c00181dd3d572d1811850a4465353140dc735.js.map