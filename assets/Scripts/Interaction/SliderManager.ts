import { _decorator, Component, Node } from "cc";
import { Piece } from "../Piece/Piece";
import { EffectManager } from "../Effects/EffectManager";
const { ccclass, property } = _decorator;

@ccclass("SliderManager")
export class SliderManager extends Component {
  async SwapPieces(pieceA: Piece, pieceB: Piece) {
    await this.slide(pieceA, pieceB);
    const tempNode = pieceA.node;
    pieceA.clearPiece();
    pieceA.assingPiece(pieceB.node);
    pieceB.clearPiece();
    pieceB.assingPiece(tempNode); 
    
}

  private slide_duration : number =  0.125  ;
  public async slide(pieceA: Piece, pieceB: Piece) {
    const posA = pieceA.node.getPosition();
    const posB = pieceB.node.getPosition();

    await Promise.all([
      EffectManager.movePiece(pieceA.node, posB, this.slide_duration),
      EffectManager.movePiece(pieceB.node, posA, this.slide_duration)
    ]);
  }
}
