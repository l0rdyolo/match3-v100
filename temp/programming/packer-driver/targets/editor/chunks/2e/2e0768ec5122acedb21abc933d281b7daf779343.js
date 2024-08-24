System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, tween, Vec3, SelectionManager, Piece, _crd;

  function _reportPossibleCrUseOfIPiece(extras) {
    _reporterNs.report("IPiece", "./IPiece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPieceTypes(extras) {
    _reporterNs.report("PieceTypes", "./PieceTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelectionManager(extras) {
    _reporterNs.report("SelectionManager", "../Interaction/SelectionManager", _context.meta, extras);
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

        Shake(duration = 0.3) {
          const originalPosition = this.node.getPosition();
          const shakeAmount = 10; // Sarsılma miktarı

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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e0768ec5122acedb21abc933d281b7daf779343.js.map