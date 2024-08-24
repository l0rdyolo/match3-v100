System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, GameGlobal;

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

      _cclegacy._RF.push({}, "34d83hc1YVKQ5acY56W9TuZ", "GameGlobal", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameGlobal", GameGlobal = (_dec = ccclass('GameGlobal'), _dec(_class = (_class2 = class GameGlobal extends Component {}, _class2.PIECE_CONTENT_SIZE = 100, _class2.PIECE_OFFSET = 5, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d51a519a8c10f7c28fd98848f87a2a6d451d479.js.map