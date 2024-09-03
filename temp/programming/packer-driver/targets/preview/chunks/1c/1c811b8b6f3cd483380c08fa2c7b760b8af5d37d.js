System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, GravityHandler;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


        applyGravity(grid) {
          return _asyncToGenerator(function* () {
            var moved = false;
            var promises = [];
            var emptyPieces = [];

            for (var col = 0; col < grid[0].length; col++) {
              for (var row = grid.length - 2; row >= 0; row--) {
                // Alttan başlayarak kontrol ediyoruz
                var currentPiece = grid[row][col];

                if (!currentPiece.isEmpty) {
                  var targetRow = row; // Aşağıdaki boş hücreyi bul

                  while (targetRow + 1 < grid.length && grid[targetRow + 1][col].isEmpty) {
                    targetRow++;
                  } // Eğer targetRow değiştiyse, bu demektir ki bir boş hücreye doğru hareket ediyoruz


                  if (targetRow !== row) {
                    var belowPiece = grid[targetRow][col]; // Parçaların yerlerini değiştir

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

            yield Promise.all(promises); // Tüm parçalar hareketini tamamlayana kadar bekle

            return emptyPieces; // Boş hücreleri döndür
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c811b8b6f3cd483380c08fa2c7b760b8af5d37d.js.map