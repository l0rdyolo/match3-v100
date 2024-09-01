import { Piece } from "../../Piece/Piece";

export interface MatchStrategy {
    directions: { dx: number, dy: number }[];
    checkMatch(pieceA: Piece , pieceB : Piece , grid : Piece[][] ): Piece[];
}