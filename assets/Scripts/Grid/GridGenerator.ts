import {
  _decorator,
  Component,
  Node,
  Vec3,
  EventTouch,
  Vec2,
  CCInteger,
} from "cc";
import { PiecesPool } from "../Poolable/PiecesPool";
import { EffectManager } from "../Effects/EffectManager";
import { InteractionManager } from "../Interaction/InteractionManager";
const { ccclass, property } = _decorator;

type PieceProps = {
  piece: Node;
  targetPosition: Vec3;
};

@ccclass("GridGenerator")
export class GridGenerator extends Component {
  private gridMap: Map<Node, { row: number; col: number }> = new Map();
  private grid: Node[][] = [];

  @property(PiecesPool)
  private piecesPool: PiecesPool = null;

  @property(CCInteger)
  private PIECE_OFFSET: number = 5;

  @property(CCInteger)
  GRID_ROW: number = 0;

  private PIECE_CONTENT_SIZE: number = 100; //dinamikleştir

  private interactionManager: InteractionManager = new InteractionManager();

  protected start(): void {
    //!TODO: grid yerleşmesini ve content size'ı responsive yapmalıyız
    this.node.setPosition(-7*50, -500);
    this.generateGrid();
  }

  private async generateGrid() {
    for (let row = 0; row < this.GRID_ROW; row++) {
      this.grid[row] = [];
      const piecesInRow: PieceProps[] = [];

      for (let col = 0; col < this.GRID_ROW; col++) {
        const piece: Node = this.createPiece(row, col);
        this.gridMap.set(piece, { row, col });
        this.grid[row][col] = piece;
        const pieceLastPosition = this.getCenteredPosition(col, row);
        const pieceFirstPosition = new Vec3(
          pieceLastPosition.x,
          this.GRID_ROW * this.PIECE_CONTENT_SIZE
        );
        piece.setPosition(pieceFirstPosition);
        //piecelere event listener ekliyoruz
        // piece.on(Node.EventType.TOUCH_START, this.onPieceClicked, this);
        piece.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
          this.interactionManager.onPieceClicked(event, piece , this.gridMap);
        });
        this.grid[row][col] = piece;

        const pieceProps: PieceProps = {
          piece: piece,
          targetPosition: pieceLastPosition,
        };
        piecesInRow.push(pieceProps);
      }
      await EffectManager.animateRowFall(piecesInRow, 0.1);
    }
  }

  private createPiece(row: number, col: number): Node {
    let piece: Node;
    do {
      piece = this.piecesPool.getPieceFromPool();
      piece.setParent(this.node);
    } while (this.createsMatch(piece, row, col, this.grid));
    piece.setPosition(this.getCenteredPosition(col, row));
    this.node.addChild(piece);
    return piece;
  }

  private createsMatch(
    piece: Node,
    row: number,
    col: number,
    grid: Node[][]
  ): boolean {
    if (
      row >= 2 &&
      grid[row - 1][col]?.name === piece.name &&
      grid[row - 2][col]?.name === piece.name
    ) {
      this.piecesPool.returnPieceToPool(piece);
      return true;
    }

    if (
      col >= 2 &&
      grid[row][col - 1]?.name === piece.name &&
      grid[row][col - 2]?.name === piece.name
    ) {
      this.piecesPool.returnPieceToPool(piece);
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
