System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HorizontalMatchStrategy, VerticalMatchStrategy, MatchChecker, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHorizontalMatchStrategy(extras) {
    _reporterNs.report("HorizontalMatchStrategy", "./MatchStrategies/HorizontalMatchStrategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchStrategy(extras) {
    _reporterNs.report("MatchStrategy", "./MatchStrategies/IMatchStrategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVerticalMatchStrategy(extras) {
    _reporterNs.report("VerticalMatchStrategy", "./MatchStrategies/VerticalMatchStrategy", _context.meta, extras);
  }

  _export("MatchChecker", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      HorizontalMatchStrategy = _unresolved_2.HorizontalMatchStrategy;
    }, function (_unresolved_3) {
      VerticalMatchStrategy = _unresolved_3.VerticalMatchStrategy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1a18UmEr9EfKGwev0/yTxs", "MatchChecker", undefined);

      _export("MatchChecker", MatchChecker = class MatchChecker {
        constructor() {
          this.matchStrategies = [];
          this.matchStrategies.push(new (_crd && HorizontalMatchStrategy === void 0 ? (_reportPossibleCrUseOfHorizontalMatchStrategy({
            error: Error()
          }), HorizontalMatchStrategy) : HorizontalMatchStrategy)());
          this.matchStrategies.push(new (_crd && VerticalMatchStrategy === void 0 ? (_reportPossibleCrUseOfVerticalMatchStrategy({
            error: Error()
          }), VerticalMatchStrategy) : VerticalMatchStrategy)());
        } //! IDEA - 3 : stategyler birbirin tekralrayan kodlar içeriyor. düzenlenmeli


        checkForMatches(pieceA, pieceB, grid) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var matchedPieces = [];

            for (var strategy of _this.matchStrategies) {
              var matches = strategy.checkMatch(pieceA, pieceB, grid);

              if (matches.length >= 3) {
                matchedPieces = matchedPieces.concat(matches);
              }
            }

            return matchedPieces;
          })();
        }

        checkForMatchesAfterGravity(grid) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var matchedPieces = [];
            var matchesAfterGravity = [];

            for (var row = 0; row < grid.length; row++) {
              for (var col = 0; col < grid[row].length; col++) {
                var piece = grid[row][col];

                if (!piece.isEmpty && !piece.isMatched) {
                  console.log("allah");

                  for (var strategy of _this2.matchStrategies) {
                    var matches = strategy.checkMatch(piece, piece, grid);

                    if (matches.length >= 3) {
                      matchedPieces = matchedPieces.concat(matches);
                      matchesAfterGravity.push(matches);
                    }
                  }
                }
              }
            }

            if (matchedPieces.length > 0) {
              yield Promise.all(matchedPieces.map(piece => piece.matched()));
            }

            console.log("matchesAfterGravity", matchesAfterGravity);
            return matchedPieces;
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b17b4dc37404e85d97546022c09be642a0d3b2c.js.map