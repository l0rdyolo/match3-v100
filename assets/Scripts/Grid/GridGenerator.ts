import { _decorator, Component, Node, Vec3, CCInteger } from "cc";
import { Piece } from "../Piece/Piece";
import { InteractionManager } from "../Interaction/InteractionManager";
import { PieceTypes } from "../Piece/PieceTypes";
import { PiecePool } from "../Piece/PiecePool";
import { SelectionManager } from "../Interaction/SelectionManager";
const { ccclass, property } = _decorator;

@ccclass("GridGenerator")
export class GridGenerator extends Component {
  public grid: Piece[][] = [];

  public PIECE_OFFSET: number = 5;

  @property(CCInteger)
  public width: number = 0;

  @property(CCInteger)
  private height: number = 0;

  private PIECE_CONTENT_SIZE: number = 100; //dinamikleştir

  private interactionManager: InteractionManager = new InteractionManager();

  protected start(): void {
    //!TODO: grid yerleşmesini ve content size'ı responsive yapmalıyız
    console.log(this.node.getParent());

  }

  //! todo rowlari tweenleyebiliriz
  public Generate() : Piece[][] {
    for (let row = 0; row < this.width; row++) {
      this.grid[row] = [];
      for (let col = 0; col < this.height; col++) {
        const piece = this.createPiece(row, col);
        this.grid[row][col] = piece;
      }
    }
    return this.grid;
  }
  private createPiece(row: number, col: number): Piece {
    let pieceNode: Node | null;
    let piece: Piece | null;
    do {
        pieceNode = PiecePool.getInstance().getPiece();
        
        if (!pieceNode) {
            console.error("Piece could not be instantiated.");
            continue;
        }
        piece = new Piece(row, col, pieceNode, PieceTypes.Normal);
        piece.node.setParent(this.node);
        this.node.addChild(piece.node);
        piece.node.setPosition(this.getCenteredPosition(col, row));

    } while (this.createsMatch(piece, row, col, this.grid));

    return piece!;
}

private createsMatchByName(
  piece: Piece,
  row: number,
  col: number,
  grid: Piece[][]
): boolean {
  let isMatch = false;

  if (
      row >= 2 &&
      grid[row - 1][col]?.node.name === piece.node.name &&
      grid[row - 2][col]?.node.name === piece.node.name
  ) {
      isMatch = true;
  }

  if (
      col >= 2 &&
      grid[row][col - 1]?.node.name === piece.node.name &&
      grid[row][col - 2]?.node.name === piece.node.name
  ) {
      isMatch = true;
  }
  if(isMatch) PiecePool.getInstance().returnPiece(piece.node);
  return isMatch;
}

private createsMatch(
  piece: Piece,
  row: number,
  col: number,
  grid: Piece[][]
): boolean {
  return this.createsMatchByName(piece, row, col, grid);
}

  private getCenteredPosition(j: number, i: number): Vec3 {
    //EVERY game board should be square matrix
    const _j = j * (this.PIECE_CONTENT_SIZE + this.PIECE_OFFSET); //- ((this.PIECE_CONTENT_SIZE * 4.5))//(Math.round(this.GRID_ROW / 2))) )
    const _i = i * (this.PIECE_CONTENT_SIZE + this.PIECE_OFFSET); //- ((this.PIECE_CONTENT_SIZE * 4.5))//(Math.round(this.GRID_ROW / 2))) )
    return new Vec3(_j, _i);
  }
}
