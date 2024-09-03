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

    public async checkForMatches(pieceA: Piece, pieceB: Piece, grid:Piece[][]): Promise<Piece[]> {
        let matchedPieces: Piece[] = [];
        for (const strategy of this.matchStrategies) {
            const matches = strategy.checkMatch(pieceA, pieceB , grid);
            if (matches.length >= 3) {
                matchedPieces = matchedPieces.concat(matches);
            }
        }
        return matchedPieces;
    }

    public async checkForMatchesAfterGravity(grid:Piece[][]): Promise<Piece[]> {
        let matchedPieces: Piece[] = [];

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                const piece = grid[row][col];
                if (!piece.isEmpty) {
                    for (const strategy of this.matchStrategies) {
                        const matches = strategy.checkMatch(piece, piece , grid);
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

}
