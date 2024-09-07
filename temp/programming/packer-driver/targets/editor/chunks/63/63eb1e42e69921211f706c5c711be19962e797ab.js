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
        } //! IDEA - 3 : stategyler birbirin tekralrayan kodlar içeriyor. düzenlenmeli


        async checkForMatches(pieceA, pieceB, grid) {
          let matchedPieces = [];

          for (const strategy of this.matchStrategies) {
            const matches = strategy.checkMatch(pieceA, pieceB, grid);

            if (matches.length >= 3) {
              matchedPieces = matchedPieces.concat(matches);
            }
          }

          return matchedPieces;
        } // public async checkForMatchesAfterGravity(grid:Piece[][]): Promise<Piece[]> {
        //     let matchedPieces: Piece[] = [];
        //     let matchesAfterGravity: Piece[][] = [];
        //     for (let row = 0; row < grid.length; row++) {
        //         for (let col = 0; col < grid[row].length; col++) {
        //             const piece = grid[row][col];
        //             if (!piece.isEmpty && !piece.isMatched) {
        //                 console.log("allah");
        //                 for (const strategy of this.matchStrategies) {
        //                     const matches = strategy.checkMatch(piece, piece , grid);
        //                     if (matches.length >= 3) {
        //                         matchedPieces = matchedPieces.concat(matches);
        //                         matchesAfterGravity.push(matches);
        //                     }
        //                 }
        //             }
        //         }
        //     }
        //     if (matchedPieces.length > 0) {
        //         await Promise.all(matchedPieces.map(piece => piece.matched()));
        //     }
        //     console.log("matchesAfterGravity",matchesAfterGravity);
        //     return matchedPieces;
        // }


        async checkForMatchesAfterGravity(grid) {
          let matchedPieces = [];
          let flag = false;

          for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
              const pieceA = grid[row][col];
              const pieceB = grid[row][col];

              if (!pieceA.isEmpty && !pieceA.isMatched && !pieceB.isEmpty && !pieceB.isMatched) {
                for (const strategy of this.matchStrategies) {
                  const matches = strategy.checkMatch(pieceA, pieceB, grid);

                  if (matches.length >= 3) {
                    flag = true;
                    matchedPieces = matchedPieces.concat(matches);
                  }
                }
              }
            }
          }

          if (matchedPieces.length > 0) {
            await Promise.all(matchedPieces.map(piece => piece.matched()));
          }

          return flag;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=63eb1e42e69921211f706c5c711be19962e797ab.js.map