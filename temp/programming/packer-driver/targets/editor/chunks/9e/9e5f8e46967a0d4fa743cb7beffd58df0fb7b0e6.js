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
          let promises = [];

          do {
            moved = false;

            for (let col = 0; col < grid[0].length; col++) {
              for (let row = grid.length - 1; row >= 1; row--) {
                const currentPiece = grid[row][col];
                const belowPiece = grid[row - 1][col];

                if (belowPiece.isEmpty && !currentPiece.isEmpty) {
                  const targetRow = row + 1;
                  const targetCol = col;
                  const targetPosition = new Vec3(belowPiece.row, belowPiece.col);
                  promises.push(currentPiece.moveToPosition(targetPosition)); // Node'u yer değiştir

                  belowPiece.clearPiece();
                  belowPiece.assingPiece(currentPiece.node);
                  currentPiece.clearPiece();
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
//# sourceMappingURL=9e5f8e46967a0d4fa743cb7beffd58df0fb7b0e6.js.map