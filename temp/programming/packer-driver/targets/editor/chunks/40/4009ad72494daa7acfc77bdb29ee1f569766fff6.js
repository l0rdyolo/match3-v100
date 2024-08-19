System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Poolable, _dec, _class, _crd, ccclass, property, PiecesPool;

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

      _cclegacy._RF.push({}, "68d77fYk0FG663+V11zyFuG", "PiecesPool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PiecesPool", PiecesPool = (_dec = ccclass('PiecesPool'), _dec(_class = class PiecesPool extends (_crd && Poolable === void 0 ? (_reportPossibleCrUseOfPoolable({
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
//# sourceMappingURL=4009ad72494daa7acfc77bdb29ee1f569766fff6.js.map