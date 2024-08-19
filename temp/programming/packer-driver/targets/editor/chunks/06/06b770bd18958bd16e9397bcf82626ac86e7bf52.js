System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, Direction, MatchChecker;

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

      (function (Direction) {
        Direction[Direction["Horizontal"] = 0] = "Horizontal";
        Direction[Direction["Vertical"] = 1] = "Vertical";
      })(Direction || (Direction = {}));

      _export("MatchChecker", MatchChecker = (_dec = ccclass('MatchChecker'), _dec(_class = class MatchChecker {
        static checkMatch(grid, piece, row, col) {
          return this.checkMatchInDirection(grid, piece, row, col, Direction.Horizontal) || this.checkMatchInDirection(grid, piece, row, col, Direction.Vertical);
        }

        static checkMatchInDirection(grid, piece, row, col, direction) {
          const pieceName = piece.name;
          const matchCount = 1 + this.countMatches(grid, pieceName, row, col, direction, -1) + // Count matches in the negative direction
          this.countMatches(grid, pieceName, row, col, direction, 1); // Count matches in the positive direction

          return matchCount >= 3;
        }

        static countMatches(grid, pieceName, row, col, direction, step) {
          let matchCount = 0;
          let [i, j] = direction === Direction.Horizontal ? [row, col + step] : [row + step, col];

          while (this.isWithinBounds(grid, i, j) && grid[i][j].name === pieceName) {
            matchCount++;
            direction === Direction.Horizontal ? j += step : i += step;
          }

          return matchCount;
        }

        static isWithinBounds(grid, row, col) {
          return row >= 0 && row < grid.length && col >= 0 && col < grid[row].length;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=06b770bd18958bd16e9397bcf82626ac86e7bf52.js.map