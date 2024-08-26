System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, GridBackgroundGenerator;

  function _reportPossibleCrUseOfIGrid(extras) {
    _reporterNs.report("IGrid", "./IGrid", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6554aTvvk5PD5JoX+MN11XP", "GridBackgroundGenerator", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridBackgroundGenerator", GridBackgroundGenerator = (_dec = ccclass('GridBackgroundGenerator'), _dec(_class = class GridBackgroundGenerator extends Component {
        constructor() {
          super(...arguments);
          this.grid = void 0;
          this.width = void 0;
          this.height = void 0;
        }

        start() {}

        Generate() {
          return;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f1750611680ea70c4e63f58e86a2fc84d6abbfba.js.map