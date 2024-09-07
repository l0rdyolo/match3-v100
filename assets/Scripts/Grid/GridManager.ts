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


  async deleteMatches(matches: Piece[]) {
    for (const matchedPiece of matches) {
      console.log(matchedPiece);
      matchedPiece.matched();
    }
  }
  async handleSelection(pieceA: Piece, pieceB: Piece) {
    await this.sliderManager.SwapPieces(pieceA, pieceB);
    let isMatch = false;
    let matches: Piece[] = await this.matchChecker.checkForMatches(
      pieceA,
      pieceB,
      this._grid
    );

    if (matches.length === 0) {
      await this.sliderManager.SwapPieces(pieceA, pieceB);
      return;
    }
    else{
      isMatch = true;
      await this.deleteMatches(matches);
    }
      
    while (isMatch) {
      await this.sleep(1000);
      await this.gravityHandler.applyGravity(this._grid);
      await this.sleep(1000);
      await this.fillEmptySpaces();
      await this.sleep(1000);
      isMatch = await this.matchChecker.checkForMatchesAfterGravity(this._grid);
    }
      
  }

  //! şunu başka yere taşı ya da kaldır
  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
          // newPieceNode.getComponentInChildren(Sprite).color =
          //   this.colors.yellow;

          
          piece.col = col;
          piece.row = row;
          piece.assingPiece(newPieceNode)
          piece.ResetScale();
          console.log(piece.col);
          
          piece.node.setPosition(new Vec3(piece.col * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET), this.gridWidth * GameGlobal.PIECE_CONTENT_SIZE, 0));
          piece.updatePosition(row,col)
          fillPromises.push(
            new Promise<void>((resolve) => {
              resolve();
            })
          );
        }
      }
    }
  }


  consoleGrid() {
    let emptyCounter = 0;
    let row = [];
    for (let i = 0; i < this.gridWidth; i++) {
      let col = [];
      for (let j = 0; j < this.gridHeight; j++) {
        const currentPiece = this.grid[i][j];
        col.push(currentPiece);

        if (currentPiece.isEmpty) {
          emptyCounter++;
        }
      }
      row.push(col);
    }
    console.log(row);

    // emptyCounter === 0
    //   ? console.log("boş piece yok")
    //   : console.log(`boş piece sayısı : ${emptyCounter}`);
  }
}
