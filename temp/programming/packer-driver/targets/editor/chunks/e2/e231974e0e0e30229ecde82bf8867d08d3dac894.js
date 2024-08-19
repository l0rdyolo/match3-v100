System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, EasyLevels;

  function _reportPossibleCrUseOfLevelData(extras) {
    _reporterNs.report("LevelData", "./LevelData", _context.meta, extras);
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

      _cclegacy._RF.push({}, "64729reoghK0I7OZ4ziwxhg", "EasyLevels", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EasyLevels", EasyLevels = (_dec = ccclass("EasyLevels"), _dec(_class = (_class2 = class EasyLevels extends Component {}, _class2.levels = {
        //-------------------------------------
        1: {
          rows: 5,
          cols: 5,
          grid: [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]]
        },
        //-------------------------------------
        2: {
          rows: 5,
          cols: 5,
          grid: [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]]
        },
        //-------------------------------------
        3: {
          rows: 8,
          cols: 8,
          grid: [[0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
        } //-------------------------------------

      }, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e231974e0e0e30229ecde82bf8867d08d3dac894.js.map