System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SingletonComponent, _dec, _class, _crd, ccclass, property, SelectionManager;

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../SingeltonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      SingletonComponent = _unresolved_2.SingletonComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a5acSe8KJP0JsUpqK6y3fM", "SelectionManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SelectionManager", SelectionManager = (_dec = ccclass('SelectionManager'), _dec(_class = class SelectionManager extends (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
        error: Error()
      }), SingletonComponent) : SingletonComponent) {
        constructor(...args) {
          super(...args);
          this.firstSelected = null;
          this.secondSelected = null;
        }

        static get Instance() {
          return super.Instance;
        }

        onLoad() {
          super.onLoad();
        }

        onPieceSelected(piece) {
          if (!this.firstSelected) {
            this.handleFirstSelection(piece);
          } else {
            this.handleSecondSelection(piece);
          }
        }

        handleFirstSelection(piece) {
          this.firstSelected = piece;
          console.log("setted first selection ", piece);
        }

        handleSecondSelection(piece) {
          this.secondSelected = piece;
          console.log("setted second selection ", piece);
        }

        cancelSelection() {
          this.firstSelected = null;
          this.secondSelected = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=203827907a14cc04f384c9bd64c159f61f91c936.js.map