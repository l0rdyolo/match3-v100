System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, GravityHandler;

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
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae996LRhyRNRYM94TseN4vN", "GravityHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GravityHandler", GravityHandler = (_dec = ccclass("GravityHandler"), _dec(_class = class GravityHandler extends Component {
        onLoad() {
          super.onLoad();
        } //! IDEA - burada patlıyoruz


        async applyGravity(grid) {
          let moved = false;
          let promises = [];
          let emptyPieces = [];

          for (let col = 0; col < grid[0].length; col++) {
            for (let row = grid.length - 2; row >= 0; row--) {
              // Alttan başlayarak kontrol ediyoruz
              const currentPiece = grid[row][col];

              if (!currentPiece.isEmpty) {
                let targetRow = row; // Aşağıdaki boş hücreyi bul

                while (targetRow + 1 < grid.length && grid[targetRow + 1][col].isEmpty) {
                  targetRow++;
                } // Eğer targetRow değiştiyse, bu demektir ki bir boş hücreye doğru hareket ediyoruz


                if (targetRow !== row) {
                  const belowPiece = grid[targetRow][col]; // Parçaların yerlerini değiştir

                  grid[targetRow][col] = currentPiece;
                  grid[row][col] = belowPiece; // Yeni satır ve sütunları güncelle

                  currentPiece.col = col;
                  currentPiece.row = targetRow;
                  emptyPieces.push(belowPiece); // Aşağıdaki boş parçayı listeye ekle

                  promises.push(currentPiece.moveToPosition(new Vec3(col, targetRow, 0)));
                  moved = true;
                }
              }
            }
          }

          await Promise.all(promises); // Tüm parçalar hareketini tamamlayana kadar bekle

          return emptyPieces; // Boş hücreleri döndür
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1bf6f97ec1d256d749b24eca0d3043fd0e707889.js.map