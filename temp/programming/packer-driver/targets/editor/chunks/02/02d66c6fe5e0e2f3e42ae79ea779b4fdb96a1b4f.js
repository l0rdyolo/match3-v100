System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HorizontalMatchStrategy, VerticalMatchStrategy, GridManager, MatchChecker, _crd;

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

  function _reportPossibleCrUseOfGridManager(extras) {
    _reporterNs.report("GridManager", "../Grid/GridManager", _context.meta, extras);
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
    }, function (_unresolved_4) {
      GridManager = _unresolved_4.GridManager;
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


        async checkForMatches(pieceA, pieceB, grid) {
          let matchedPieces = [];

          for (const strategy of this.matchStrategies) {
            const matches = strategy.checkMatch(pieceA, pieceB, grid);

            if (matches.length >= 3) {
              matchedPieces = matchedPieces.concat(matches);
            }
          }

          if (matchedPieces.length > 0) {
            await Promise.all(matchedPieces.map(piece => piece.matched()));
          }

          return matchedPieces;
        }

        async checkForMatchesAfterGravity() {
          const grid = (_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
            error: Error()
          }), GridManager) : GridManager).getInstance().grid;
          let matchedPieces = [];

          for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
              const piece = grid[row][col];

              if (piece) {
                for (const strategy of this.matchStrategies) {
                  const matches = strategy.checkMatch(piece, piece, grid);

                  if (matches.length >= 3) {
                    matchedPieces = matchedPieces.concat(matches);
                  }
                }
              }
            }
          }

          if (matchedPieces.length > 0) {
            await Promise.all(matchedPieces.map(piece => piece.matched()));
          }

          return matchedPieces;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=02d66c6fe5e0e2f3e42ae79ea779b4fdb96a1b4f.js.map