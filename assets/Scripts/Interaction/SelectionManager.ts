import { _decorator, Color, Component, EventTarget, Node, Sprite, SpriteFrame, SpriteRenderer } from "cc";
import { Piece } from "../Piece/Piece";
import { SingletonComponent } from "../SingletonComponent";
import { SliderManager } from "./SliderManager";
import { MatchChecker } from "../Match/MatchChecker";
import { GravityHandler } from "../Grid/GravityHandler";
import { GridManager } from "../Grid/GridManager";
const { ccclass, property } = _decorator;

@ccclass("SelectionManager")
export class SelectionManager extends SingletonComponent<SelectionManager> {
  public eventTarget: EventTarget = new EventTarget();

  private firstSelected: Piece = null;
  private secondSelected: Piece = null;
  private sliderManager : SliderManager = null;
  private matchChecker : MatchChecker = null;
  private gravityHandler : GravityHandler = null;
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
    this.gravityHandler = new GravityHandler();
    
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
    else{
      this.cancelSelection();
    }    
  }

  handleSecondSelection(piece: Piece) {
    if(piece.canSelect) {
      this.secondSelected = piece.setSelection();
      this.applySelection();
    }
    else{
      this.cancelSelection();
    } 
  }

  async applySelection(){
    let matches : Piece[] = [];
    if(this.isSelectionValid()){
        await this.sliderManager.Slide(this.firstSelected,this.secondSelected);
        let matches : Piece[] = await this.matchChecker.checkForMatches(this.firstSelected,this.secondSelected);
        if(matches.length>0){
          GridManager.getInstance().deleteMatches(matches);
          this.gravityHandler.applyGravity(); 
        }
    }
    else{
      //!geri döndür
        this.firstSelected.Shake();
    }
    if(matches.length > 0 ){
      await this.sliderManager.Slide(this.firstSelected,this.secondSelected);
    }
    this.cancelSelection();
  }

  cancelSelection() {
    this.firstSelected = this.firstSelected.cancelSelection();
    this.secondSelected = this.secondSelected.cancelSelection();
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

