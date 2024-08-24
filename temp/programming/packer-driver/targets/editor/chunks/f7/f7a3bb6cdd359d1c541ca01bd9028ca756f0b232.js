System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PiecePool;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "532b1kgDh5C2Jrr5X5gAyFY", "PiecePool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       //! todo
       *  bu sınıfı singelton yapalım.
       * 
       */

      _export("PiecePool", PiecePool = (_dec = ccclass('PiecePool'), _dec2 = property([Prefab]), _dec(_class = (_class2 = class PiecePool extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "piecesPrefabs", _descriptor, this);

          this.pool = [];
        }

        getRandomPrefab() {
          const randomIndex = Math.floor(Math.random() * this.piecesPrefabs.length);
          return this.piecesPrefabs[randomIndex];
        }

        getPiece() {
          if (this.pool.length > 0) {
            const piece = this.pool.pop(); // piece!.active = true; 

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
//# sourceMappingURL=f7a3bb6cdd359d1c541ca01bd9028ca756f0b232.js.map