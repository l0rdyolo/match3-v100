import { _decorator, Component, Node } from 'cc';
import { Piece } from '../Piece/Piece';
import { GridManager } from '../Grid/GridManager';
const { ccclass, property } = _decorator;

@ccclass('GravityHandler')
export class GravityHandler extends Component {

    @property(GridManager)
    private gridManager: GridManager = null;

    applyGravity(matches: Piece[]) {
        const columnPieceCount = new Map<number, number>();

        for (const piece of matches) {
            const col = piece.col;
            if (columnPieceCount.has(col)) {
                columnPieceCount.set(col, columnPieceCount.get(col) + 1);
            } else {
                columnPieceCount.set(col, 1);
            }
        }

        this.applyGravityToCol(columnPieceCount);
    }

    applyGravityToCol(columnPieceCount: Map<number, number>) {
        for (const [col, count] of columnPieceCount) {
            for (let row = this.gridManager.gridHeight - 1; row >= 0; row--) {
                const piece = this.gridManager.grid[row][col];

                if (piece === null) continue; // Eğer hücre boşsa, geç

                const newRow = row + count;

                if (newRow < this.gridManager.gridHeight) {
                    // Parçayı yeni pozisyona taşı
                    this.gridManager.grid[newRow][col] = piece;
                    piece.row = newRow;
                    piece.updatePosition();

                    // Eski pozisyonu boşalt
                    this.gridManager.grid[row][col] = null;
                }
            }
        }
    }
}
