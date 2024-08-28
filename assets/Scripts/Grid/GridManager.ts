import { _decorator, Color, Component, Node, Sprite, SpriteFrame, SpriteRenderer, Vec2, Vec3 } from 'cc';
import { SingletonComponent } from '../SingletonComponent';
import { Piece } from '../Piece/Piece';
import { GridGenerator } from './GridGenerator';
import { GameGlobal } from '../Game/GameGlobal';
import { SliderManager } from '../Interaction/SliderManager';
import { MatchChecker } from '../Match/MatchChecker';
import { GravityHandler } from './GravityHandler';
const { ccclass, property } = _decorator;

@ccclass("GridManager")
export class GridManager extends SingletonComponent<GridManager> {
  private _grid: Piece[][];

  private gridGenerator: GridGenerator = null;
  private sliderManager : SliderManager = null;
  private matchChecker : MatchChecker = null;
  private gravityHandler : GravityHandler = null;

  private gridWidth: number = 0;
  public gridHeight : number = 0;
  private gridOffset: number = 0;

  private colors = {
    red: new Color(255, 0, 0),
    black: new Color(0, 0, 0),
    blue: new Color(0, 0, 255),
    yellow: new Color(255, 255, 0),
};

   get grid(){
    return this._grid
  }

  protected onLoad(): void {
    super.onLoad();
    this.init();
  }



  protected init(): void {
    this.sliderManager = new SliderManager();
    this.matchChecker = new MatchChecker();
    this.gravityHandler = new GravityHandler();
    
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
    // this.highlightGridCorners();
  }

  async SwapPieces(pieceA: Piece, pieceB: Piece) {
    await this.sliderManager.Slide(pieceA, pieceB);
    const pa_row = pieceA.row;
    const pa_col = pieceA.col;

    const pb_row = pieceB.row;
    const pb_col = pieceB.col;

    pieceA.row = pb_row;
    pieceA.col = pb_col;

    pieceB.row = pa_row;
    pieceB.col = pa_col;

    const tempA = this.grid[pa_row][pa_col];
    const tempB = this.grid[pb_row][pb_col];

    this.grid[pa_row][pa_col] = tempB;
    this.grid[pb_row][pb_col] = tempA;
  }

  deleteMatches(matches : Piece[]){
    for (const matchedPiece of matches) {
      matchedPiece.delete()
    }
  }

  highlightGridCorners(){
    this._grid[0][0].node.getComponentInChildren(Sprite).color = this.colors.black;
    this._grid[this.gridHeight - 1][0].node.getComponentInChildren(Sprite).color = this.colors.yellow;
    this._grid[0][this.gridWidth - 1].node.getComponentInChildren(Sprite).color = this.colors.blue;
    this._grid[this.gridHeight - 1][this.gridWidth - 1].node.getComponentInChildren(Sprite).color = this.colors.red;
  }

  async handleSelection(pieceA : Piece , pieceB : Piece){
    await this.SwapPieces(pieceA , pieceB);
    let matches: Piece[] = await this.matchChecker.checkForMatches(pieceA, pieceB);
    
    if (matches.length > 0) {
        this.deleteMatches(matches);
        await this.gravityHandler.applyGravity(); // Gravity işleminin tamamlanmasını bekle
        // // Gravity sonrası yeni eşleşmeleri kontrol et
        // do {
        //     matches = await this.matchChecker.checkForMatchesAfterGravity();
        //     if (matches.length > 0) {
        //         GridManager.getInstance().deleteMatches(matches);
        //         await this.gravityHandler.applyGravity(); // Yeni gravity işlemini uygula ve bekle
        //     }
        // } while (matches.length > 0);

    } else {
        await this.SwapPieces(pieceA,pieceB);
    }
  }

}