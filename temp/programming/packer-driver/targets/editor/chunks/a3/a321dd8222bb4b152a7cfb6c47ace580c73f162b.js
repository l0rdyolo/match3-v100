System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, GridManager, GameGlobal, _dec, _class, _crd, ccclass, property, GravityHandler;

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridManager(extras) {
    _reporterNs.report("GridManager", "../Grid/GridManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobal(extras) {
    _reporterNs.report("GameGlobal", "../Game/GameGlobal", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GridManager = _unresolved_2.GridManager;
    }, function (_unresolved_3) {
      GameGlobal = _unresolved_3.GameGlobal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae996LRhyRNRYM94TseN4vN", "GravityHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GravityHandler", GravityHandler = (_dec = ccclass('GravityHandler'), _dec(_class = class GravityHandler extends Component {
        async applyGravity() {
          const grid = (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
            error: Error()
          }), GridManager) : GridManager).getInstance().grid;
          const rows = grid.length;
          const cols = grid[0].length; // Grid'i dolaş

          for (let col = 0; col < cols; col++) {
            for (let row = rows - 2; row >= 0; row--) {
              // En alt satırdan bir üstünden başlayarak yukarı doğru git
              let piece = grid[row][col]; // Eğer hücre boşsa devam et

              if (!piece || piece.node === null) continue;
              console.log(`[${row} , ${col}] , ${piece.node.name}`);
              let newRow = row; // Altındaki hücre boş olduğu sürece bu işlemi yap

              while (newRow + 1 < rows && !grid[newRow + 1][col].node) {
                newRow++;
              } // Eğer yeni bir pozisyon bulduysak, taşı


              if (newRow !== row) {
                grid[newRow][col] = piece; // Yeni pozisyona taşı

                grid[row][col] = null; // Eski pozisyonu boşalt

                piece.row = newRow; // Yeni satırı güncelle

                await this.movePiece(piece, newRow, col); // Parçayı hareket ettir
              }
            }
          }
        }

        movePiece(piece, newRow, col) {
          const newY = newRow * ((_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_CONTENT_SIZE + (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_OFFSET);
          return new Promise(resolve => {
            tween(piece.node).to(0.3, {
              position: new Vec3(piece.node.position.x, newY, 0)
            }).call(() => resolve()).start();
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a321dd8222bb4b152a7cfb6c47ace580c73f162b.js.map