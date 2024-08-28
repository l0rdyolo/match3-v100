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
    }
  }

  handleFirstSelection(piece: Piece) {
    if(piece.canSelect) {
      this.firstSelected = piece.setSelection();
    }
   
  }

  handleSecondSelection(piece: Piece) {
    if(piece.canSelect) {
      this.secondSelected = piece.setSelection();
      this.applySelection();
    }
  }

  async applySelection() {
    if (this.isSelectionValid()) {
      GridManager.getInstance().handleSelection(this.firstSelected , this.secondSelected);
    } else {
        this.firstSelected.Shake();
    }
    this.cancelSelection();
}

  cancelSelection() {
    this.firstSelected = this.firstSelected.cancelSelection();
    this.secondSelected = this.secondSelected.cancelSelection();
    console.log("reset selections " , this.firstSelected, this.secondSelected);
    
  }

  public isSelectionValid() : boolean {
    if (!this.firstSelected || !this.secondSelected) {
        return false;
    }

    const rowDiff = Math.abs(this.firstSelected.row - this.secondSelected.row);
    const colDiff = Math.abs(this.firstSelected.col - this.secondSelected.col);

    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
    return false;
  }
}

