System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, MatchChecker, _dec, _class, _crd, ccclass, property, InteractionManager;

  function _reportPossibleCrUseOfMatchChecker(extras) {
    _reporterNs.report("MatchChecker", "../Grid/MatchChecker", _context.meta, extras);
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
      tween = _cc.tween;
    }, function (_unresolved_2) {
      MatchChecker = _unresolved_2.MatchChecker;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f390fiAtWFH8rs5Z7YrF9GP", "InteractionManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InteractionManager", InteractionManager = (_dec = ccclass('InteractionManager'), _dec(_class = class InteractionManager extends Component {
        constructor(...args) {
          super(...args);
          this.grid = [];
          this.firstSelectedPiece = null;
          this.secondSelectedPiece = null;
        }

        initializeGrid(grid) {
          this.grid = grid;
        }

        onPieceClicked(event, piece) {
          if (this.firstSelectedPiece) {
            this.secondSelectedPiece = piece;
            const pieceA = this.secondSelectedPiece;
            const pieceB = this.firstSelectedPiece;
            console.log(pieceA, pieceB);
            const posA = pieceA.getPosition();
            const posB = pieceB.getPosition(); // Swap positions

            pieceA.setPosition(posB);
            pieceB.setPosition(posA);
            const rowA = this.findPieceRow(pieceA);
            const colA = this.findPieceCol(pieceA);
            const rowB = this.findPieceRow(pieceB);
            const colB = this.findPieceCol(pieceB);

            if (!(_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
              error: Error()
            }), MatchChecker) : MatchChecker).checkMatch(this.grid, pieceA, rowA, colA) && !(_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
              error: Error()
            }), MatchChecker) : MatchChecker).checkMatch(this.grid, pieceB, rowB, colB)) {
              // Swap back if no match
              tween(pieceA).to(0.3, {
                position: posA
              }).start();
              tween(pieceB).to(0.3, {
                position: posB
              }).start();
            }

            this.resetSelection();
          } else {
            this.firstSelectedPiece = piece;
            this.highlightPiece(piece);
          }
        }

        findPieceRow(piece) {
          // Implement logic to find the row of the piece in the grid.
          // Example: return this.grid.findIndex(row => row.includes(piece));
          return -1; // Placeholder, implement this logic.
        }

        findPieceCol(piece) {
          // Implement logic to find the column of the piece in the grid.
          // Example: return this.grid[row].indexOf(piece);
          return -1; // Placeholder, implement this logic.
        }

        highlightPiece(piece) {
          piece.setScale(1.2, 1.2, 1.2);
        }

        resetSelection() {
          this.firstSelectedPiece.setScale(1, 1, 1);
          this.secondSelectedPiece.setScale(1, 1, 1);
          this.firstSelectedPiece = null;
          this.secondSelectedPiece = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c27350522c48eb10d1a202ed3d022dbd0b997fa1.js.map