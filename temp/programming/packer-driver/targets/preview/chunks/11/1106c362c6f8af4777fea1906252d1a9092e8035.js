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
        applyGravity(matches) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var columnPieceCount = new Map(); // Her sütundaki boşlukları tutan bir harita
            // Sütunlardaki boşlukları hesapla

            for (var piece of matches) {
              var col = piece.col;

              if (columnPieceCount.has(col)) {
                columnPieceCount.set(col, columnPieceCount.get(col) + 1);
              } else {
                columnPieceCount.set(col, 1);
              }
            } // Her sütun için gravity uygula


            for (var [_col, emptySpaces] of columnPieceCount) {
              yield _this.applyGravityForSingleColumn(_col, emptySpaces);
            }
          })();
        }

        applyGravityForSingleColumn(col, emptySpaces) {
          return _asyncToGenerator(function* () {
            var grid = (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
              error: Error()
            }), GridManager) : GridManager).getInstance().grid;

            for (var row = grid.length - 1; row >= 0; row--) {
              var piece = grid[row][col];
              if (piece.node === null) continue;
              console.log(piece); // const newRow = row - emptySpaces;
              // if (newRow < grid.length) {
              //     grid[newRow][col] = piece;
              //     piece.row = newRow;
              //     await this.movePiece(piece, newRow, col);
              //     grid[row][col] = null;
              // }
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
//# sourceMappingURL=1106c362c6f8af4777fea1906252d1a9092e8035.js.map