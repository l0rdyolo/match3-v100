System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HorizontalMatchStrategy, VerticalMatchStrategy, MatchChecker, _crd;

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
        }

        checkForMatches(piece, grid) {
          var matchedPieces = [];

          for (var strategy of this.matchStrategies) {
            var matches = strategy.checkMatch(piece, grid);

            if (matches.length >= 3) {
              matchedPieces = matchedPieces.concat(matches);
            }
          }

          return matchedPieces;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=637e3fce42917e78b54b09ac7ec187f6cd5f4097.js.map