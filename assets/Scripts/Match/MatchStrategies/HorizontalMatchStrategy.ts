import { GridManager } from "../../Grid/GridManager";
import { Piece } from "../../Piece/Piece";
import { MatchChecker } from "../MatchChecker";
import { MatchStrategy } from "./IMatchStrategy";

export class HorizontalMatchStrategy implements MatchStrategy {
    public directions = [
        { dx: 0, dy: 1 }, // Right
        { dx: 0, dy: -1 } // Left
    ];

    public checkMatch(pieceA: Piece , pieceB : Piece  )  {
        const grid = GridManager.getInstance().grid;
        const firstCheck = this.checkSinglePieceMatch(pieceA , grid);
        let secondCheck = this.checkSinglePieceMatch(pieceB , grid);
        secondCheck = secondCheck.concat(firstCheck)
        return secondCheck;;
    }



    public checkSinglePieceMatch(piece: Piece, grid: Piece[][]){
        let matchedPieces: Piece[] = [];
        const { row, col } = piece;
        for (const direction of this.directions) {
            let currentRow = row;
            let currentCol = col + direction.dy;

            while (currentCol >= 0 && currentCol < grid[0].length) {
                const currentPiece = grid[currentRow][currentCol];
                if(!currentPiece) continue; 
                if (currentPiece.canSelect && currentPiece.node.name === piece.node.name) {
                    matchedPieces.push(currentPiece);
                } else {
                    break;
                }
                currentCol += direction.dy;
            }
        }

        if (matchedPieces.length >= 2) {
            matchedPieces.push(piece);
        }
        else{
            matchedPieces = [];
        }

        return matchedPieces;
    }
}