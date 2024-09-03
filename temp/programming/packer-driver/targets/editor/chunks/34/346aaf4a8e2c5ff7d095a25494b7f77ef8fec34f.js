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
          let emptyPieceMap = new Map();

          do {
            moved = false;

            for (let col = 0; col < grid[0].length; col++) {
              for (let row = grid.length - 1; row >= 1; row--) {
                const currentPiece = grid[row][col];
                const belowPiece = grid[row - 1][col]; // Eğer aşağıdaki hücre boşsa ve yukarıdaki doluysa

                if (belowPiece.isEmpty && !currentPiece.isEmpty) {
                  const key = `${belowPiece.row},${belowPiece.col}`;
                  emptyPieceMap.set(key, belowPiece); // Parçayı yeni pozisyona taşı

                  promises.push(currentPiece.updatePosition(belowPiece.row, belowPiece.col)); // Node'ları yer değiştir

                  belowPiece.node = currentPiece.node;
                  currentPiece.node = null;
                  moved = true;
                } else if (!belowPiece.isEmpty) {
                  // Eğer aşağıdaki hücre dolu olduysa, boş map'ten kaldır
                  const key = `${belowPiece.row},${belowPiece.col}`;
                  emptyPieceMap.delete(key);
                }
              }
            }

            await Promise.all(promises);
          } while (moved); // Geriye kalan boş alanların sayısını ve konumlarını görmek için:


          console.log("Boş alanlar:", emptyPieceMap.size, emptyPieceMap);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=346aaf4a8e2c5ff7d095a25494b7f77ef8fec34f.js.map