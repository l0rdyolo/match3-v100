System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, MatchChecker, EffectManager, _dec, _class, _crd, ccclass, property, InteractionManager;

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

        async onPieceClicked(event, piece, grid, gridMap) {
          console.log(gridMap);

          if (this.firstSelectedPiece) {
            this.secondSelectedPiece = piece;
            const pieceA = this.secondSelectedPiece;
            const pieceB = this.firstSelectedPiece;
            const posA = pieceA.getPosition();
            const posB = pieceB.getPosition(); //swapHere

            await this.swapPositions(pieceA, pieceB, posA, posB);
            (_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
              error: Error()
            }), MatchChecker) : MatchChecker).CheckSwapedPieces(pieceA, pieceB);
          } else {
            this.firstSelectedPiece = piece;
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).highlightPiece(piece);
          }
        }

        async swapPositions(pieceA, pieceB, posA, posB) {
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
//# sourceMappingURL=29553d43d0751477c279753be1a2500262e24fcc.js.map