System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Sprite, EffectManager, PoolHelper, PiecesPool, sleep, _dec, _class, _class2, _crd, ccclass, Direction, MatchChecker;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../Effects/EffectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolHelper(extras) {
    _reporterNs.report("PoolHelper", "../PoolHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPiecesPool(extras) {
    _reporterNs.report("PiecesPool", "../Poolable/PiecesPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsleep(extras) {
    _reporterNs.report("sleep", "../Promises", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      EffectManager = _unresolved_2.EffectManager;
    }, function (_unresolved_3) {
      PoolHelper = _unresolved_3.PoolHelper;
    }, function (_unresolved_4) {
      PiecesPool = _unresolved_4.PiecesPool;
    }, function (_unresolved_5) {
      sleep = _unresolved_5.sleep;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41c9dChSgVC0paVJJFOkc+1", "MatchChecker", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Node', 'Sprite', 'Vec3']);

      ({
        ccclass
      } = _decorator);

      (function (Direction) {
        Direction[Direction["Horizontal"] = 0] = "Horizontal";
        Direction[Direction["Vertical"] = 1] = "Vertical";
      })(Direction || (Direction = {}));

      _export("MatchChecker", MatchChecker = (_dec = ccclass("MatchChecker"), _dec(_class = (_class2 = class MatchChecker {
        static SwapPiecePositions(pieceA, pieceB, posA, posB, gridMap) {
          var _this = this;

          return _asyncToGenerator(function* () {
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceA, posB, 0.1);
            yield (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceB, posA, 0.1); // Update the gridMap

            var posAData = gridMap.get(pieceA);
            var posBData = gridMap.get(pieceB);
            gridMap.set(pieceA, posBData);
            gridMap.set(pieceB, posAData);

            _this.checkMatches(pieceB, gridMap);

            _this.checkMatches(pieceA, gridMap);
          })();
        }

        static getPieceAtPosition(position, gridMap) {
          var _Array$from$find;

          return (_Array$from$find = Array.from(gridMap.entries()).find(_ref => {
            var [_, pos] = _ref;
            return pos.row === position.row && pos.col === position.col;
          })) == null ? void 0 : _Array$from$find[0];
        }

        static visitNeighborWithDirection(currentPiece, gridMap, direction, visited, depth, maxDepth) {
          if (depth > maxDepth) return;
          var currentPiecePosition = gridMap.get(currentPiece);
          var neighborPiecePosition = {
            row: currentPiecePosition.row + direction.dx,
            col: currentPiecePosition.col + direction.dy
          };
          var neighbor = this.getPieceAtPosition(neighborPiecePosition, gridMap);

          if (neighbor && !visited.has(neighbor) && neighbor.name === currentPiece.name) {
            var sprite = neighbor.getChildByName("Sprite").getComponent(Sprite);

            if (sprite) {
              sprite.color = new Color(150, 150, 255); // Change color
            }

            visited.add(neighbor);
            this.visitNeighborWithDirection(neighbor, gridMap, direction, visited, depth + 1, maxDepth);
          }
        }

        static checkMatches(currentPiece, gridMap, depth, maxDepth) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (depth === void 0) {
              depth = 0;
            }

            if (maxDepth === void 0) {
              maxDepth = 3;
            }

            var horizontalVisited = new Set();
            var verticalVisited = new Set();
            horizontalVisited.add(currentPiece);
            verticalVisited.add(currentPiece);

            for (var direction of _this2.horizontalDirections) {
              _this2.visitNeighborWithDirection(currentPiece, gridMap, direction, horizontalVisited, depth, maxDepth);
            }

            for (var _direction of _this2.verticalDirections) {
              _this2.visitNeighborWithDirection(currentPiece, gridMap, _direction, verticalVisited, depth, maxDepth);
            }

            if (verticalVisited.size >= 3) {
              console.log("Vertical Match Detected");
              yield _this2.handleMatch(Array.from(verticalVisited), gridMap);
            }

            if (horizontalVisited.size >= 3) {
              console.log("Horizontal Match Detected");
              yield _this2.handleMatch(Array.from(horizontalVisited), gridMap);
            }
          })();
        }

        static handleMatch(matchedPieces, gridMap) {
          return _asyncToGenerator(function* () {
            for (var piece of matchedPieces) {
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).decreaseScale(piece, 0.1, false);
              yield (_crd && sleep === void 0 ? (_reportPossibleCrUseOfsleep({
                error: Error()
              }), sleep) : sleep)(100);
              gridMap.delete(piece);
              (_crd && PoolHelper === void 0 ? (_reportPossibleCrUseOfPoolHelper({
                error: Error()
              }), PoolHelper) : PoolHelper).release(_crd && PiecesPool === void 0 ? (_reportPossibleCrUseOfPiecesPool({
                error: Error()
              }), PiecesPool) : PiecesPool, piece);
            }
          })();
        }

      }, _class2.horizontalDirections = [{
        dx: 0,
        dy: 1
      }, // Right
      {
        dx: 0,
        dy: -1
      } // Left
      ], _class2.verticalDirections = [{
        dx: 1,
        dy: 0
      }, // Down
      {
        dx: -1,
        dy: 0
      } // Up
      ], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9d90eb0ff50a8bab05ee51d021ceaca900b7713b.js.map