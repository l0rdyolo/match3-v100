import { _decorator, Component, Vec3 } from "cc";
import { Piece } from "../Piece/Piece";
const { ccclass, property } = _decorator;

@ccclass("GravityHandler")
export class GravityHandler extends Component {
  onLoad() {
    super.onLoad();
  }

  async applyGravity(grid) {
    let moved = false;
    let promises: Promise<void>[] = [];

    do {
      moved = false;

      for (let col = 0; col < grid[0].length; col++) {
        for (let row = grid.length - 1; row >= 1; row--) {
          const currentPiece = grid[row][col];
          const belowPiece = grid[row -1][col];

          if (belowPiece.isEmpty && !currentPiece.isEmpty) {
            const targetRow = row + 1;
            const targetCol = col;

            promises.push(currentPiece.updatePosition(belowPiece.row,belowPiece.col));

            // Node'u yer değiştir
            belowPiece.clearPiece();
            belowPiece.assingPiece(currentPiece.node)
            currentPiece.clearPiece();
            moved = true;
          }
        }
      }

      await Promise.all(promises);
    } while (moved); 

    

  }
}
