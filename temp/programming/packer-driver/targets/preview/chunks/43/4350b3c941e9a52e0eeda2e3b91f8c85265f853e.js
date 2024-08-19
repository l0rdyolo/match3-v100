System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, EasyLevels;

  return {
    setters: [function (_cc) {
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

      _export("EasyLevels", EasyLevels = (_dec = ccclass("EasyLevels"), _dec(_class = (_class2 = class EasyLevels extends Component {
        constructor() {
          super(...arguments);
          this.myMap = null;
        }

        start() {}

      }, _class2.level = {
        //-------------------------------------
        1: {
          rows: 5,
          cols: 5,
          grid: [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]]
        },
        //-------------------------------------
        //-------------------------------------
        2: {
          rows: 5,
          cols: 5,
          grid: [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]]
        } //-------------------------------------

      }, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4350b3c941e9a52e0eeda2e3b91f8c85265f853e.js.map