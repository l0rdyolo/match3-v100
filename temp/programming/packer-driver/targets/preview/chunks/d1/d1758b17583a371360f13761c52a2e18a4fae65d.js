System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PoolHelper, _crd;

  function _reportPossibleCrUseOfPoolable(extras) {
    _reporterNs.report("Poolable", "../SooLib/Optimization/Poolable", _context.meta, extras);
  }

  _export("PoolHelper", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cad6aZbjk5DKoK0y+sHQ4WJ", "PoolHelper", undefined);

      __checkObsolete__(['Node']);

      _export("PoolHelper", PoolHelper = class PoolHelper {
        static registerPool(poolableType, poolableInstance) {
          this.pools.set(poolableType, poolableInstance);
        }

        static get(poolableType) {
          var poolableInstance = this.pools.get(poolableType);

          if (!poolableInstance) {
            throw new Error("No pool registered for type: " + poolableType.name);
          }

          return poolableInstance.Pool.get();
        }

        static release(poolableType, obj) {
          var poolableInstance = this.pools.get(poolableType);

          if (!poolableInstance) {
            throw new Error("No pool registered for type: " + poolableType.name);
          }

          poolableInstance.Pool.release(obj);
        }

      });

      PoolHelper.pools = new Map();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1758b17583a371360f13761c52a2e18a4fae65d.js.map