System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EffectManager, _dec, _class, _crd, ccclass, property, SliderManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);
          this.slide_duration = 0.125;
        }

        SwapPieces(pieceA, pieceB) {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield _this.slide(pieceA, pieceB);
            var tempNode = pieceA.node;
            pieceA.clearPiece();
            pieceA.assingPiece(pieceB.node);
            pieceB.clearPiece();
            pieceB.assingPiece(tempNode);
            pieceA.ResetScale();
            pieceB.ResetScale();
          })();
        }

        slide(pieceA, pieceB) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var posA = pieceA.node.getPosition();
            var posB = pieceB.node.getPosition();
            yield Promise.all([(_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceA.node, posB, _this2.slide_duration), (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceB.node, posA, _this2.slide_duration)]);
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e8cc5b03f9202a98d89648a1b0fb1d65d843bbc4.js.map