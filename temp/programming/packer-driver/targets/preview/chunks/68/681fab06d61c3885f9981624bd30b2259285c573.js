System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EventTarget, SingletonComponent, GridManager, _dec, _class, _crd, ccclass, property, SelectionManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../SingletonComponent", _context.meta, extras);
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
      EventTarget = _cc.EventTarget;
    }, function (_unresolved_2) {
      SingletonComponent = _unresolved_2.SingletonComponent;
    }, function (_unresolved_3) {
      GridManager = _unresolved_3.GridManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a5acSe8KJP0JsUpqK6y3fM", "SelectionManager", undefined);

      __checkObsolete__(['_decorator', 'EventTarget']);

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
          if (piece.canSelect) {
            this.firstSelected = piece.setSelection();
          }
        }

        handleSecondSelection(piece) {
          if (piece.canSelect) {
            this.secondSelected = piece.setSelection();
            this.applySelection();
          }
        }

        applySelection() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.isSelectionValid()) {
              (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
                error: Error()
              }), GridManager) : GridManager).getInstance().handleSelection(_this.firstSelected, _this.secondSelected);
            } else {
              _this.firstSelected.Shake();
            }

            _this.cancelSelection();
          })();
        }

        cancelSelection() {
          this.firstSelected = this.firstSelected.cancelSelection();
          this.secondSelected = this.secondSelected.cancelSelection();
          console.log("reset selections ", this.firstSelected, this.secondSelected);
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
//# sourceMappingURL=681fab06d61c3885f9981624bd30b2259285c573.js.map