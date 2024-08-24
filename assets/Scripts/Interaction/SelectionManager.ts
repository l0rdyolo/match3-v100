import { _decorator, Color, Component, EventTarget, Node, Sprite, SpriteFrame, SpriteRenderer } from "cc";
import { Piece } from "../Piece/Piece";
import { SingletonComponent } from "../SingletonComponent";
import { SliderManager } from "./SliderManager";
import { MatchChecker } from "../Match/MatchChecker";
const { ccclass, property } = _decorator;

@ccclass("SelectionManager")
export class SelectionManager extends SingletonComponent<SelectionManager> {
  public eventTarget: EventTarget = new EventTarget();

  private firstSelected: Piece = null;
  private secondSelected: Piece = null;
  private sliderManager : SliderManager = null;
  private matchChecker : MatchChecker = null;
  protected onLoad(): void {
    super.onLoad();
    this.eventTarget.on(
      "piece-selected",
      this.onPieceSelected,
      this
    );

    this.init();
  }

  protected init(): void {
    this.sliderManager = new SliderManager();
    this.matchChecker = new MatchChecker();
    
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
    this.firstSelected.Highlight();
  }

  handleSecondSelection(piece: Piece) {
    this.secondSelected = piece;
    this.secondSelected.Highlight();
    this.applySelection();
  }

  async applySelection(){
    if(this.isSelectionValid()){
        await this.sliderManager.Slide(this.firstSelected,this.secondSelected);
        let matches : Piece[] = this.matchChecker.checkForMatches(this.firstSelected,this.secondSelected);
        for (const matched of matches) {
          matched.node.getChildByName("Sprite").getComponent(Sprite).color = new Color(123,122,31)
        }
        
    }
    else{
        this.firstSelected.Shake();
    }
    this.cancelSelection();
  }

  cancelSelection() {
    this.firstSelected.ResetScale();
    this.secondSelected.ResetScale();
    this.firstSelected = null;
    this.secondSelected = null;
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

