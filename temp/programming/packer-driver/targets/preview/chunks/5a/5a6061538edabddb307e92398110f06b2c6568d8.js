System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Poolable, _decorator, Component, _dec, _class, _descriptor, _crd, ccclass, property, ObjectSpawner;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPoolable(extras) {
    _reporterNs.report("Poolable", "../../Optimization/Pool/Poolable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubject(extras) {
    _reporterNs.report("Subject", "../Observer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIObjectRepository(extras) {
    _reporterNs.report("IObjectRepository", "./ObjectRepository", _context.meta, extras);
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
      Poolable = _unresolved_2.Poolable;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f24avT3TlOsY/NgkdwjMIn", "Spawner", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ObjectSpawner", ObjectSpawner = (_dec = property(_crd && Poolable === void 0 ? (_reportPossibleCrUseOfPoolable({
        error: Error()
      }), Poolable) : Poolable), (_class = class ObjectSpawner extends Component {
        constructor() {
          super(...arguments);
          this.repo = void 0;
          this.spawnSubject = void 0;

          _initializerDefineProperty(this, "poolable", _descriptor, this);
        }

        notifySpawned(object) {
          this.spawnSubject.onNext(object);
        }
        /* public subscribeToSpawnEvents(observer: IObserver<T>): void {
            this.spawnSubject.subscribe(observer);
        } */


      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "poolable", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a6061538edabddb307e92398110f06b2c6568d8.js.map