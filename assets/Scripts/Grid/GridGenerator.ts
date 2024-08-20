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

  private PIECE_OFFSET: number = 5;

  @property(CCInteger)
  private width: number = 0;

  @property(CCInteger)
  private height: number = 0;

  private PIECE_CONTENT_SIZE: number = 100; //dinamikleştir

  private interactionManager: InteractionManager = new InteractionManager();

  protected start(): void {
    //!TODO: grid yerleşmesini ve content size'ı responsive yapmalıyız
    this.Generate();
  }

  //! todo rowlari tweenleyebiliriz
  public async Generate() {
    for (let row = 0; row < this.width; row++) {
      this.grid[row] = []
      for (let col = 0; col < this.height; col++) {
        const pieceNode = this.createPiece(row, col);
        const piece = new Piece(row , col , pieceNode , PieceTypes.Normal);
        this.grid[row][col] = piece;
      }
    }
  }

  //bu fonksiyon init olurken match var mı diye kontrol edip piece üretiyor.
  private createPiece(row: number, col: number): Node {
    let piece: Node | null;
    do {
        piece = PiecePool.getInstance().getPiece();
        
        if(!piece) {
            console.error("Piece could not be instantiated.");
            continue;
        } 
        piece.setParent(this.node);
        piece.setPosition(this.getCenteredPosition(col, row));
        this.node.addChild(piece);  
    } while (this.createsMatch(piece, row, col, this.grid));
    return piece!;
}


  private createsMatch(
    piece: Node,
    row: number,
    col: number,
    grid: Piece[][]
  ): boolean {
    return false;
    if (
      row >= 2 &&
      grid[row - 1][col]?.node.name === piece.name &&
      grid[row - 2][col]?.node.name === piece.name
    ) {
      // this.piecesPool.returnPieceToPool(piece);
      return true;
    }

    if (
      col >= 2 &&
      grid[row][col - 1]?.node.name === piece.name &&
      grid[row][col - 2]?.node.name === piece.name
    ) {
      // this.piecesPool.returnPieceToPool(piece);
      return true;
    }
    return false;
  }

  private getCenteredPosition(j: number, i: number): Vec3 {
    //EVERY game board should be square matrix
    const _j = j * (this.PIECE_CONTENT_SIZE + this.PIECE_OFFSET); //- ((this.PIECE_CONTENT_SIZE * 4.5))//(Math.round(this.GRID_ROW / 2))) )
    const _i = i * (this.PIECE_CONTENT_SIZE + this.PIECE_OFFSET); //- ((this.PIECE_CONTENT_SIZE * 4.5))//(Math.round(this.GRID_ROW / 2))) )
    return new Vec3(_j, _i);
  }
}
