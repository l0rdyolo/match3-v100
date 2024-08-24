System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EventTarget, SingletonComponent, _dec, _class, _class2, _crd, ccclass, property, SelectionManager;

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../SingletonComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EventTarget = _cc.EventTarget;
    }, function (_unresolved_2) {
      SingletonComponent = _unresolved_2.SingletonComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a5acSe8KJP0JsUpqK6y3fM", "SelectionManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTarget', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SelectionManager", SelectionManager = (_dec = ccclass("SelectionManager"), _dec(_class = (_class2 = class SelectionManager extends (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
        error: Error()
      }), SingletonComponent) : SingletonComponent) {
        constructor() {
          super(...arguments);
          this.firstSelected = null;
          this.secondSelected = null;
        }

        onLoad() {
          super.onLoad();
          SelectionManager.eventTarget.on("piece-selected", this.onPieceSelected, this);
        }

        onDestroy() {
          SelectionManager.eventTarget.off("piece-selected", this.onPieceSelected, this);
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

      }, _class2.eventTarget = new EventTarget(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04f54145762686eb84bedcaf0127112149d19ae4.js.map