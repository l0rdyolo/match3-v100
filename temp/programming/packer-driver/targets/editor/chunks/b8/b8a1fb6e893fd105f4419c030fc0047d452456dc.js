System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EventTarget, SingletonComponent, SliderManager, MatchChecker, GravityHandler, GridManager, _dec, _class, _crd, ccclass, property, SelectionManager;

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../SingletonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSliderManager(extras) {
    _reporterNs.report("SliderManager", "./SliderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchChecker(extras) {
    _reporterNs.report("MatchChecker", "../Match/MatchChecker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGravityHandler(extras) {
    _reporterNs.report("GravityHandler", "../Grid/GravityHandler", _context.meta, extras);
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
      SliderManager = _unresolved_3.SliderManager;
    }, function (_unresolved_4) {
      MatchChecker = _unresolved_4.MatchChecker;
    }, function (_unresolved_5) {
      GravityHandler = _unresolved_5.GravityHandler;
    }, function (_unresolved_6) {
      GridManager = _unresolved_6.GridManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a5acSe8KJP0JsUpqK6y3fM", "SelectionManager", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'EventTarget', 'Node', 'Sprite', 'SpriteFrame', 'SpriteRenderer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SelectionManager", SelectionManager = (_dec = ccclass("SelectionManager"), _dec(_class = class SelectionManager extends (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
        error: Error()
      }), SingletonComponent) : SingletonComponent) {
        constructor(...args) {
          super(...args);
          this.eventTarget = new EventTarget();
          this.firstSelected = null;
          this.secondSelected = null;
          this.sliderManager = null;
          this.matchChecker = null;
          this.gravityHandler = null;
        }

        onLoad() {
          super.onLoad();
          this.eventTarget.on("piece-selected", this.onPieceSelected, this);
          this.init();
        }

        init() {
          this.sliderManager = new (_crd && SliderManager === void 0 ? (_reportPossibleCrUseOfSliderManager({
            error: Error()
          }), SliderManager) : SliderManager)();
          this.matchChecker = new (_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
            error: Error()
          }), MatchChecker) : MatchChecker)();
          this.gravityHandler = new (_crd && GravityHandler === void 0 ? (_reportPossibleCrUseOfGravityHandler({
            error: Error()
          }), GravityHandler) : GravityHandler)();
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

        async applySelection() {
          if (this.isSelectionValid()) {
            await this.sliderManager.Slide(this.firstSelected, this.secondSelected);
            let matches = await this.matchChecker.checkForMatches(this.firstSelected, this.secondSelected);

            if (matches.length > 0) {
              // Eşleşmeleri sil ve gravity işlemini uygula
              (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
                error: Error()
              }), GridManager) : GridManager).getInstance().deleteMatches(matches);
              await this.gravityHandler.applyGravity(); // Gravity işleminin tamamlanmasını bekle

              console.log((_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
                error: Error()
              }), GridManager) : GridManager).getInstance().grid); // // Gravity sonrası yeni eşleşmeleri kontrol et
              // do {
              //     matches = await this.matchChecker.checkForMatchesAfterGravity();
              //     if (matches.length > 0) {
              //         GridManager.getInstance().deleteMatches(matches);
              //         await this.gravityHandler.applyGravity(); // Yeni gravity işlemini uygula ve bekle
              //     }
              // } while (matches.length > 0);
            } else {
              await this.sliderManager.Slide(this.firstSelected, this.secondSelected);
            }
          } else {
            this.firstSelected.Shake();
          }

          this.cancelSelection();
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

          const rowDiff = Math.abs(this.firstSelected.row - this.secondSelected.row);
          const colDiff = Math.abs(this.firstSelected.col - this.secondSelected.col);
          return rowDiff === 1 && colDiff === 0 || rowDiff === 0 && colDiff === 1;
          return false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8a1fb6e893fd105f4419c030fc0047d452456dc.js.map