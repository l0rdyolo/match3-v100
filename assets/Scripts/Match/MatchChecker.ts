import { Piece } from "../Piece/Piece";
import { HorizontalMatchStrategy } from "./MatchStrategies/HorizontalMatchStrategy";
import { MatchStrategy } from "./MatchStrategies/IMatchStrategy";
import { VerticalMatchStrategy } from "./MatchStrategies/VerticalMatchStrategy";
import { GridManager } from "../Grid/GridManager";

export class MatchChecker {
  private matchStrategies: MatchStrategy[] = [];

  constructor() {
    this.matchStrategies.push(new HorizontalMatchStrategy());
    this.matchStrategies.push(new VerticalMatchStrategy());
  }
  //! IDEA - 3 : stategyler birbirin tekralrayan kodlar içeriyor. düzenlenmeli

  public async checkForMatches(
    pieceA: Piece,
    pieceB: Piece,
    grid: Piece[][]
  ): Promise<Piece[]> {
    let matchedPieces: Piece[] = [];

    for (const strategy of this.matchStrategies) {
      const matches = strategy.checkMatch(pieceA, pieceB, grid);
      if (matches.length >= 3) {
        matchedPieces = matchedPieces.concat(matches);
      }
    }
    return matchedPieces;
  }

  // public async checkForMatchesAfterGravity(grid:Piece[][]): Promise<Piece[]> {
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
  public async checkForMatchesAfterGravity(grid: Piece[][]) : Promise<boolean> {
    let matchedPieces: Piece[] = [];
    let flag : boolean = false;
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const pieceA = grid[row][col];
        const pieceB = grid[row][col];

        if (
          !pieceA.isEmpty &&
          !pieceA.isMatched &&
          !pieceB.isEmpty &&
          !pieceB.isMatched
        ) {
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
}
