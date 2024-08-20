System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ObjectPooling, _crd;

  _export("ObjectPooling", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da7a9C1Y0NOnZ7hw5IpjgC3", "ObjectPooling", undefined);

      __checkObsolete__(['Component', 'Node']);

      _export("ObjectPooling", ObjectPooling = class ObjectPooling {
        get size() {
          return this.objectQueue.length;
        }

        constructor(createObject, initObject, recycleObject, values, initialSize = 10, maxSize = 1000) {
          this.createObject = void 0;
          this.initObject = void 0;
          this.recycleObject = void 0;
          this.onObjectAcquired = [];
          this.objectQueue = [];
          this.maxSize = void 0;

          if (!createObject) {
            throw new Error("The createObject cannot be null");
          }

          if (initialSize < 0) {
            throw new Error("The initialSize cannot be negative");
          }

          this.createObject = createObject;
          this.initObject = initObject;
          this.recycleObject = recycleObject;
          this.maxSize = maxSize;

          if (values) {
            for (let value of values) {
              this.objectQueue.push(value);
            }
          }
        }

        get() {
          var _this$initObject;

          let obj;

          if (this.objectQueue.length === 0) {
            obj = this.createObject();
          } else {
            obj = this.objectQueue.shift();
          }

          (_this$initObject = this.initObject) == null ? void 0 : _this$initObject.call(this, obj);
          this.onObjectAcquired.forEach(callback => callback(obj));
          return obj;
        }

        release(obj) {
          var _this$recycleObject;

          if (!obj) {
            throw new Error("Object cannot be null");
          }

          if (this.objectQueue.indexOf(obj) !== -1) {
            throw new Error("Problem while releasing object: Element which you want to release is already released.");
          }

          if (this.size < this.maxSize) {
            this.objectQueue.push(obj);
          }

          (_this$recycleObject = this.recycleObject) == null ? void 0 : _this$recycleObject.call(this, obj);
        }

        addOnObjectAcquiredListener(callback) {
          this.onObjectAcquired.push(callback);
        }

        removeOnObjectAcquiredListener(callback) {
          this.onObjectAcquired = this.onObjectAcquired.filter(listener => listener !== callback);
        }

        clear() {
          this.objectQueue.length = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=494e7bb215655f44e518c0b0acd21d33b476ad7b.js.map