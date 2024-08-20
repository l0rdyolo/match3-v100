import { Node, tween, Vec3 } from "cc";
import { IPiece } from "./IPiece";
import { PieceTypes } from "./PieceTypes";
import { SelectionManager } from "../Interaction/SelectionManager";

export class Piece implements IPiece {
  public row: number = -1!;
  public col: number = -1!;
  public node: Node;
  public type: PieceTypes = null;

  public constructor(row: number, col: number, node: Node, type: PieceTypes) {
    this.row = row;
    this.col = col;
    this.node = node;
    this.type = type;

    this.node.on(Node.EventType.TOUCH_START, this.onTouch, this);
  }

  onTouch() {
      SelectionManager.getInstance().eventTarget.emit('piece-selected', this);
  }

  public Shake(duration : number = 0.3){
    const originalPosition = this.node.getPosition();
    const shakeAmount = 10; // Sarsılma miktarı

    return new Promise<void>((resolve) => {
        tween(this.node)
            .by(duration / 4, { position: new Vec3(shakeAmount, 0, 0) }) 
            .by(duration / 4, { position: new Vec3(-shakeAmount * 2, 0, 0) }) 
            .by(duration / 4, { position: new Vec3(shakeAmount * 2, 0, 0) }) 
            .by(duration / 4, { position: new Vec3(-shakeAmount, 0, 0) }) 
            .call(() => {
                this.node.setPosition(originalPosition); 
                resolve();
            })
            .start();
    });
  }

  public Highlight(){
    tween(this.node)
    .to(0.1,{scale : new Vec3(1.1,1.1,1.1)})
    .start();
  }

  public ResetScale(duration: number = 0.1) {
    tween(this.node)
        .to(duration, { scale: new Vec3(1, 1, 1) })
        .start();
}
}
