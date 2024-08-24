System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Prefab, Vec3, Quat, ObjectPooling, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Poolable;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIObjectPool(extras) {
    _reporterNs.report("IObjectPool", "./ObjectPooling", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPooling(extras) {
    _reporterNs.report("ObjectPooling", "./ObjectPooling", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
    }, function (_unresolved_2) {
      ObjectPooling = _unresolved_2.ObjectPooling;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "022fapm7cRL9bc8grjIkADo", "Poolable", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'instantiate', 'Prefab', 'Vec3', 'Quat']);

      ({
        ccclass,
        property
      } = _decorator); // Define the Poolable abstract class

      _export("Poolable", Poolable = (_dec = ccclass('Poolable'), _dec2 = property(Prefab), _dec(_class = (_class2 = class Poolable extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "poolObject", _descriptor, this);

          _initializerDefineProperty(this, "maxCount", _descriptor2, this);

          this.pool = void 0;
        }

        get Pool() {
          return this.pool;
        }

        onObjectAcquired(obj) {
          obj.active = true; // other logics ...
        }

        onObjectReleased(obj) {
          obj.active = false;
          obj.setParent(this.node);
          obj.setPosition(Vec3.ZERO);
          obj.setScale(Vec3.ONE);
          obj.setRotation(new Quat()); // other logics ...
        }

        creator() {
          var obj = instantiate(this.poolObject);
          obj.setParent(this.node);
          return obj;
        }

        onLoad() {
          var list = [];

          for (var i = 0; i < this.maxCount; i++) {
            var obj = this.creator();
            obj.active = false;
            list.push(obj);
          }

          this.pool = new (_crd && ObjectPooling === void 0 ? (_reportPossibleCrUseOfObjectPooling({
            error: Error()
          }), ObjectPooling) : ObjectPooling)(() => this.creator(), obj => this.onObjectAcquired(obj), obj => this.onObjectReleased(obj), list, this.maxCount, this.maxCount);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "poolObject", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b0b7790fec7d05d3f42d22fad048243067f09e57.js.map