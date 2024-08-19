System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, Direction, MatchChecker;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41c9dChSgVC0paVJJFOkc+1", "MatchChecker", undefined);

      __checkObsolete__(['_decorator', 'buildShadowPass', 'Node', 'Vec2', 'Vec3']);

      ({
        ccclass
      } = _decorator);

      (function (Direction) {
        Direction[Direction["Horizontal"] = 0] = "Horizontal";
        Direction[Direction["Vertical"] = 1] = "Vertical";
      })(Direction || (Direction = {}));

      _export("MatchChecker", MatchChecker = (_dec = ccclass('MatchChecker'), _dec(_class = (_class2 = class MatchChecker {
        static CheckSwapedPieces(pieceA, pieceB) {// this.checkSurroundings(pieceA)
          // this.checkSurroundings(pieceB)
        }

        static checkSurroundings(grid, row, col) {
          for (var direction of this.directions) {
            var newRow = row + direction.dx;
            var newCol = col + direction.dy;

            if (this.isWithinBounds(grid, newRow, newCol)) {
              var neighbor = grid[newRow][newCol];
              console.log("Checking piece at [" + newRow + ", " + newCol + "]");
            }
          }
        }

        static isWithinBounds(grid, row, col) {
          return row >= 0 && row < grid.length && col >= 0 && col < grid[row].length;
        }

      }, _class2.directions = [{
        dx: 2,
        dy: 0
      }, // Sağ
      {
        dx: -2,
        dy: 0
      }, // Sol
      {
        dx: 0,
        dy: 2
      }, // Yukarı
      {
        dx: 0,
        dy: -2
      } // Aşağı
      ], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=782d2dfc66ebe7a972780d54fe7f765a93f8ff5e.js.map