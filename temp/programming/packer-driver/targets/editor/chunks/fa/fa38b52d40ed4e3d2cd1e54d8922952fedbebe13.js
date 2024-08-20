System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Prefab, instantiate, SingletonComponent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PiecePool;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../SingeltonComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      SingletonComponent = _unresolved_2.SingletonComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "532b1kgDh5C2Jrr5X5gAyFY", "PiecePool", undefined);

      __checkObsolete__(['_decorator', 'Prefab', 'instantiate', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       //! todo
       *  bu sınıfı singelton yapalım.
       * 
       */

      _export("PiecePool", PiecePool = (_dec = ccclass('PiecePool'), _dec2 = property([Prefab]), _dec(_class = (_class2 = class PiecePool extends (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
        error: Error()
      }), SingletonComponent) : SingletonComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "piecesPrefabs", _descriptor, this);

          this.pool = [];
        }

        static get Instance() {
          return super.Instance;
        }

        getRandomPrefab() {
          const randomIndex = Math.floor(Math.random() * this.piecesPrefabs.length);
          return this.piecesPrefabs[randomIndex];
        }

        getPiece() {
          if (this.pool.length > 0) {
            const piece = this.pool.pop();
            piece.active = true;
            return piece;
          } else {
            const prefab = this.getRandomPrefab();
            return instantiate(prefab);
          }
        }

        returnPiece(piece) {
          piece.active = false;
          this.pool.push(piece);
        }

        clearAll() {
          this.pool.forEach(piece => piece.destroy());
          this.pool = [];
        }

        onLoad() {
          super.onLoad();

          if (this.piecesPrefabs.length === 0) {
            console.warn("there is no piece prefabs");
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "piecesPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fa38b52d40ed4e3d2cd1e54d8922952fedbebe13.js.map