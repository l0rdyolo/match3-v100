System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EventTarget, SingletonComponent, _dec, _class, _crd, ccclass, property, SelectionManager;

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

      _export("SelectionManager", SelectionManager = (_dec = ccclass("SelectionManager"), _dec(_class = class SelectionManager extends (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
        error: Error()
      }), SingletonComponent) : SingletonComponent) {
        constructor() {
          super(...arguments);
          this.eventTarget = new EventTarget();
          this.firstSelected = null;
          this.secondSelected = null;
        }

        onLoad() {
          super.onLoad();
          this.eventTarget.on("piece-selected", this.onPieceSelected, this);
        }

        onDestroy() {
          this.eventTarget.off("piece-selected", this.onPieceSelected, this);
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
          this.firstSelected.Highlight();
        }

        handleSecondSelection(piece) {
          this.secondSelected = piece;
          this.secondSelected.Highlight();
          this.applySelection();
        }

        applySelection() {
          if (this.isSelectionValid()) {//check Matches
          } else {
            this.firstSelected.Shake();
          }

          this.cancelSelection();
        }

        cancelSelection() {
          this.firstSelected.ResetScale();
          this.secondSelected.ResetScale();
          this.firstSelected = null;
          this.secondSelected = null;
        }

        isSelectionValid() {
          if (!this.firstSelected || !this.secondSelected) {
            return false;
          }

          var rowDiff = Math.abs(this.firstSelected.row - this.secondSelected.row);
          var colDiff = Math.abs(this.firstSelected.col - this.secondSelected.col);
          return rowDiff === 1 && colDiff === 0 || rowDiff === 0 && colDiff === 1;
          return false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f6ad62bf682392b1786f1d6b08fb63536447f72.js.map