System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EffectManager, _dec, _class, _crd, ccclass, property, InteractionManager;

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
      EffectManager = _unresolved_2.EffectManager;
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
        constructor(...args) {
          super(...args);
          this.grid = [];
          this.firstSelectedPiece = null;
          this.secondSelectedPiece = null;
        }

        initializeGrid(grid) {
          this.grid = grid;
        }

        async onPieceClicked(event, piece) {
          if (this.firstSelectedPiece) {
            this.secondSelectedPiece = piece;
            const pieceA = this.secondSelectedPiece;
            const pieceB = this.firstSelectedPiece;
            const posA = pieceA.getPosition();
            const posB = pieceB.getPosition(); //swapHere

            this.swapPositions(pieceA, pieceB, posA, posB);
            this.resetSelection();
          } else {
            this.firstSelectedPiece = piece;
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).highlightPiece(piece);
          }
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
//# sourceMappingURL=5c8a9c187e4a2d4e1dcb21338533f11168f78a91.js.map