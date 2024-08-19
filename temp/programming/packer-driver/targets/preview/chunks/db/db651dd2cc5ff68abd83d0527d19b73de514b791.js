System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, InGameAssets;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "333f3ww77FFhb7njf9xJE7O", "InGameAssets", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InGameAssets", InGameAssets = (_dec = ccclass('InGameAssets'), _dec2 = property({
        type: [Prefab]
      }), _dec3 = property({
        type: [Prefab]
      }), _dec4 = property({
        type: [Prefab]
      }), _dec(_class = (_class2 = (_class3 = class InGameAssets extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "candies", _descriptor, this);

          _initializerDefineProperty(this, "blocks", _descriptor2, this);

          _initializerDefineProperty(this, "bombs", _descriptor3, this);
        }

        onLoad() {
          this.candies.forEach((prefab, index) => {
            InGameAssets.prefabMap.set("Candy" + (index + 1), prefab);
          });
          this.blocks.forEach((prefab, index) => {
            InGameAssets.prefabMap.set("Block" + (index + 1), prefab);
          });
          this.bombs.forEach((prefab, index) => {
            InGameAssets.prefabMap.set("Bomb" + (index + 1), prefab);
          });
        }

      }, _class3.prefabMap = new Map(), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "candies", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blocks", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bombs", [_dec4], {
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
//# sourceMappingURL=db651dd2cc5ff68abd83d0527d19b73de514b791.js.map