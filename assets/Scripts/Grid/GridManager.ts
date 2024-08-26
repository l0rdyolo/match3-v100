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

  deleteMatches(matches : Piece[]){
    for (const matchedPiece of matches) {
      matchedPiece.delete()
    }
  }

}