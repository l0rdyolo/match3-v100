System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EffectManager, _dec, _class, _crd, ccclass, property, SliderManager;

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
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
      EffectManager = _unresolved_2.EffectManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "276869pOPVKMKveFLc0JFLg", "SliderManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SliderManager", SliderManager = (_dec = ccclass("SliderManager"), _dec(_class = class SliderManager extends Component {
        constructor(...args) {
          super(...args);
          this.slide_duration = 0.125;
        }

        async SwapPieces(pieceA, pieceB) {
          await this.Slide(pieceA, pieceB);
          const tempNode = pieceA.node;
          pieceA.clearPiece();
          pieceA.assingPiece(pieceB.node);
          pieceB.clearPiece();
          pieceB.assingPiece(tempNode);
        }

        async Slide(pieceA, pieceB) {
          const posA = pieceA.node.getPosition();
          const posB = pieceB.node.getPosition();
          await Promise.all([(_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).movePiece(pieceA.node, posB, this.slide_duration), (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).movePiece(pieceB.node, posA, this.slide_duration)]);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1dcc54c20addf9214dd9cdfa5d7bdb42c7d02960.js.map