System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Poolable, _dec, _class, _crd, ccclass, property, CandyPool;

  function _reportPossibleCrUseOfPoolable(extras) {
    _reporterNs.report("Poolable", "../../SooLib/Optimization/Poolable", _context.meta, extras);
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
      Poolable = _unresolved_2.Poolable;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "183c3xHo3dIW6qCUrp9YICL", "CandyPool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CandyPool", CandyPool = (_dec = ccclass('CandyPool'), _dec(_class = class CandyPool extends (_crd && Poolable === void 0 ? (_reportPossibleCrUseOfPoolable({
        error: Error()
      }), Poolable) : Poolable) {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fceb7d4e3c3744c0798158333c2b65b4763d879.js.map