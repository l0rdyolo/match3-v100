import { _decorator, Component, Node, tween, Vec2, Vec3 } from "cc";
import { sleep } from "../Promises";
const { ccclass, property } = _decorator;

@ccclass("EffectManager")
export class EffectManager extends Component {
  public static async decreaseScale(
    target: Node,
    duration: number,
    yoyo: boolean
  ): Promise<void> {
    return new Promise<void>((resolve) => {
      tween(target)
        .to(duration, { scale: Vec3.ZERO })
        .call(() => {
          resolve();
          if (yoyo) {
            tween(target).to(duration, { scale: Vec3.ONE }).start();
          }
        })
        .start();
    });
  }

  public static async movePiece(
    target: Node,
    to: Vec3,
    duration: number
  ): Promise<void> {
    return new Promise<void>((resolve) => {
      tween(target)
        .to(duration, {
          position: to,
        })
        .call(() => {
          resolve();
        })
        .start();
    });
  }

  public static async fallPieceToGridPosition(
    target: Node,
    to: Vec3,
    duration: number,
    delay: number
  ): Promise<void> {
    await sleep(delay);
    return new Promise<void>((resolve) => {
      tween(target)
        .to(duration, { position: to })
        .call(() => {
          resolve();
        })
        .start();
    });
  }

  public static async animateRowFall(
    pieceProps: any[],
    duration: number,
    delay: number = 0
  ) {
    const promises = pieceProps.map((pieceProps) => {
      return this.fallPieceToGridPosition(
        pieceProps.piece,
        pieceProps.targetPosition,
        duration,
        delay
      );
    });
    await Promise.all(promises);
  }

  public static highlightPiece(piece: Node) {
    // piece.setScale(1.2, 1.2, 1.2);
    tween(piece)
    .to(0.1,{scale : new Vec3(1.2,1.2,1.2)})
    .start();
  }

  public static async shakePiece(piece: Node, duration: number = 0.2): Promise<void> {
    const originalPosition = piece.getPosition();
    const shakeAmount = 10; // Sarsılma miktarı

    return new Promise<void>((resolve) => {
        tween(piece)
            .by(duration / 4, { position: new Vec3(shakeAmount, 0, 0) }) 
            .by(duration / 4, { position: new Vec3(-shakeAmount * 2, 0, 0) }) 
            .by(duration / 4, { position: new Vec3(shakeAmount * 2, 0, 0) }) 
            .by(duration / 4, { position: new Vec3(-shakeAmount, 0, 0) }) 
            .call(() => {
                piece.setPosition(originalPosition); 
                resolve();
            })
            .start();
    });
}
}
