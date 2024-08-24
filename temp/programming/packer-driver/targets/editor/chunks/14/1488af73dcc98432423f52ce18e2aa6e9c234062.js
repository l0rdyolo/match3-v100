System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, TouchEvents, _crd;

  _export("TouchEvents", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc763Y20hpAAr4SNJ34aYHu", "TouchEvents", undefined);

      __checkObsolete__(['NodeEventType', 'EventTouch', 'Node']);

      _export("TouchEvents", TouchEvents = class TouchEvents {
        constructor(node) {
          this.handlers = new Map();
          this.node = node;
        }

        register(eventTypeOrEvents, handler) {
          if (Array.isArray(eventTypeOrEvents)) {
            for (const [eventType, handler] of eventTypeOrEvents) {
              this.handlers.set(eventType, handler);
              this.node.on(eventType, handler, this);
            }
          } else {
            this.handlers.set(eventTypeOrEvents, handler);
            this.node.on(eventTypeOrEvents, handler, this);
          }
        }

        unregister(eventType) {
          const handler = this.handlers.get(eventType);

          if (handler) {
            this.node.off(eventType, handler, this);
            this.handlers.delete(eventType);
          }
        }

        registerAll() {
          for (const [eventType, handler] of this.handlers) {
            this.node.on(eventType, handler, this);
          }
        }

        unregisterAll() {
          for (const [eventType, handler] of this.handlers) {
            this.node.off(eventType, handler, this);
          }

          this.handlers.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1488af73dcc98432423f52ce18e2aa6e9c234062.js.map