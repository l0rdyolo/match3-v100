import { _decorator, Component, Node, SpriteFrame, Vec2, Vec3 } from 'cc';
import { SingletonComponent } from '../SingletonComponent';
import { Piece } from '../Piece/Piece';
import { GridGenerator } from './GridGenerator';
import { GameGlobal } from '../Game/GameGlobal';
const { ccclass, property } = _decorator;

@ccclass("GridManager")
export class GridManager extends SingletonComponent<GridManager> {
  private _grid: Piece[][];

  private gridGenerator: GridGenerator = null;

  private gridWidth: number = 0;
  public gridHeight : number = 0;
  private gridOffset: number = 0;

   get grid(){
    return this._grid
  }

  protected onLoad(): void {
    super.onLoad();
  }

  start() {
    this.gridGenerator = this.node.getComponent(GridGenerator);
    this._grid = this.gridGenerator.Generate();
    this.gridWidth = this._grid[0].length
    this.gridHeight = this._grid.length;
    //! dinamik olmalı
    const offsetDiff = (GameGlobal.PIECE_OFFSET / 2) * this.gridWidth;
    const piecePositionsDiff = -(this.gridWidth / 2) * 100;

    const gridX = piecePositionsDiff + offsetDiff;
    this.node.setPosition(new Vec3(gridX, -200, 0));
  }

  SwapPieces(pieceA: Piece, pieceB: Piece) {
    // Mevcut satır ve sütunları saklayın
    const pa_row = pieceA.row;
    const pa_col = pieceA.col;

    const pb_row = pieceB.row;
    const pb_col = pieceB.col;

    // Parçaların satır ve sütun bilgilerini güncelleyin
    pieceA.row = pb_row;
    pieceA.col = pb_col;

    pieceB.row = pa_row;
    pieceB.col = pa_col;

    // Grid'deki yerleri geçici olarak saklayın
    const tempA = this.grid[pa_row][pa_col];
    const tempB = this.grid[pb_row][pb_col];

    // Grid'i yeni pozisyonlara göre güncelleyin
    this.grid[pa_row][pa_col] = tempB;
    this.grid[pb_row][pb_col] = tempA;

    console.log(this.grid);
}

}

// async swapPieces(piece1: Piece, piece2: Piece,piece1Pos:Vec3,piece2Pos:Vec3) {
//     console.log("Swap pieces:",piece1,piece2)
//       // Pozisyonları değiştir
//       // const tempPosition = piece1.node.position.clone();
//       //piece1.node.position = piece2.node.position;
//       // piece2.node.position = tempPosition;
//       EffectManager.movePiece(piece1.node,piece2Pos,0.1);
//       await EffectManager.movePiece(piece2.node,piece1Pos,0.1);
    
  
  
//       // Satır ve sütun değerlerini değiştir
//       const tempRow = piece1.row;
//       const tempCol = piece1.col;
//       piece1.row = piece2.row;
//       piece1.col = piece2.col;
//       piece2.row = tempRow;
//       piece2.col = tempCol;
  
  
//      /* // Type'ları değiştir
//       const tempType = piece1.type;
//       piece1.type = piece2.type;
//       piece2.type = tempType;*/
  
//       // Grid'deki referansları güncelle
//       this.gridGenerator.grid[piece1.row][piece1.col] = piece1;
//       this.gridGenerator.grid[piece2.row][piece2.col] = piece2;
//   }