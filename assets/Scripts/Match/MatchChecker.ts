import { Piece } from "../Piece/Piece";
import { HorizontalMatchStrategy } from "./MatchStrategies/HorizontalMatchStrategy";
import { MatchStrategy } from "./MatchStrategies/IMatchStrategy";
import { VerticalMatchStrategy } from "./MatchStrategies/VerticalMatchStrategy";

export class MatchChecker {
    private matchStrategies: MatchStrategy[] = [];

    constructor() {
        this.matchStrategies.push(new HorizontalMatchStrategy());
        this.matchStrategies.push(new VerticalMatchStrategy());
        
    }

    public async checkForMatches(pieceA: Piece, pieceB: Piece): Promise<Piece[]> {
        
        let matchedPieces: Piece[] = [];

        for (const strategy of this.matchStrategies) {
            const matches = strategy.checkMatch(pieceA, pieceB);
            if (matches.length >= 3) {
                matchedPieces = matchedPieces.concat(matches);
            }
        }

        if (matchedPieces.length > 0) {
            await Promise.all(matchedPieces.map(piece => piece.matched()));
        }

        return matchedPieces;
    }
}