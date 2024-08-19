import {
  _decorator,
  Component,
  EventTouch,
  Node,
  tween,
  Vec3,
} from "cc";
import { MatchChecker } from "../Grid/MatchChecker";
import { EffectManager } from "../Effects/EffectManager";
const { ccclass, property } = _decorator;

@ccclass("InteractionManager")
export class InteractionManager extends Component {
  private grid: Node[][] = [];
  // private selectedPiece: Node | null = null;
  private firstSelectedPiece: Node | null = null;
  private secondSelectedPiece: Node | null = null;

  public initializeGrid(grid: Node[][]) {
    this.grid = grid;
  }

  public async onPieceClicked(
    event: EventTouch,
    piece: Node,
    gridMap: Map<Node, { row: number; col: number }>
  ) {
    if (this.firstSelectedPiece) {
      this.secondSelectedPiece = piece;

      const pieceA = this.secondSelectedPiece;
      const pieceB = this.firstSelectedPiece;

      const posA = pieceA.getPosition();
      const posB = pieceB.getPosition();

      //burada amacım 1 birimlik değişim olmuşsa matchchecker'a gitmek
      //bu kısmı düzenlemeliyiz!!!!
      const diff = Vec3.subtract(new Vec3(), posA, posB);
      //! 1 birim mi diye kontrol ettim
      if (diff.length() === 120) {
      //! pozisyonları değiştir
        await this.SwapPiecePositions(pieceA, pieceB, posA, posB, gridMap);
      //!  match check
        if (this.checkMatches(pieceA, pieceB, gridMap)) {
            
        } 
        else {
          await this.SwapPiecePositions(pieceA, pieceB, posB, posA, gridMap , 0.2);
        }
      }
      else{
        //yanlış seçim
        EffectManager.shakePiece(this.firstSelectedPiece)
      }
      this.resetSelection();
    } else {
      this.firstSelectedPiece = piece;
      EffectManager.highlightPiece(piece);
    }
  }

  private resetSelection() {
    this.firstSelectedPiece!.setScale(1, 1, 1);
    this.secondSelectedPiece!.setScale(1, 1, 1);
    this.firstSelectedPiece = null;
    this.secondSelectedPiece = null;
  }

  private async SwapPiecePositions(
    pieceA: Node,
    pieceB: Node,
    posA: Vec3,
    posB: Vec3,
    gridMap: Map<Node, { row: number; col: number }>,
    duration:number = 0.1
  ) {
    EffectManager.movePiece(pieceA, posB, duration);
    await EffectManager.movePiece(pieceB, posA, duration);

    // Update the gridMap
    const posAData = gridMap.get(pieceA);
    const posBData = gridMap.get(pieceB);
    gridMap.set(pieceA, posBData);
    gridMap.set(pieceB, posAData);

    console.log(gridMap.get(pieceA),gridMap.get(pieceB));
    
  }

  private checkMatches(
    pieceA: Node,
    pieceB: Node,
    gridMap: Map<Node, { row: number; col: number }>
  ):boolean {
    const a  = MatchChecker.checkMatches(pieceA , gridMap);
    const b  = MatchChecker.checkMatches(pieceB , gridMap);

    return a||b;

  }
}
