System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, MatchChecker, EffectManager, _dec, _class, _crd, ccclass, property, InteractionManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfMatchChecker(extras) {
    _reporterNs.report("MatchChecker", "../Grid/MatchChecker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../Effects/EffectManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      MatchChecker = _unresolved_2.MatchChecker;
    }, function (_unresolved_3) {
      EffectManager = _unresolved_3.EffectManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f390fiAtWFH8rs5Z7YrF9GP", "InteractionManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InteractionManager", InteractionManager = (_dec = ccclass('InteractionManager'), _dec(_class = class InteractionManager extends Component {
        constructor() {
          super(...arguments);
          this.grid = [];
          this.firstSelectedPiece = null;
          this.secondSelectedPiece = null;
        }

        initializeGrid(grid) {
          this.grid = grid;
        }

        onPieceClicked(event, piece) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.firstSelectedPiece) {
              _this.secondSelectedPiece = piece;
              console.log(Vec3.subtract(new Vec3(), _this.firstSelectedPiece.position, _this.secondSelectedPiece.position).normalize);
              var pieceA = _this.secondSelectedPiece;
              var pieceB = _this.firstSelectedPiece;
              var posA = pieceA.getPosition();
              var posB = pieceB.getPosition(); //swapHere

              _this.swapPositions(pieceA, pieceB, posA, posB);

              var rowA = _this.findPieceRow(pieceA);

              var colA = _this.findPieceCol(pieceA);

              var rowB = _this.findPieceRow(pieceB);

              var colB = _this.findPieceCol(pieceB);

              console.log((_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
                error: Error()
              }), MatchChecker) : MatchChecker).checkMatch(_this.grid, pieceA, rowA, colA), (_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
                error: Error()
              }), MatchChecker) : MatchChecker).checkMatch(_this.grid, pieceB, rowB, colB));

              if (!(_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
                error: Error()
              }), MatchChecker) : MatchChecker).checkMatch(_this.grid, pieceA, rowB, colB) && !(_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
                error: Error()
              }), MatchChecker) : MatchChecker).checkMatch(_this.grid, pieceB, rowA, colA)) {
                // Swap back if no match
                console.log("nasıl"); // tween(pieceA).to(0.3, { position: posA }).start();
                // tween(pieceB).to(0.3, { position: posB }).start();
              }

              _this.resetSelection();
            } else {
              _this.firstSelectedPiece = piece;
              console.log("first selection", piece);

              _this.highlightPiece(piece);
            }
          })();
        }

        findPieceRow(piece) {
          // Implement logic to find the row of the piece in the grid.
          // Example: return this.grid.findIndex(row => row.includes(piece));
          return -1; // Placeholder, implement this logic.
        }

        findPieceCol(piece) {
          // Implement logic to find the column of the piece in the grid.
          // Example: return this.grid[row].indexOf(piece);
          return -1; // Placeholder, implement this logic.
        }

        highlightPiece(piece) {
          piece.setScale(1.2, 1.2, 1.2);
        }

        swapPositions(pieceA, pieceB, posA, posB) {
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).movePiece(pieceA, posB, 0.1);
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).movePiece(pieceB, posA, 0.1);
        }

        resetSelection() {
          this.firstSelectedPiece.setScale(1, 1, 1);
          this.secondSelectedPiece.setScale(1, 1, 1);
          this.firstSelectedPiece = null;
          this.secondSelectedPiece = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43a882810b5e65ee3faadc360200093055c551dd.js.map