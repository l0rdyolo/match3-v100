System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, SingletonComponent, GridManager, _dec, _class, _crd, ccclass, property, GravityHandler;

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../SingletonComponent", _context.meta, extras);
  }

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
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      SingletonComponent = _unresolved_2.SingletonComponent;
    }, function (_unresolved_3) {
      GridManager = _unresolved_3.GridManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae996LRhyRNRYM94TseN4vN", "GravityHandler", undefined);

      __checkObsolete__(['_decorator', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GravityHandler", GravityHandler = (_dec = ccclass('GravityHandler'), _dec(_class = class GravityHandler extends (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
        error: Error()
      }), SingletonComponent) : SingletonComponent) {
        onLoad() {
          super.onLoad();
        }

        async applyGravity() {
          const grid = (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
            error: Error()
          }), GridManager) : GridManager).getInstance().grid;
          let moved = false;

          do {
            moved = false;

            for (let col = 0; col < grid[0].length; col++) {
              for (let row = grid.length - 1; row > 0; row--) {
                if (row + 1 > grid.length - 1) continue;

                if (grid[row][col].node === null && grid[row + 1][col].node !== null) {
                  grid[row][col].node = grid[row + 1][col].node;
                  grid[row + 1][col].node = null;
                  const piece = grid[row][col];
                  piece.moveToPosition(new Vec3(col, row, 0));
                  moved = true;
                }
              }
            }
          } while (moved); // this.fillEmptySpaces();

        }

        fillEmptySpaces() {
          const grid = (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
            error: Error()
          }), GridManager) : GridManager).getInstance().grid;

          for (let col = 0; col < grid[0].length; col++) {
            let emptySpaces = 0;

            for (let row = 0; row < grid.length; row++) {
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
//# sourceMappingURL=23b367871e084e95c5bd7d42b986c63bb6d834dc.js.map