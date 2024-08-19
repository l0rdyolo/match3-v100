System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec2, _dec, _class, _crd, ccclass, Direction, MatchChecker;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41c9dChSgVC0paVJJFOkc+1", "MatchChecker", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Vec2', 'Vec3']);

      ({
        ccclass
      } = _decorator);

      (function (Direction) {
        Direction[Direction["Horizontal"] = 0] = "Horizontal";
        Direction[Direction["Vertical"] = 1] = "Vertical";
      })(Direction || (Direction = {}));

      _export("MatchChecker", MatchChecker = (_dec = ccclass('MatchChecker'), _dec(_class = class MatchChecker {
        static checkMatch(grid, piece, row, col, moveDirection) {
          var isHorizontalMove = Math.abs(moveDirection.x) > Math.abs(moveDirection.y);
          var primaryDirection = isHorizontalMove ? Direction.Horizontal : Direction.Vertical;
          var secondaryDirection = isHorizontalMove ? Direction.Vertical : Direction.Horizontal;
          return this.checkMatchInDirection(grid, piece, row, col, primaryDirection, moveDirection) || this.checkMatchInDirection(grid, piece, row, col, secondaryDirection, moveDirection);
        }

        static checkMatchInDirection(grid, piece, row, col, direction, moveDirection) {
          var pieceName = piece.name;
          var primaryStep = this.getStep(direction, moveDirection, true);
          var secondaryStep = this.getStep(direction, moveDirection, false);
          var matchCount = 1 + this.countMatches(grid, pieceName, row, col, direction, primaryStep) + this.countMatches(grid, pieceName, row, col, direction, secondaryStep);
          return matchCount >= 3;
        }

        static countMatches(grid, pieceName, row, col, direction, step) {
          var matchCount = 0;
          var [i, j] = [row + step.x, col + step.y];

          while (this.isWithinBounds(grid, i, j) && grid[i][j].name === pieceName) {
            matchCount++;
            i += step.x;
            j += step.y;
          }

          return matchCount;
        }

        static getStep(direction, moveDirection, isPrimary) {
          if (direction === Direction.Horizontal) {
            return new Vec2(isPrimary ? moveDirection.x : -moveDirection.x, 0);
          } else {
            return new Vec2(0, isPrimary ? moveDirection.y : -moveDirection.y);
          }
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
//# sourceMappingURL=755defb260db2a9a12044f19592d3dfd26646364.js.map