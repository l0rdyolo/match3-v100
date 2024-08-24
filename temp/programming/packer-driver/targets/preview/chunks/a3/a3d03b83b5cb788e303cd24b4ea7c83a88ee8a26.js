System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SelectionManager, SliderManager, MatchChecker, GravityHandler, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GameManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelectionManager(extras) {
    _reporterNs.report("SelectionManager", "../Interaction/SelectionManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSliderManager(extras) {
    _reporterNs.report("SliderManager", "../Interaction/SliderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchChecker(extras) {
    _reporterNs.report("MatchChecker", "../Match/MatchChecker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGravityHandler(extras) {
    _reporterNs.report("GravityHandler", "../Grid/GravityHandler", _context.meta, extras);
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
      SelectionManager = _unresolved_2.SelectionManager;
    }, function (_unresolved_3) {
      SliderManager = _unresolved_3.SliderManager;
    }, function (_unresolved_4) {
      MatchChecker = _unresolved_4.MatchChecker;
    }, function (_unresolved_5) {
      GravityHandler = _unresolved_5.GravityHandler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a0bdCrRbRCw5D2eckF03Vo", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(_crd && SelectionManager === void 0 ? (_reportPossibleCrUseOfSelectionManager({
        error: Error()
      }), SelectionManager) : SelectionManager), _dec3 = property(_crd && SliderManager === void 0 ? (_reportPossibleCrUseOfSliderManager({
        error: Error()
      }), SliderManager) : SliderManager), _dec4 = property(_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
        error: Error()
      }), MatchChecker) : MatchChecker), _dec5 = property(_crd && GravityHandler === void 0 ? (_reportPossibleCrUseOfGravityHandler({
        error: Error()
      }), GravityHandler) : GravityHandler), _dec(_class = (_class2 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "selectionManager", _descriptor, this);

          _initializerDefineProperty(this, "sliderManager", _descriptor2, this);

          _initializerDefineProperty(this, "matchChecker", _descriptor3, this);

          _initializerDefineProperty(this, "gravityHandler", _descriptor4, this);
        }

        onLoad() {
          this.selectionManager.eventTarget.on('piece-selected', this.onPieceSelected, this);
        }

        onPieceSelected(pieceA, pieceB) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.selectionManager.isSelectionValid(pieceA, pieceB)) {
              yield _this.sliderManager.Slide(pieceA, pieceB);

              var matches = _this.matchChecker.checkForMatches(pieceA, pieceB);

              if (matches.length > 0) {
                _this.handleMatches(matches);
              } else {
                // Eğer match yoksa parçaları geri swap et
                yield _this.sliderManager.Slide(pieceB, pieceA);
              }
            } else {
              pieceA.Shake();
            }
          })();
        }

        handleMatches(matches) {
          // Eşleşen parçaları kaldırma işlemi
          for (var piece of matches) {
            piece.destroy();
          }

          this.gravityHandler.applyGravity();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectionManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sliderManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "matchChecker", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gravityHandler", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3d03b83b5cb788e303cd24b4ea7c83a88ee8a26.js.map