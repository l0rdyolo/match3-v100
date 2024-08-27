import { _decorator, Vec3 } from "cc";
import { SingletonComponent } from "../SingletonComponent";
import { GridManager } from "./GridManager";
const { ccclass, property } = _decorator;

@ccclass('GravityHandler')
export class GravityHandler extends SingletonComponent<GravityHandler> {
    onLoad() {
        super.onLoad();
    }

    async applyGravity() {
        const grid = GridManager.getInstance().grid;
        let moved = false;

        do {
            moved = false;
            for (let col = 0; col < grid[0].length; col++) {
                for (let row = grid.length - 1; row > 0; row--) {
                    if(row+1 > grid.length-1) continue;
                    if (grid[row][col].node === null && grid[row + 1][col].node !== null) {
                        grid[row][col].node = grid[row + 1][col].node;
                        grid[row + 1][col].node = null;
                        const piece = grid[row][col]
                        piece.moveToPosition(new Vec3(col, row, 0));
                        moved = true;
                    }
                }
            }
        } while (moved);
        // this.fillEmptySpaces();
    }

    private fillEmptySpaces() {
        const grid = GridManager.getInstance().grid;
        for (let col = 0; col < grid[0].length; col++) {
            let emptySpaces = 0;
            for (let row = 0; row < grid.length; row++) {
                if (grid[row][col].node === null) {
                    emptySpaces++;
                }
            }
            
            // // Boş alanları yeni parçalarla doldur
            // for (let i = 0; i < emptySpaces; i++) {
            //     const newPiece = this.createNewPiece();
            //     const row = emptySpaces - i - 1;
            //     grid[row][col].node = newPiece;
            //     const pieceComponent = newPiece.getComponent(Piece);
            //     pieceComponent.moveToPosition(new Vec3(col, row, 0));
            // }
        }
    }

    // private createNewPiece(): Node {
    //     // Yeni bir parça oluştur ve döndür
    //     // Bu metodu kendi oyununuza göre uyarlamanız gerekecek
    // }
}