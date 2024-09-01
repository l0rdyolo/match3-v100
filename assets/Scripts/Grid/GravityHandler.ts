import { _decorator, Component, Vec3 } from "cc";
import { SingletonComponent } from "../SingletonComponent";
import { GridManager } from "./GridManager";
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
        for (let row = grid.length - 2; row >= 0; row--) { // grid.length - 1'den başlıyoruz çünkü alttaki elemanı kontrol ediyoruz
          const currentPiece = grid[row][col];
          const belowPiece = grid[row + 1][col];

          if (currentPiece.isEmpty && !belowPiece.isEmpty) { // Boş hücre ve dolu hücre kontrolü
            // Parçaların yerlerini değiştir
            grid[row][col] = belowPiece;
            grid[row + 1][col] = currentPiece;

            // Yeni satır ve sütunları güncelle
            belowPiece.col = currentPiece.col;
            belowPiece.row = currentPiece.row;

            // Parçayı hareket ettir ve grid güncelle
            promises.push(belowPiece.moveToPosition(new Vec3(col, row, 0)));
            moved = true;
          }
        }
      }
      await Promise.all(promises);
    } while (moved); // Tüm parçalar en alt seviyeye kadar hareket edene kadar devam et
  }
}
