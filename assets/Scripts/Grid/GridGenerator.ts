import { _decorator, Component, Node, Vec3, CCInteger } from "cc";
import { Piece } from "../Piece/Piece";
import { InteractionManager } from "../Interaction/InteractionManager";
import { PieceTypes } from "../Piece/PieceTypes";

const { ccclass, property } = _decorator;

@ccclass("GridManager")
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
    // this.node.setPosition(-7*50, -500);
    this.Generate();
  }

  public async Generate() {
    for (let row = 0; row < this.width; row++) {
      this.grid[row] = []
      for (let col = 0; col < this.height; col++) {
        const pieceNode = this.createPiece(row, col);
        const piece = new Piece(row , col , pieceNode , PieceTypes.Normal);
        this.grid[row][col] = piece;
      }
    }

    console.log(this.grid);
    
    // for (let row = 0; row < this.GRID_ROW; row++) {
    //   this.grid[row] = [];
    //   const piecesInRow: PieceProps[] = [];
    //   for (let col = 0; col < this.GRID_ROW; col++) {
    //     const piece: Node = this.createPiece(row, col);
    //     this.grid[row][col] = piece;
    //     const pieceLastPosition = this.getCenteredPosition(col, row);
    //     const pieceFirstPosition = new Vec3(
    //       pieceLastPosition.x,
    //       this.GRID_ROW * this.PIECE_CONTENT_SIZE
    //     );
    //     piece.setPosition(pieceFirstPosition);
    //     //piecelere event listener ekliyoruz
    //     // piece.on(Node.EventType.TOUCH_START, this.onPieceClicked, this);
    //     piece.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
    //       this.interactionManager.onPieceClicked(event, piece , this.gridMap);
    //     });
    //     this.grid[row][col] = piece;

    //     const pieceProps: PieceProps = {
    //       piece: piece,
    //       targetPosition: pieceLastPosition,
    //     };
    //     piecesInRow.push(pieceProps);
    //   }
    //   await EffectManager.animateRowFall(piecesInRow, 0.1);
    // }
  }

  //bu fonksiyon init olurken match var mı diye kontrol edip piece üretiyor.
  private createPiece(row: number, col: number): Node {
    let piece: Node;
    do {
      // piece = this.piecesPool.getPieceFromPool();
      if(!piece) continue; 
      piece!.setParent(this.node);
      piece!.setPosition(this.getCenteredPosition(col, row));
      this.node.addChild(piece!);  
    } while (this.createsMatch(piece!, row, col, this.grid));
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
