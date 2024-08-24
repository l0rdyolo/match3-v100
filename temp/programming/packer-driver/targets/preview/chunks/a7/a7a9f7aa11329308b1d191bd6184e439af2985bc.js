System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Piece, _crd;

  function _reportPossibleCrUseOfIPiece(extras) {
    _reporterNs.report("IPiece", "./IPiece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPieceTypes(extras) {
    _reporterNs.report("PieceTypes", "./PieceTypes", _context.meta, extras);
  }

  _export("Piece", void 0);

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

      _cclegacy._RF.push({}, "7e7bdqQE11EpJHCuEde69S8", "Piece", undefined);

      __checkObsolete__(['Node']);

      _export("Piece", Piece = class Piece {
        constructor(row, col, node, type) {
          this.row = -1;
          this.col = -1;
          this.node = void 0;
          this.type = null;
          this.row = row;
          this.col = col;
          this.node = node;
          this.type = type;
        }

        init() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7a9f7aa11329308b1d191bd6184e439af2985bc.js.map