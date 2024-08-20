System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Prefab, Poolable, PoolHelper, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PiecesPool;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPoolable(extras) {
    _reporterNs.report("Poolable", "../../SooLib/Optimization/Poolable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolHelper(extras) {
    _reporterNs.report("PoolHelper", "../PoolHelper", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Poolable = _unresolved_2.Poolable;
    }, function (_unresolved_3) {
      PoolHelper = _unresolved_3.PoolHelper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68d77fYk0FG663+V11zyFuG", "PiecesPool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PiecesPool", PiecesPool = (_dec = ccclass("PiecesPool"), _dec2 = property([Prefab]), _dec(_class = (_class2 = class PiecesPool extends (_crd && Poolable === void 0 ? (_reportPossibleCrUseOfPoolable({
        error: Error()
      }), Poolable) : Poolable) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "piecesPrefabs", _descriptor, this);

          this.createIndex = 0;
        }

        creator() {
          this.createIndex = Math.floor(Math.random() * this.piecesPrefabs.length); // this.createIndex = (this.createIndex + 1) % this.piecesPrefabs.length;

          var obj = instantiate(this.piecesPrefabs[this.createIndex]);
          obj.setParent(this.node);
          return obj;
        }

        onLoad() {
          super.onLoad();
          (_crd && PoolHelper === void 0 ? (_reportPossibleCrUseOfPoolHelper({
            error: Error()
          }), PoolHelper) : PoolHelper).registerPool(PiecesPool, this);
        }

        getPieceFromPool() {
          var obj = this.creator();
          return obj;
        }

        returnPieceToPool(piece) {
          this.pool.release(piece);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "piecesPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=852f96a4e061d8116b752aa0b175da01baa37a80.js.map