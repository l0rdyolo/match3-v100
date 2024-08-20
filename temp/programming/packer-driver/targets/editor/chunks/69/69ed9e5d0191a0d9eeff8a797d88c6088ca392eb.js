System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GridGenerator, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GridManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGridGenerator(extras) {
    _reporterNs.report("GridGenerator", "./GridGenerator", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GridGenerator = _unresolved_2.GridGenerator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9fa1Wwj/hGb6gkyGGD9iv0", "GridManager", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridManager", GridManager = (_dec = ccclass('GridManager'), _dec2 = property(_crd && GridGenerator === void 0 ? (_reportPossibleCrUseOfGridGenerator({
        error: Error()
      }), GridGenerator) : GridGenerator), _dec(_class = (_class2 = class GridManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gridGenerator", _descriptor, this);
        }

        onLoad() {}

        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gridGenerator", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=69ed9e5d0191a0d9eeff8a797d88c6088ca392eb.js.map