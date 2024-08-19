System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, MatchChecker;

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

      __checkObsolete__(['_decorator', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("MatchChecker", MatchChecker = (_dec = ccclass('MatchChecker'), _dec(_class = class MatchChecker {
        static checkMatch(grid, piece, row, col) {
          return this.checkHorizontalMatch(grid, piece, row, col) || this.checkVerticalMatch(grid, piece, row, col);
        }

        static checkHorizontalMatch(grid, piece, row, col) {
          const pieceName = piece.name;
          let matchCount = 1;
          console.log(pieceName); // Check left

          for (let i = col - 1; i >= 0; i--) {
            if (grid[row][i].name === pieceName) {
              matchCount++;
            } else {
              break;
            }
          } // Check right


          for (let i = col + 1; i < grid.length; i++) {
            if (grid[row][i].name === pieceName) {
              matchCount++;
            } else {
              break;
            }
          }

          return matchCount >= 3;
        }

        static checkVerticalMatch(grid, piece, row, col) {
          const pieceName = piece.name;
          let matchCount = 1; // Check up

          for (let i = row - 1; i >= 0; i--) {
            if (grid[i][col].name === pieceName) {
              matchCount++;
            } else {
              break;
            }
          } // Check down


          for (let i = row + 1; i < grid.length; i++) {
            if (grid[i][col].name === pieceName) {
              matchCount++;
            } else {
              break;
            }
          }

          return matchCount >= 3;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f092a41723b20604549c6da3dcab5b2f762217b2.js.map