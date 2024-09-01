import { GridManager } from "../../Grid/GridManager";
import { Piece } from "../../Piece/Piece";
import { MatchStrategy } from "./IMatchStrategy";

export class VerticalMatchStrategy implements MatchStrategy {
    public directions = [
        { dx: 1, dy: 0 }, // Down
        { dx: -1, dy: 0 } // Up
    ];

    public checkMatch(pieceA: Piece , pieceB : Piece , grid: Piece[][])  {
        const firstCheck = this.checkSinglePieceMatch(pieceA , grid);
        let secondCheck = this.checkSinglePieceMatch(pieceB , grid)
        secondCheck = secondCheck.concat(firstCheck)
        return secondCheck;;
    }

    public checkSinglePieceMatch(piece: Piece, grid: Piece[][]){
        // VerticalMatchStrategy.ts
        const matches: Piece[] = [piece];
        const row = piece.row;
        const col = piece.col;

        for (let i = row - 1; i >= 0; i--) {
            const currentPiece = grid[i][col]
            if(currentPiece.isEmpty || piece.isEmpty) break;
            if (grid[i][col].node.name === piece.node.name) {
                matches.push(currentPiece);
            } else {
                break; 
            }
        }

        for (let i = row + 1; i < grid.length; i++) {
            const currentPiece = grid[i][col]
            if(currentPiece.isEmpty || piece.isEmpty) break;

            if (currentPiece.node.name === piece.node.name) {
                matches.push(currentPiece);
            } else {
                break; 
            }
        }
        return matches.length >= 3 ? matches : [];
    }
}