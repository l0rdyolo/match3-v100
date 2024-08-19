System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, EasyLevels, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GridGenerator;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEasyLevels(extras) {
    _reporterNs.report("EasyLevels", "../Levels/EasyLevels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelData(extras) {
    _reporterNs.report("LevelData", "../Levels/LevelData", _context.meta, extras);
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
    }, function (_unresolved_2) {
      EasyLevels = _unresolved_2.EasyLevels;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1d2cLMbEBBcKsAfI+8VjC+", "GridGenerator", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'instantiate', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridGenerator", GridGenerator = (_dec = ccclass("GridGenerator"), _dec2 = property(Node), _dec(_class = (_class2 = class GridGenerator extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "dummyCandy", _descriptor, this);
        }

        start() {
          this.setNodeActive(this.dummyCandy, true);
          this.testEffects();
        }

        update(deltaTime) {}

        setNodeActive(settingNode, isActive) {
          settingNode.active = isActive;
        }

        async testEffects() {
          // EffectManager.decreaseScale(this.dummyCandy,0.2,true);
          // EffectManager.downCellPosition(this.dummyCandy,0.3);
          console.log((_crd && EasyLevels === void 0 ? (_reportPossibleCrUseOfEasyLevels({
            error: Error()
          }), EasyLevels) : EasyLevels).level[1].rows);
          const levelData = (_crd && EasyLevels === void 0 ? (_reportPossibleCrUseOfEasyLevels({
            error: Error()
          }), EasyLevels) : EasyLevels).level[1];

          for (let row = 0; row < levelData.rows; row++) {
            for (let col = 0; col < levelData.cols; col++) {
              const assetType = levelData.grid[row][col];
              console.log("type : " + assetType + " açınız.");
              return;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dummyCandy", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b2a64cc39a76de88ae3d150378eb51a7ea99c94d.js.map