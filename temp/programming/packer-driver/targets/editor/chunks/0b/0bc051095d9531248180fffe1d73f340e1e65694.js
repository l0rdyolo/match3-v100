System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, MatchChecker, EffectManager, _dec, _class, _crd, ccclass, property, InteractionManager;

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

      _export("InteractionManager", InteractionManager = (_dec = ccclass('InteractionManager'), _dec(_class = class InteractionManager extends Component {
        constructor(...args) {
          super(...args);
          this.grid = [];
          this.firstSelectedPiece = null;
          this.secondSelectedPiece = null;
        }

        initializeGrid(grid) {
          this.grid = grid;
        }

        async onPieceClicked(event, piece, gridMap) {
          if (this.firstSelectedPiece) {
            this.secondSelectedPiece = piece;
            const pieceA = this.secondSelectedPiece;
            const pieceB = this.firstSelectedPiece;
            const posA = pieceA.getPosition();
            const posB = pieceB.getPosition(); //burada amacım 1 birimlik değişim olmuşsa matchchecker'a gitmek
            //bu kısmı düzenlemeliyiz!!!!

            const diff = Vec3.subtract(new Vec3(), posA, posB);

            if (diff.length() === 120) {
              await this.SwapPiecePositions(pieceA, pieceB, posA, posB, gridMap);
              console.log((_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
                error: Error()
              }), MatchChecker) : MatchChecker).checkMatches(pieceA, gridMap));
            }

            this.resetSelection();
          } else {
            this.firstSelectedPiece = piece;
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).highlightPiece(piece);
          }
        }

        resetSelection() {
          this.firstSelectedPiece.setScale(1, 1, 1);
          this.secondSelectedPiece.setScale(1, 1, 1);
          this.firstSelectedPiece = null;
          this.secondSelectedPiece = null;
        }

        async SwapPiecePositions(pieceA, pieceB, posA, posB, gridMap) {
          await (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).movePiece(pieceA, posB, 0.1);
          await (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).movePiece(pieceB, posA, 0.1); // Update the gridMap

          const posAData = gridMap.get(pieceA);
          const posBData = gridMap.get(pieceB);
          gridMap.set(pieceA, posBData);
          gridMap.set(pieceB, posAData);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0bc051095d9531248180fffe1d73f340e1e65694.js.map