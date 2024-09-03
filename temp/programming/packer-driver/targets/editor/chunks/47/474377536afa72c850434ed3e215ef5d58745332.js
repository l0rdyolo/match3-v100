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

          do {
            moved = false;

            for (let col = 0; col < grid[0].length; col++) {
              for (let row = grid.length - 2; row >= 0; row--) {
                const currentPiece = grid[row][col];
                const belowPiece = grid[row + 1][col];

                if (currentPiece.isEmpty && !belowPiece.isEmpty) {
                  grid[row][col] = belowPiece;
                  grid[row + 1][col] = currentPiece;
                  belowPiece.col = currentPiece.col;
                  belowPiece.row = currentPiece.row;

                  if (emptyPieces.indexOf(currentPiece) === -1) {
                    emptyPieces.push(currentPiece);
                  }

                  promises.push(belowPiece.moveToPosition(new Vec3(col, row, 0)));
                  moved = true;
                }
              }
            }

            await Promise.all(promises);
          } while (moved);

          return emptyPieces;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=474377536afa72c850434ed3e215ef5d58745332.js.map