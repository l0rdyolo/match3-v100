System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Piece;

  function _reportPossibleCrUseOfIPiece(extras) {
    _reporterNs.report("IPiece", "./IPiece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPieceTypes(extras) {
    _reporterNs.report("PieceTypes", "./PieceTypes", _context.meta, extras);
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

      _cclegacy._RF.push({}, "7e7bdqQE11EpJHCuEde69S8", "Piece", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Piece", Piece = (_dec = ccclass('Piece'), _dec(_class = class Piece extends Component {
        constructor() {
          super(...arguments);
          this.row = -1;
          this.col = -1;
          this.type = null;
        }

        init(row, col, type) {
          this.row = row;
          this.col = col;
          this.type = type;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7e2bb97ce5c3bcdf441a6c9cec82a03bb65869d9.js.map