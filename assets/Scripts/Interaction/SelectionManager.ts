import { _decorator,EventTarget} from "cc";
import { Piece } from "../Piece/Piece";
import { SingletonComponent } from "../SingletonComponent";
import { GridManager } from "../Grid/GridManager";
const { ccclass, property } = _decorator;

@ccclass("SelectionManager")
export class SelectionManager extends SingletonComponent<SelectionManager> {
  public eventTarget: EventTarget = new EventTarget();

  private firstSelected: Piece = null;
  private secondSelected: Piece = null;

  protected onLoad(): void {
    super.onLoad();
    this.eventTarget.on(
      "piece-selected",
      this.onPieceSelected,
      this
    );
  }

  protected onDestroy(): void {
    this.eventTarget.off(
        "piece-selected",
        this.onPieceSelected,
        this
      );        
  }

  public onPieceSelected(piece: Piece): void {
    if (!this.firstSelected) {
      this.handleFirstSelection(piece);
    } else {
      this.handleSecondSelection(piece);
      this.applySelection();
    }
    
  }

  handleFirstSelection(piece: Piece) {
    if(!piece.isEmpty) {
      this.firstSelected = piece.setSelection();
    }
  }

  handleSecondSelection(piece: Piece) {
    if(!piece.isEmpty) {
      this.secondSelected = piece.setSelection();
    }
  }

  async applySelection()  {
    if (this.isSelectionValid()) {
      await GridManager.getInstance().handleSelection(this.firstSelected , this.secondSelected);
    }
    this.cancelSelection();
}
//! IDEA - 2
//   applySelection() : Piece[]{
//     if (this.isSelectionValid()) {
//       // await GridManager.getInstance().handleSelection(this.firstSelected , this.secondSelected);
//       const pieceA = this.firstSelected;
//       const pieceB = this.secondSelected
//       this.cancelSelection();
//       return [pieceA,pieceB]      
//     } else {
//         this.firstSelected.Shake();
//         this.cancelSelection();
//         return [];
//     }
// }

  cancelSelection() {
    this.firstSelected = this.firstSelected.cancelSelection();
    this.secondSelected = this.secondSelected.cancelSelection();
  }

  public isSelectionValid() : boolean {
    if (!this.firstSelected || !this.secondSelected) {
      this.cancelSelection();
        return false;
    }

    const rowDiff = Math.abs(this.firstSelected.row - this.secondSelected.row);
    const colDiff = Math.abs(this.firstSelected.col - this.secondSelected.col);
    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
  }
}

