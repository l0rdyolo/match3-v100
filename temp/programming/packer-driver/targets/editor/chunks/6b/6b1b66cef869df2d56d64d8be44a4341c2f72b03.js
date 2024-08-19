System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, CCInteger, PiecesPool, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GridGenerator;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPiecesPool(extras) {
    _reporterNs.report("PiecesPool", "../Poolable/PiecesPool", _context.meta, extras);
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
        }

        start() {
          const grid = this.generateGrid(); // Further grid management tasks can be handled here.
        }

        generateGrid() {
          const grid = [];

          for (let i = 0; i < this.GRID_ROW; i++) {
            const row = [];

            for (let j = 0; j < this.GRID_ROW; j++) {
              const piece = this.piecesPool.getPieceFromPool();

              const _position = this.getCenteredPosition(j, i);

              console.log(_position);
              piece.setPosition(_position); // Add click event listener

              piece.on(Node.EventType.TOUCH_END, this.onPieceClicked, this);
              row.push(piece);
            }

            grid.push(row);
          }

          return grid;
        }

        onPieceClicked(event) {
          const clickedPiece = event.currentTarget;
          console.log(`Piece clicked at position: ${clickedPiece.getPosition()}`); // Implement what happens when a piece is clicked.
        }

        getCenteredPosition(j, i) {
          //EVERY game board should be square matrix
          const _j = j * this.PIECE_CONTENT_SIZE - this.PIECE_CONTENT_SIZE * 2;

          const _i = i * this.PIECE_CONTENT_SIZE - this.PIECE_CONTENT_SIZE * 2;

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
//# sourceMappingURL=6b1b66cef869df2d56d64d8be44a4341c2f72b03.js.map