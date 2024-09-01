import { GridManager } from "../../Grid/GridManager";
import { Piece } from "../../Piece/Piece";
import { MatchChecker } from "../MatchChecker";
import { MatchStrategy } from "./IMatchStrategy";

export class HorizontalMatchStrategy implements MatchStrategy {
    public directions = [
        { dx: 0, dy: 1 }, // Right
        { dx: 0, dy: -1 } // Left
    ];

    public checkMatch(pieceA: Piece , pieceB : Piece ,grid : Piece[][] )  {
        const firstCheck = this.checkSinglePieceMatch(pieceA , grid);
        let secondCheck = this.checkSinglePieceMatch(pieceB , grid);
        secondCheck = secondCheck.concat(firstCheck)
        return secondCheck;;
    }


    public checkSinglePieceMatch(piece: Piece, grid: Piece[][]){
        const matches: Piece[] = [piece];
        const row = piece.row;
        const col = piece.col;

        // Soldaki elemanları kontrol et
        for (let i = col - 1; i >= 0; i--) {
            const currentPiece = grid[row][i];
            if(currentPiece.isEmpty || piece.isEmpty) break;

            if (currentPiece.node.name === piece.node.name) {
                matches.push(currentPiece);
            } else {
                break; // Eşleşme kesilirse dur
            }
        }

        // Sağdaki elemanları kontrol et
        for (let i = col + 1; i < grid[row].length; i++) {
            const currentPiece = grid[row][i];
            if(currentPiece.isEmpty || piece.isEmpty) break;
            if (currentPiece.node.name === piece.node.name) {
                matches.push(currentPiece);
            } else {
                break; // Eşleşme kesilirse dur
            }
        }

        return matches.length >= 3 ? matches : [];
    }
}