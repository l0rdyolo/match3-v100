System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, tween, Vec3, SelectionManager, GameGlobal, Piece, _crd;

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

      __checkObsolete__(['Node', 'tween', 'Vec3']);

      _export("Piece", Piece = class Piece {
        constructor(row, col, node, type) {
          this.row = -1;
          this.col = -1;
          this.node = void 0;
          this.type = null;
          this.row = row;
          this.col = col;
          this.node = node;
          this.type = type;
          this.node.on(Node.EventType.TOUCH_START, this.onTouch, this);
        }

        onTouch() {
          (_crd && SelectionManager === void 0 ? (_reportPossibleCrUseOfSelectionManager({
            error: Error()
          }), SelectionManager) : SelectionManager).getInstance().eventTarget.emit('piece-selected', this);
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
          var piecePostion = new Vec3(col, row);
          this.node.setPosition(piecePostion);
        }

        updatePosition() {
          var newX = this.col * (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_CONTENT_SIZE;
          var newY = this.row * (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_CONTENT_SIZE;
          this.node.setPosition(new Vec3(newX, newY, 0));
        }

        matched() {
          this.Shake(5, 0.4);
          this.Highlight();
        }

        Shake(shakeAmount, duration) {
          if (shakeAmount === void 0) {
            shakeAmount = 10;
          }

          if (duration === void 0) {
            duration = 0.3;
          }

          var originalPosition = this.node.getPosition();
          return new Promise(resolve => {
            tween(this.node).by(duration / 4, {
              position: new Vec3(shakeAmount, 0, 0)
            }).by(duration / 4, {
              position: new Vec3(-shakeAmount * 2, 0, 0)
            }).by(duration / 4, {
              position: new Vec3(shakeAmount * 2, 0, 0)
            }).by(duration / 4, {
              position: new Vec3(-shakeAmount, 0, 0)
            }).call(() => {
              this.node.setPosition(originalPosition);
              resolve();
            }).start();
          });
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
//# sourceMappingURL=acf09799927f86254195a30d90fb229185296d3d.js.map