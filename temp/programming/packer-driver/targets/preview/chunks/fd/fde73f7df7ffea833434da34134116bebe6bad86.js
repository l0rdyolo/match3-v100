System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EffectManager, GridManager, _dec, _class, _crd, ccclass, property, SliderManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../Effects/EffectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridManager(extras) {
    _reporterNs.report("GridManager", "../Grid/GridManager", _context.meta, extras);
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
    }, function (_unresolved_3) {
      GridManager = _unresolved_3.GridManager;
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

        Slide(pieceA, pieceB) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var posA = pieceA.node.getPosition();
            var posB = pieceB.node.getPosition();
            yield Promise.all([(_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceA.node, posB, _this.slide_duration), (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceB.node, posA, _this.slide_duration)]);
            (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
              error: Error()
            }), GridManager) : GridManager).getInstance().SwapPieces(pieceA, pieceB);
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fde73f7df7ffea833434da34134116bebe6bad86.js.map