System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SingletonComponent, NotExistEventException, _dec, _class, _crd, ccclass, property, EventManager;

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../../Legacy/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotExistEventException(extras) {
    _reporterNs.report("NotExistEventException", "./ExistEventException", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEventListener(extras) {
    _reporterNs.report("IEventListener", "./IEventListener", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      SingletonComponent = _unresolved_2.SingletonComponent;
    }, function (_unresolved_3) {
      NotExistEventException = _unresolved_3.NotExistEventException;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa615nWHalO0KwumQQW7Koo", "EventManager", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EventManager", EventManager = (_dec = ccclass('EventManager'), _dec(_class = class EventManager extends (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
        error: Error()
      }), SingletonComponent) : SingletonComponent) {
        constructor(...args) {
          super(...args);
          this.eventListeners = new Map();
        }

        onLoad() {
          super.onLoad();
        }

        addListener(eventType, listener) {
          if (!this.eventListeners.has(eventType)) {
            this.eventListeners.set(eventType, []);
          }

          this.eventListeners.get(eventType).push(listener);
        }

        removeListener(eventType, listener) {
          if (!this.eventListeners.has(eventType)) {
            throw new (_crd && NotExistEventException === void 0 ? (_reportPossibleCrUseOfNotExistEventException({
              error: Error()
            }), NotExistEventException) : NotExistEventException)(`Event <${eventType}> is not found to remove`);
          }

          const listeners = this.eventListeners.get(eventType);
          const index = listeners.indexOf(listener);

          if (index !== -1) {
            listeners.splice(index, 1);
          }
        }

        triggerEvent(eventType, eventData) {
          if (!this.eventListeners.has(eventType)) return;

          for (const listener of this.eventListeners.get(eventType)) {
            listener.onEvent(eventType, eventData);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1017fc88ed9c549e92374408f3e96fa6f9cb4b86.js.map