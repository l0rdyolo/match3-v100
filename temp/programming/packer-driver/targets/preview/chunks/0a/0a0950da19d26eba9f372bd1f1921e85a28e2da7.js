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

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'markAsWarning', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InteractionManager", InteractionManager = (_dec = ccclass("InteractionManager"), _dec(_class = class InteractionManager extends Component {
        constructor() {
          super(...arguments);
          this.grid = [];
          this.firstSelectedPiece = null;
          this.secondSelectedPiece = null;
        }

        initializeGrid(grid) {
          this.grid = grid;
        }

        onPieceClicked(event, piece, gridMap) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.firstSelectedPiece) {
              _this.secondSelectedPiece = piece;
              var pieceA = _this.secondSelectedPiece;
              var pieceB = _this.firstSelectedPiece;
              var posA = pieceA.getPosition();
              var posB = pieceB.getPosition(); //burada amacım 1 birimlik değişim olmuşsa matchchecker'a gitmek
              //bu kısmı düzenlemeliyiz!!!!

              var diff = Vec3.subtract(new Vec3(), posA, posB); //! 1 birim mi diye kontrol ettim

              if (diff.length() === 120) {
                //! pozisyonları değiştir
                yield _this.SwapPiecePositions(pieceA, pieceB, posA, posB, gridMap); //!  match check

                if (_this.checkMatches(pieceA, pieceB, gridMap)) {} else {
                  yield _this.SwapPiecePositions(pieceA, pieceB, posB, posA, gridMap, 0.2);
                }
              } else {
                //yanlış seçim
                (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                  error: Error()
                }), EffectManager) : EffectManager).shakePiece(_this.firstSelectedPiece);
              }

              _this.resetSelection();
            } else {
              _this.firstSelectedPiece = piece;
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).highlightPiece(piece);
            }
          })();
        }

        resetSelection() {
          this.firstSelectedPiece.setScale(1, 1, 1);
          this.secondSelectedPiece.setScale(1, 1, 1);
          this.firstSelectedPiece = null;
          this.secondSelectedPiece = null;
        }

        SwapPiecePositions(pieceA, pieceB, posA, posB, gridMap, duration) {
          return _asyncToGenerator(function* () {
            if (duration === void 0) {
              duration = 0.1;
            }

            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceA, posB, duration);
            yield (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceB, posA, duration); // Update the gridMap

            var posAData = gridMap.get(pieceA);
            var posBData = gridMap.get(pieceB);
            gridMap.set(pieceA, posBData);
            gridMap.set(pieceB, posAData);
            console.log(gridMap.get(pieceA), gridMap.get(pieceB));
          })();
        }

        checkMatches(pieceA, pieceB, gridMap) {
          var a = (_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
            error: Error()
          }), MatchChecker) : MatchChecker).checkMatches(pieceA, gridMap);
          var b = (_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
            error: Error()
          }), MatchChecker) : MatchChecker).checkMatches(pieceB, gridMap);
          return a || b;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0a0950da19d26eba9f372bd1f1921e85a28e2da7.js.map