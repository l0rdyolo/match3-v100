import { _decorator, Component, Node } from "cc";
import { Piece } from "../Piece/Piece";
import { EffectManager } from "../Effects/EffectManager";
const { ccclass, property } = _decorator;

@ccclass("SliderManager")
export class SliderManager extends Component {
  private slide_duration : number =  0.125  ;
  public async Slide(pieceA: Piece, pieceB: Piece) {
    const posA = pieceA.node.getPosition();
    const posB = pieceB.node.getPosition();

    await Promise.all([
      EffectManager.movePiece(pieceA.node, posB, this.slide_duration),
      EffectManager.movePiece(pieceB.node, posA, this.slide_duration)
    ]);
  }
}
