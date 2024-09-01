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
        }

        async applyGravity(grid) {
          let moved = false;

          do {
            moved = false;

            for (let col = 0; col < grid[0].length; col++) {
              for (let row = grid.length - 1; row >= 0; row--) {
                if (row + 1 > grid.length - 1) continue;

                if (grid[row][col].node === null && grid[row + 1][col].node !== null) {
                  grid[row][col].node = grid[row + 1][col].node;
                  grid[row + 1][col].node = null;
                  const piece = grid[row][col];
                  await piece.moveToPosition(new Vec3(col, row, 0)); // Hareket tamamlanana kadar bekle

                  moved = true;
                }
              }
            }
          } while (moved);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=06e549cc7323290a0d66429943135a2fb44f5945.js.map