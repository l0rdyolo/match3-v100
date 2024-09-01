System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, GridManager, _dec, _class, _crd, ccclass, property, GravityHandler;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfGridManager(extras) {
    _reporterNs.report("GridManager", "./GridManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GridManager = _unresolved_2.GridManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae996LRhyRNRYM94TseN4vN", "GravityHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GravityHandler", GravityHandler = (_dec = ccclass('GravityHandler'), _dec(_class = class GravityHandler extends Component {
        onLoad() {
          super.onLoad();
        }

        applyGravity(grid) {
          return _asyncToGenerator(function* () {
            var moved = false;

            do {
              moved = false;
              var promises = []; // Tüm asenkron hareketleri toplamak için bir array

              for (var col = 0; col < grid[0].length; col++) {
                for (var row = grid.length - 1; row >= 0; row--) {
                  if (row + 1 > grid.length - 1) continue;

                  if (grid[row][col].node === null && grid[row + 1][col].node !== null) {
                    grid[row][col].node = grid[row + 1][col].node;
                    grid[row + 1][col].node = null;
                    var piece = grid[row][col];
                    promises.push(piece.moveToPosition(new Vec3(col, row, 0)));
                    moved = true;
                  }
                }
              }

              yield Promise.all(promises);
            } while (moved); // Boş alanları dolduracak başka işlemler buraya eklenebilir
            // await this.fillEmptySpaces();

          })();
        }

        fillEmptySpaces() {
          var grid = (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
            error: Error()
          }), GridManager) : GridManager).getInstance().grid;

          for (var col = 0; col < grid[0].length; col++) {
            var emptySpaces = 0;

            for (var row = 0; row < grid.length; row++) {
              if (grid[row][col].node === null) {
                emptySpaces++;
              }
            } // // Boş alanları yeni parçalarla doldur
            // for (let i = 0; i < emptySpaces; i++) {
            //     const newPiece = this.createNewPiece();
            //     const row = emptySpaces - i - 1;
            //     grid[row][col].node = newPiece;
            //     const pieceComponent = newPiece.getComponent(Piece);
            //     pieceComponent.moveToPosition(new Vec3(col, row, 0));
            // }

          }
        } // private createNewPiece(): Node {
        //     // Yeni bir parça oluştur ve döndür
        //     // Bu metodu kendi oyununuza göre uyarlamanız gerekecek
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3bb709b42ca16efe053423018301e11b790e0d79.js.map