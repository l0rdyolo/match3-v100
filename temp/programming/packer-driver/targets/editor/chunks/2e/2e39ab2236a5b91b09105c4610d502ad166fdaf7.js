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

        async checkForMatches(pieceA, pieceB) {
          let matchedPieces = [];

          for (const strategy of this.matchStrategies) {
            const matches = strategy.checkMatch(pieceA, pieceB);

            if (matches.length >= 3) {
              matchedPieces = matchedPieces.concat(matches);
            }
          }

          for (const piece of matchedPieces) {
            await piece.matched();
          }

          return matchedPieces;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e39ab2236a5b91b09105c4610d502ad166fdaf7.js.map