import { _decorator, Color, Sprite, Vec3 } from "cc";
import { SingletonComponent } from "../SingletonComponent";
import { Piece } from "../Piece/Piece";
import { GridGenerator } from "./GridGenerator";
import { GameGlobal } from "../Game/GameGlobal";
import { SliderManager } from "../Interaction/SliderManager";
import { MatchChecker } from "../Match/MatchChecker";
import { GravityHandler } from "./GravityHandler";
import { PiecePool } from "../Piece/PiecePool";
const { ccclass, property } = _decorator;

@ccclass("GridManager")
export class GridManager extends SingletonComponent<GridManager> {
  private _grid: Piece[][];

  private gridGenerator: GridGenerator = null;
  private sliderManager: SliderManager = null;
  private matchChecker: MatchChecker = null;
  private gravityHandler: GravityHandler = null;

  private gridWidth: number = 0;
  public gridHeight: number = 0;
  private gridOffset: number = 0;

  private colors = {
    red: new Color(255, 0, 0),
    black: new Color(0, 0, 0),
    blue: new Color(0, 0, 255),
    yellow: new Color(255, 255, 0),
  };

  get grid() {
    return this._grid;
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

  highlightGridCorners() {
    this._grid[0][0].node.getComponentInChildren(Sprite).color =
      this.colors.black;
    this._grid[this.gridHeight - 1][0].node.getComponentInChildren(
      Sprite
    ).color = this.colors.yellow;
    this._grid[0][this.gridWidth - 1].node.getComponentInChildren(
      Sprite
    ).color = this.colors.blue;
    this._grid[this.gridHeight - 1][
      this.gridWidth - 1
    ].node.getComponentInChildren(Sprite).color = this.colors.red;
  }

  start() {
    this.gridGenerator = this.node.getComponent(GridGenerator);
    this._grid = this.gridGenerator.Generate();
    this.gridWidth = this._grid[0].length;
    this.gridHeight = this._grid.length;

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

  async deleteMatches(matches: Piece[]) {
    const fillPromises: Promise<void>[] = [];

    for (const matchedPiece of matches) {
      matchedPiece.delete();
      fillPromises.push(
        new Promise<void>((resolve) => {
          resolve();
        })
      );
    }
    await Promise.all(fillPromises);
  }
  async handleSelection(pieceA: Piece, pieceB: Piece) {
    await this.SwapPieces(pieceA, pieceB);
    let matches: Piece[] = await this.matchChecker.checkForMatches(
      pieceA,
      pieceB,
      this.grid
    );
    if (matches.length > 0) {
      await this.deleteMatches(matches);
      await this.gravityHandler.applyGravity(this.grid);
      this.consoleGrid();
      // await this.sleep(3000);
      // await this.fillEmptySpaces();
      // await this.sleep(1900);

      //buraya bir sleep patlar
      /*
      let newMatches: Piece[] = await this.matchChecker.checkForMatchesAfterGravity(this.grid);

      while (newMatches.length > 0) { 
          await this.deleteMatches(newMatches);
          await this.gravityHandler.applyGravity(this.grid);
          await this.sleep(3000);
          await this.fillEmptySpaces();
          await this.sleep(1900);

          newMatches = await this.matchChecker.checkForMatchesAfterGravity(this.grid);
      }

      */
    } else {
      await this.SwapPieces(pieceA, pieceB);
    }
  }

   sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async fillEmptySpaces() {
    const grid = this.grid;
    const fillPromises: Promise<void>[] = [];

    for (let row = 0; row < this.gridHeight; row++) {
      for (let col = 0; col < this.gridWidth; col++) {
        const piece = grid[row][col];

        if (piece.isEmpty) {
          const newPieceNode = PiecePool.getInstance().getPiece();
          newPieceNode.setParent(this.node);
          this.node.addChild(newPieceNode);
          newPieceNode.getComponentInChildren(Sprite).color =
            this.colors.yellow;

          piece.node = newPieceNode;
          piece.ResetScale();
          piece.updatePosition(row, col);

          fillPromises.push(
            new Promise<void>((resolve) => {
              resolve();
            })
          );
        }
      }
    }

    await Promise.all(fillPromises);
    console.log("empty cells filled");
  }

  consoleGrid() {
    let emptyCounter = 0;
    let row = []
    for (let i = 0; i < this.gridWidth; i++) {
      let col = []
      for (let j = 0; j < this.gridHeight; j++) {
        const currentPiece = this.grid[i][j];
        col.push(currentPiece)
        
        if (currentPiece.isEmpty) {
          emptyCounter++;
        }
      }
      row.push(col)
    }
    console.log(row);
    
    // emptyCounter === 0
    //   ? console.log("boş piece yok")
    //   : console.log(`boş piece sayısı : ${emptyCounter}`);
  }

}
