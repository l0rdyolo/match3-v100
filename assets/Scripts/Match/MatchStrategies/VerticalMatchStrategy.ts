import { GridManager } from "../../Grid/GridManager";
import { Piece } from "../../Piece/Piece";
import { MatchStrategy } from "./IMatchStrategy";

export class VerticalMatchStrategy implements MatchStrategy {
    public directions = [
        { dx: 1, dy: 0 }, // Down
        { dx: -1, dy: 0 } // Up
    ];

    public checkMatch(pieceA: Piece , pieceB : Piece  )  {
        console.log("vertical matc");
        
        const grid = GridManager.getInstance().grid;
        const firstCheck = this.checkSinglePieceMatch(pieceA , grid);
        let secondCheck = this.checkSinglePieceMatch(pieceB , grid)
        secondCheck = secondCheck.concat(firstCheck)
        return secondCheck;;
    }

    public checkSinglePieceMatch(piece: Piece, grid: Piece[][]){
        let matchedPieces: Piece[] = [];
        const { row, col } = piece;

        for (const direction of this.directions) {
            let currentRow = row + direction.dx;
            let currentCol = col;

            while (currentRow >= 0 && currentRow < grid.length) {
                const currentPiece = grid[currentRow][currentCol];
                if (currentPiece && currentPiece.node.name === piece.node.name) {
                    matchedPieces.push(currentPiece);
                } else {
                    break;
                }
                currentRow += direction.dx;
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