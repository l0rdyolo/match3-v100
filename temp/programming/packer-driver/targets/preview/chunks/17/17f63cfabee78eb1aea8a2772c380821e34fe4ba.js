System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EffectManager, _dec, _class, _class2, _crd, ccclass, Direction, MatchChecker;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../Effects/EffectManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EffectManager = _unresolved_2.EffectManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41c9dChSgVC0paVJJFOkc+1", "MatchChecker", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Vec3']);

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
            yield (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceA, posB, 0.1);
            yield (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).movePiece(pieceB, posA, 0.1); // Update the gridMap

            var posAData = gridMap.get(pieceA);
            var posBData = gridMap.get(pieceB);
            gridMap.set(pieceA, posBData);
            gridMap.set(pieceB, posAData);
            var matchedPieces = [];

            _this.CheckSwappedPieces(pieceA, gridMap, matchedPieces);

            _this.CheckSwappedPieces(pieceB, gridMap, matchedPieces); // Handle matched pieces


            if (matchedPieces.length > 0) {
              console.log("Matched pieces:", matchedPieces);

              _this.removeMatches(matchedPieces, gridMap);
            }
          })();
        }

        static CheckSwappedPieces(piece, gridMap, matchedPieces) {
          var {
            row,
            col
          } = gridMap.get(piece); // Check in all directions

          for (var {
            dx,
            dy
          } of this.directions) {
            var matchNodes = this.getMatchedNodes(gridMap, piece.name, row, col, dx, dy);

            if (matchNodes.length >= 2) {
              matchedPieces.push(piece, ...matchNodes); // Continue checking in the same direction for the matched nodes

              for (var matchNode of matchNodes) {
                var {
                  row: matchRow,
                  col: matchCol
                } = gridMap.get(matchNode);
                this.checkContinuation(matchNode, gridMap, matchedPieces, dx, dy);
              }
            }
          }
        }

        static checkContinuation(piece, gridMap, matchedPieces, dx, dy) {
          var {
            row,
            col
          } = gridMap.get(piece);
          var matchNodes = this.getMatchedNodes(gridMap, piece.name, row, col, dx, dy);

          if (matchNodes.length >= 2) {
            matchedPieces.push(...matchNodes); // Continue checking in the same direction for the new matched nodes

            for (var matchNode of matchNodes) {
              var {
                row: matchRow,
                col: matchCol
              } = gridMap.get(matchNode);
              this.checkContinuation(matchNode, gridMap, matchedPieces, dx, dy);
            }
          }
        }

        static getMatchedNodes(gridMap, pieceName, row, col, dx, dy) {
          var matchedNodes = [];
          var [i, j] = [row + dx, col + dy];

          while (this.isWithinBounds(i, j, gridMap) && this.isSamePiece(gridMap, pieceName, i, j)) {
            var _Array$from$find;

            var matchedNode = (_Array$from$find = Array.from(gridMap.entries()).find(_ref => {
              var [_, pos] = _ref;
              return pos.row === i && pos.col === j;
            })) == null ? void 0 : _Array$from$find[0];

            if (matchedNode) {
              matchedNodes.push(matchedNode);
            }

            i += dx;
            j += dy;
          }

          return matchedNodes;
        }

        static isWithinBounds(row, col, gridMap) {
          return row >= 0 && col >= 0 && Array.from(gridMap.values()).some(pos => pos.row === row && pos.col === col);
        }

        static isSamePiece(gridMap, pieceName, row, col) {
          var _Array$from$find2;

          var piece = (_Array$from$find2 = Array.from(gridMap.entries()).find(_ref2 => {
            var [_, pos] = _ref2;
            return pos.row === row && pos.col === col;
          })) == null ? void 0 : _Array$from$find2[0];
          return (piece == null ? void 0 : piece.name) === pieceName;
        }

        static removeMatches(matchedPieces, gridMap) {
          matchedPieces.forEach(node => {
            gridMap.delete(node);
            node.destroy(); // Or return it to the pool
          });
        }

      }, _class2.directions = [{
        dx: 0,
        dy: 1
      }, // Right
      {
        dx: 0,
        dy: -1
      }, // Left
      {
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
//# sourceMappingURL=17f63cfabee78eb1aea8a2772c380821e34fe4ba.js.map