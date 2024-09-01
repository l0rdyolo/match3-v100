System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, GravityHandler;

  return {
    setters: [function (_cc) {
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

          do {
            moved = false;

            for (let col = 0; col < grid[0].length; col++) {
              for (let row = grid.length - 2; row >= 0; row--) {
                // grid.length - 1'den başlıyoruz çünkü alttaki elemanı kontrol ediyoruz
                const currentPiece = grid[row][col];
                const belowPiece = grid[row + 1][col];

                if (currentPiece.isEmpty && !belowPiece.isEmpty) {
                  // Boş hücre ve dolu hücre kontrolü
                  // Parçaların yerlerini değiştir
                  grid[row][col] = belowPiece;
                  grid[row + 1][col] = currentPiece; // Yeni satır ve sütunları güncelle

                  belowPiece.col = currentPiece.col;
                  belowPiece.row = currentPiece.row; // Parçayı hareket ettir ve grid güncelle

                  promises.push(belowPiece.moveToPosition(new Vec3(col, row, 0)));
                  moved = true;
                }
              }
            }

            await Promise.all(promises);
          } while (moved); // Tüm parçalar en alt seviyeye kadar hareket edene kadar devam et

        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c028020f52479263d886de080f1f0fd4908edf7.js.map