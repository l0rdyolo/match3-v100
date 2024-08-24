System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, GravityHandler;

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
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

      _cclegacy._RF.push({}, "ae996LRhyRNRYM94TseN4vN", "GravityHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GravityHandler", GravityHandler = (_dec = ccclass('GravityHandler'), _dec(_class = class GravityHandler extends Component {
        applyGravity(matches) {
          var columnPieceCount = new Map(); // matches içindeki her bir piece için sütun sayısını hesapla

          for (var piece of matches) {
            var col = piece.col; // Eğer sütun zaten map'te varsa, sayacı artır

            if (columnPieceCount.has(col)) {
              columnPieceCount.set(col, columnPieceCount.get(col) + 1);
            } else {
              // Eğer sütun map'te yoksa, yeni bir giriş yap
              columnPieceCount.set(col, 1);
            }
          }

          console.log(columnPieceCount); // Burada sütun numaralarını ve adetlerini görebilirsin
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21b3e9c7e0a77fd696d2dacda5ffc39af6e518e7.js.map