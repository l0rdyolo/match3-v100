System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, GravityHandler;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

        applyGravity(grid) {
          return _asyncToGenerator(function* () {
            var moved = false;
            var promises = [];

            do {
              moved = false;

              for (var col = 0; col < grid[0].length; col++) {
                for (var row = grid.length - 2; row >= 1; row--) {
                  var currentPiece = grid[row][col];
                  var belowPiece = grid[row - 1][col]; // Eğer aşağıdaki hücre boşsa ve yukarıdaki hücre doluysa

                  if (belowPiece.isEmpty && !currentPiece.isEmpty) {
                    // Aşağıdaki boş hücreye yukarıdaki hücrenin node'unu taşı
                    var targetRow = row + 1;
                    var targetCol = col; // Yukarıdaki hücre node'unu aşağıdaki hücreye taşı

                    promises.push(currentPiece.node.setPosition(new Vec3(targetCol, targetRow, 0))); // Node'u yer değiştir

                    belowPiece.node = currentPiece.node;
                    currentPiece.node = null; // Boş hücre olarak ayarla
                    // Hareket gerçekleştiğini belirle

                    moved = true;
                  }
                }
              }

              yield Promise.all(promises);
            } while (moved);
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=34b10266e8779bbefc9149915fbdf73bf581aeec.js.map