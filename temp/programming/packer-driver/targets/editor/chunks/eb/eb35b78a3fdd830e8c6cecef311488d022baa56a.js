System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, InteractionManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f390fiAtWFH8rs5Z7YrF9GP", "InteractionManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InteractionManager", InteractionManager = (_dec = ccclass('InteractionManager'), _dec(_class = class InteractionManager extends Component {
        constructor(...args) {
          super(...args);
          this.selectedPiece = null;
        }

        onPieceClicked(event, piece) {
          if (this.selectedPiece) {
            this.swapPieces(this.selectedPiece, piece);
            this.selectedPiece = null;
          } else {
            this.selectedPiece = piece;
            this.highlightPiece(piece);
          }
        }

        swapPieces(pieceA, pieceB) {
          console.log(`Swapping piece at ${pieceA.getPosition()} with piece at ${pieceB.getPosition()}`);
          const tempPos = pieceA.getPosition().clone();
          pieceA.setPosition(pieceB.getPosition());
          pieceB.setPosition(tempPos);
        }

        highlightPiece(piece) {
          // Add a visual indicator that the piece is selected, such as changing its scale or color
          console.log(`Highlighting piece at position: ${piece.getPosition()}`); // Example highlight logic

          piece.setScale(1.2, 1.2, 1.2);
        }

        clearSelection() {
          if (this.selectedPiece) {
            this.selectedPiece.setScale(1, 1, 1); // Reset the scale or any visual change

            this.selectedPiece = null;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb35b78a3fdd830e8c6cecef311488d022baa56a.js.map