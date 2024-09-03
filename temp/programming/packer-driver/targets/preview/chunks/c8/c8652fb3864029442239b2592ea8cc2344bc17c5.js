System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, GravityHandler;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

        applyGravity(grid) {
          return _asyncToGenerator(function* () {
            var moved = false;
            var promises = [];

            do {
              moved = false;

              for (var col = 0; col < grid[0].length; col++) {
                for (var row = grid.length - 2; row >= 0; row--) {
                  var currentPiece = grid[row][col];
                  var belowPiece = grid[row + 1][col]; // Eğer aşağıdaki hücre boşsa, yukarıdaki hücrenin node'unu hareket ettir

                  if (belowPiece.isEmpty && !currentPiece.isEmpty) {
                    // Aşağıdaki hücreye, yukarıdaki hücrenin node'unu taşı
                    var belowNode = belowPiece.node;
                    var currentNode = currentPiece.node;
                    console.log(currentNode);
                    var [_row, _col] = currentPiece;
                    belowPiece.node = currentNode;
                    currentPiece.node = belowNode; // Yeni pozisyonu güncelle ve hareket ettir

                    promises.push(belowPiece.updatePosition(_row, _col));
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
//# sourceMappingURL=c8652fb3864029442239b2592ea8cc2344bc17c5.js.map