System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, CCInteger, PiecesPool, EffectManager, InteractionManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GridGenerator;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "piecesPool", _descriptor, this);

          this.PIECE_CONTENT_SIZE = 100;

          _initializerDefineProperty(this, "GRID_ROW", _descriptor2, this);

          this.interactionManager = new (_crd && InteractionManager === void 0 ? (_reportPossibleCrUseOfInteractionManager({
            error: Error()
          }), InteractionManager) : InteractionManager)();
        }

        start() {
          //!TODO: grid yerleşmesini ve content size'ı responsive yapmalıyız
          this.node.setPosition(-450, -450);
          var grid = this.generateGrid();
        }

        generateGrid() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var grid = [];

            for (var row = 0; row < _this.GRID_ROW; row++) {
              grid[row] = [];
              var piecesInRow = [];

              var _loop = function _loop(col) {
                //başlangıçta match olmama durumlarını kontrol ediyoruz
                var piece = void 0;

                do {
                  piece = _this.piecesPool.getPieceFromPool();
                  piece.setParent(_this.node);
                } while (_this.createsMatch(piece, row, col, grid)); //tween animasyonu için başlangıç ve bitiş pozisyonu belirliyoruz


                var pieceLastPosition = _this.getCenteredPosition(col, row);

                var pieceFirstPosition = new Vec3(pieceLastPosition.x, _this.GRID_ROW * _this.PIECE_CONTENT_SIZE);
                piece.setPosition(pieceFirstPosition); //piecelere event listener ekliyoruz
                // piece.on(Node.EventType.TOUCH_START, this.onPieceClicked, this);

                piece.on(Node.EventType.TOUCH_START, event => {
                  _this.interactionManager.onPieceClicked(event, piece);
                });
                grid[row][col] = piece;
                var pieceProps = {
                  piece: piece,
                  targetPosition: pieceLastPosition
                };
                piecesInRow.push(pieceProps); //tek tek düşmeleri
                // await EffectManager.fallPieceToGridPosition(piece , pieceLastPosition , 0.05 ,  10)
              };

              for (var col = 0; col < _this.GRID_ROW; col++) {
                _loop(col);
              }

              yield (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).animateRowFall(piecesInRow, 0.1);
            }
          })();
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
          var _j = j * this.PIECE_CONTENT_SIZE; //- ((this.PIECE_CONTENT_SIZE * 4.5))//(Math.round(this.GRID_ROW / 2))) )


          var _i = i * this.PIECE_CONTENT_SIZE; //- ((this.PIECE_CONTENT_SIZE * 4.5))//(Math.round(this.GRID_ROW / 2))) ) 


          return new Vec3(_j, _i);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "piecesPool", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GRID_ROW", [_dec3], {
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
//# sourceMappingURL=c9bccac01aceb6922844ccf0372744ac39978298.js.map