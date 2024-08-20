import { _decorator, Component, EventTarget, Node } from "cc";
import { Piece } from "../Piece/Piece";
import { SingletonComponent } from "../SingletonComponent";
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
    this.firstSelected = piece;
  }

  handleSecondSelection(piece: Piece) {
    this.secondSelected = piece;
    
  }

  cancelSelection() {
    this.firstSelected = null;
    this.secondSelected = null;
  }
}
