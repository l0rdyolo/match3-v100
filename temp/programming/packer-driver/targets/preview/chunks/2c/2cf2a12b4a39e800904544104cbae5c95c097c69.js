System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, EventTarget, Sprite, SingletonComponent, SliderManager, MatchChecker, _dec, _class, _crd, ccclass, property, SelectionManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      EventTarget = _cc.EventTarget;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      SingletonComponent = _unresolved_2.SingletonComponent;
    }, function (_unresolved_3) {
      SliderManager = _unresolved_3.SliderManager;
    }, function (_unresolved_4) {
      MatchChecker = _unresolved_4.MatchChecker;
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
        constructor() {
          super(...arguments);
          this.eventTarget = new EventTarget();
          this.firstSelected = null;
          this.secondSelected = null;
          this.sliderManager = null;
          this.matchChecker = null;
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
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.isSelectionValid()) {
              yield _this.sliderManager.Slide(_this.firstSelected, _this.secondSelected);
              var matches = yield _this.matchChecker.checkForMatches(_this.firstSelected, _this.secondSelected);

              for (var matched of matches) {
                matched.node.getChildByName("Sprite").getComponent(Sprite).color = new Color(123, 122, 31);
              }
            } else {
              _this.firstSelected.Shake();
            }

            _this.cancelSelection();
          })();
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
//# sourceMappingURL=2cf2a12b4a39e800904544104cbae5c95c097c69.js.map