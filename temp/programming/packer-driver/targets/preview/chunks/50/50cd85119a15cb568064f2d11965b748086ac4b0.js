System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, ParticleSystem2D, tween, Vec3, SelectionManager, GameGlobal, Piece, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfIPiece(extras) {
    _reporterNs.report("IPiece", "./IPiece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPieceTypes(extras) {
    _reporterNs.report("PieceTypes", "./PieceTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelectionManager(extras) {
    _reporterNs.report("SelectionManager", "../Interaction/SelectionManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobal(extras) {
    _reporterNs.report("GameGlobal", "../Game/GameGlobal", _context.meta, extras);
  }

  _export("Piece", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      ParticleSystem2D = _cc.ParticleSystem2D;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      SelectionManager = _unresolved_2.SelectionManager;
    }, function (_unresolved_3) {
      GameGlobal = _unresolved_3.GameGlobal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e7bdqQE11EpJHCuEde69S8", "Piece", undefined);

      __checkObsolete__(['Node', 'ParticleSystem2D', 'SpriteRenderer', 'tween', 'Vec3']);

      _export("Piece", Piece = class Piece {
        constructor(row, col, node, type) {
          this.canSelected = void 0;
          this.row = -1;
          this.col = -1;
          this.node = void 0;
          this.type = null;
          this.particle = null;
          this.spriteNode = null;
          this.row = row;
          this.col = col;
          this.node = node;
          this.type = type;
          this.canSelected = false;
          this.node.on(Node.EventType.TOUCH_START, this.onTouch, this);
          this.particle = this.node.getChildByName("Particle").getComponent(ParticleSystem2D);
          this.spriteNode = this.node.getChildByName("Sprite");
        }

        onTouch() {
          (_crd && SelectionManager === void 0 ? (_reportPossibleCrUseOfSelectionManager({
            error: Error()
          }), SelectionManager) : SelectionManager).getInstance().eventTarget.emit('piece-selected', this);
        }

        setPosition(_row, _col) {
          this.canSelected = true;
          var row = _row * ((_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_CONTENT_SIZE + (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_OFFSET);
          var col = _col * ((_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_CONTENT_SIZE + (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_OFFSET);
          var piecePostion = new Vec3(col, row);
          this.node.setPosition(piecePostion);
        }

        updatePosition() {
          this.canSelected = false;
          var newX = this.col * (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_CONTENT_SIZE;
          var newY = this.row * (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_CONTENT_SIZE;
          this.node.setPosition(new Vec3(newX, newY, 0));
        }

        matched() {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield _this.Shake(10, 0.1);

            if (_this.particle) {
              _this.particle.resetSystem(); // Eğer hali hazırda çalışıyorsa, sıfırlayıp yeniden başlatır


              _this.particle.playOnLoad = true; // Eğer başlatma durumu ayarlanmamışsa başlatır
            } // Sprite node'unun ölçeğini 0 yaparak yok et


            if (_this.spriteNode) {
              tween(_this.spriteNode).to(0.3, {
                scale: new Vec3(0, 0, 0)
              }) // 0.2 saniye içinde ölçeği 0 yap
              .start();
            }

            _this.canSelected = false;
          })();
        }

        Shake(shakeAmount, duration) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _this2$node;

            if (shakeAmount === void 0) {
              shakeAmount = 10;
            }

            if (duration === void 0) {
              duration = 0.3;
            }

            var originalPosition = (_this2$node = _this2.node) == null ? void 0 : _this2$node.getPosition();
            return new Promise(resolve => {
              if (_this2.node) {
                tween(_this2.node).by(duration / 4, {
                  position: new Vec3(shakeAmount, 0, 0)
                }).by(duration / 4, {
                  position: new Vec3(-shakeAmount * 2, 0, 0)
                }).by(duration / 4, {
                  position: new Vec3(shakeAmount * 2, 0, 0)
                }).by(duration / 4, {
                  position: new Vec3(-shakeAmount, 0, 0)
                }).call(() => {
                  var _this2$node2;

                  (_this2$node2 = _this2.node) == null ? void 0 : _this2$node2.setPosition(originalPosition);
                  resolve();
                }).start();
              }
            });
          })();
        }

        Highlight() {
          tween(this.node).to(0.1, {
            scale: new Vec3(1.1, 1.1, 1.1)
          }).start();
        }

        ResetScale(duration) {
          if (duration === void 0) {
            duration = 0.1;
          }

          tween(this.node).to(duration, {
            scale: new Vec3(1, 1, 1)
          }).start();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=50cd85119a15cb568064f2d11965b748086ac4b0.js.map