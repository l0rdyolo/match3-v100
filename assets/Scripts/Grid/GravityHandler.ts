import { _decorator, Component, Vec3 } from "cc";
import { SingletonComponent } from "../SingletonComponent";
import { GridManager } from "./GridManager";
import { Piece } from "../Piece/Piece";
const { ccclass, property } = _decorator;

@ccclass("GravityHandler")
export class GravityHandler extends Component {
  onLoad() {
    super.onLoad();
  }

  //! IDEA - burada patlıyoruz
  async applyGravity(grid) {
    let moved = false;
    let promises: Promise<void>[] = [];
    do {
      moved = false;

      for (let col = 0; col < grid[0].length; col++) {
        for (let row = grid.length - 2; row >= 0; row--) { 
          const currentPiece = grid[row][col];
          const belowPiece = grid[row + 1][col];

          if (currentPiece.isEmpty && !belowPiece.isEmpty) { 
            grid[row][col] = belowPiece;
            grid[row + 1][col] = currentPiece;

            belowPiece.col = currentPiece.col;
            belowPiece.row = currentPiece.row;

            promises.push(belowPiece.moveToPosition(new Vec3(col, row, 0)));
            moved = true;
          }
        }
      }
      await Promise.all(promises);
    } while (moved); 
  }
}
