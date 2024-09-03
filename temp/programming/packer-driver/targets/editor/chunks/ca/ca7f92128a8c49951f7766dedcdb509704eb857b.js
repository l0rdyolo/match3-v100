System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, GravityHandler;

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
          let promises = [];

          do {
            moved = false;

            for (let col = 0; col < grid[0].length; col++) {
              for (let row = grid.length - 1; row >= 1; row--) {
                const currentPiece = grid[row][col];
                const belowPiece = grid[row - 1][col]; // Eğer aşağıdaki hücre boşsa ve yukarıdaki hücre doluysa

                if (belowPiece.isEmpty && !currentPiece.isEmpty) {
                  // Aşağıdaki boş hücreye yukarıdaki hücrenin node'unu taşı
                  const targetRow = row + 1;
                  const targetCol = col; // Yukarıdaki hücre node'unu aşağıdaki hücreye taşı

                  promises.push(currentPiece.updatePosition(belowPiece.row, belowPiece.col)); // Node'u yer değiştir

                  belowPiece.node = currentPiece.node;
                  currentPiece.node = null; // Boş hücre olarak ayarla

                  moved = true;
                }
              }
            }

            await Promise.all(promises);
          } while (moved);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ca7f92128a8c49951f7766dedcdb509704eb857b.js.map