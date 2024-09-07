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

      __checkObsolete__(['easing', 'Node', 'ParticleSystem2D', 'removeProperty', 'SpriteRenderer', 'tween', 'Vec3']);

      _export("Piece", Piece = class Piece {
        constructor(row, col, node, type) {
          this.row = -1;
          this.col = -1;
          this.node = void 0;
          this.type = null;
          this.m_isEmpty = false;
          this.isMatched = false;
          this.particle = null;
          this.spriteNode = null;
          this.row = row;
          this.col = col;
          this.node = node;
          this.type = type;
          this.node.on(Node.EventType.TOUCH_START, this.onTouch, this);
          this.m_isEmpty = false;
          this.particle = this.node.getComponentInChildren(ParticleSystem2D);
          this.spriteNode = this.node.getChildByName("Sprite");
        }

        init() {
          this.setPosition(this.row, this.col);
        }

        onTouch() {
          if (this.isEmpty) return;
          console.log(this.row, this.col);
          (_crd && SelectionManager === void 0 ? (_reportPossibleCrUseOfSelectionManager({
            error: Error()
          }), SelectionManager) : SelectionManager).getInstance().eventTarget.emit("piece-selected", this);
        }

        get isEmpty() {
          var m_isEmpty = this.node ? false : true;
          return m_isEmpty;
        }

        setPosition(_row, _col) {
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
          var piecePostion = new Vec3(col, row); // this.node.setPosition(piecePostion);

          tween(this.node).to(0.2, {
            position: piecePostion
          }).start();
        }

        updatePosition(row, col) {
          if (row === void 0) {
            row = this.row;
          }

          if (col === void 0) {
            col = this.col;
          }

          var newX = row; //* GameGlobal.PIECE_CONTENT_SIZE;

          var newY = col; //* GameGlobal.PIECE_CONTENT_SIZE;

          this.setPosition(newX, newY);
        }

        matched() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.isMatched = true;

            if (_this.particle) {
              _this.particle.resetSystem();

              _this.particle.playOnLoad = true;
            }

            if (_this.spriteNode) {
              yield new Promise(resolve => {
                tween(_this.spriteNode).to(0.2, {
                  scale: new Vec3(0, 0, 0)
                }).call(resolve).start();
              });
            }

            _this.clearPiece();
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

            if (_this2.isEmpty) return;
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

        setSelection() {
          this.Highlight();
          return this;
        }

        cancelSelection() {
          this.ResetScale();
          return null;
        }

        Highlight(duration, scale) {
          if (duration === void 0) {
            duration = 0.1;
          }

          if (scale === void 0) {
            scale = new Vec3(1.1, 1.1, 1.1);
          }

          tween(this.node).to(duration, {
            scale: scale
          }, {
            easing: 'expoOut'
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

        moveToPosition(newPos, duration) {
          if (duration === void 0) {
            duration = 0.2;
          }

          return new Promise(resolve => {
            var startPos = this.node.position.clone();
            var targetPos = new Vec3(newPos.x * ((_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
              error: Error()
            }), GameGlobal) : GameGlobal).PIECE_CONTENT_SIZE + (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
              error: Error()
            }), GameGlobal) : GameGlobal).PIECE_OFFSET), newPos.y * ((_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
              error: Error()
            }), GameGlobal) : GameGlobal).PIECE_CONTENT_SIZE + (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
              error: Error()
            }), GameGlobal) : GameGlobal).PIECE_OFFSET), newPos.z);
            tween(this.node).to(duration, {
              position: targetPos
            }, {
              easing: 'quartOut',
              onUpdate: (target, ratio) => {
                var currentPos = new Vec3();
                Vec3.lerp(currentPos, startPos, targetPos, ratio);
                target.setPosition(currentPos);
              }
            }).call(() => {
              this.row = newPos.y;
              this.col = newPos.x;
              resolve();
            }).start();
          });
        }

        assingPiece(node) {
          this.node = node;
          this.node.on(Node.EventType.TOUCH_START, this.onTouch, this);
          this.node.setPosition(new Vec3(0, 200, 0));
          this.particle = this.node.getComponentInChildren(ParticleSystem2D);
          this.spriteNode = this.node.getChildByName("Sprite");
          this.isMatched = false;
        }

        clearPiece() {
          if (this.node) {
            this.node.off(Node.EventType.TOUCH_START, this.onTouch, this);
          }

          this.node = null;
          this.particle = null;
          this.spriteNode = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3bbbbd3295f8fc50d158abbbc047e089bee54972.js.map