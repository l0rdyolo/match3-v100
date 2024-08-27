System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, GridManager, GameGlobal, _dec, _class, _crd, ccclass, property, GravityHandler;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        applyGravity() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var grid = (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
              error: Error()
            }), GridManager) : GridManager).getInstance().grid;
            var rows = grid.length;
            var cols = grid[0].length; // Grid'i dolaş

            for (var y = 0; y < cols; y++) {
              for (var x = 1; x < rows - 1; x++) {
                // En alt satırdan bir üstünden başlayarak yukarı doğru git
                var piece = grid[x][y]; // Eğer hücre boşsa devam et

                if (!piece || piece.node === null) continue;
                console.log("[" + x + " , " + y + "] , " + piece.node.name);
                var newX = x; // Altındaki hücre boş olduğu sürece bu işlemi yap

                while (newX + 1 < rows && !grid[newX + 1][y].node) {
                  newX++;
                } // Eğer yeni bir pozisyon bulduysak, taşı


                if (newX !== x) {
                  grid[newX][y] = piece; // Yeni pozisyona taşı

                  grid[x][y] = null; // Eski pozisyonu boşalt

                  piece.row = newX; // Yeni satırı güncelle

                  yield _this.movePiece(piece, newX, y); // Parçayı hareket ettir
                }
              }
            }
          })();
        }

        movePiece(piece, newRow, col) {
          var newY = newRow * ((_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
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
//# sourceMappingURL=07a76b2eff5391e2aaa03adc7cef486370dac01a.js.map