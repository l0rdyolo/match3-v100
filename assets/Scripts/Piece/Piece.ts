import { Node, ParticleSystem2D, removeProperty, SpriteRenderer, tween, Vec3 } from "cc";
import { IPiece } from "./IPiece";
import { PieceTypes } from "./PieceTypes";
import { SelectionManager } from "../Interaction/SelectionManager";
import { GameGlobal } from "../Game/GameGlobal";

export class Piece implements IPiece {
  public canSelect: boolean;
  public row: number = -1!;
  public col: number = -1!;
  public node: Node;
  public type: PieceTypes = null;

  private particle: ParticleSystem2D = null;
  private spriteNode: Node = null;
  public constructor(row: number, col: number, node: Node, type: PieceTypes) {
    this.row = row;
    this.col = col;
    this.node = node;
    this.type = type;
    this.canSelect = false;
    this.node.on(Node.EventType.TOUCH_START, this.onTouch, this);
    this.particle = this.node.getComponentInChildren(ParticleSystem2D);
    this.spriteNode = this.node.getChildByName("Sprite");
  }

  init(){
    this.canSelect = true;
    this.setPosition(this.row,this.col);
  }

  onTouch() {
    if(!this.canSelect) return; 
    SelectionManager.getInstance().eventTarget.emit("piece-selected", this);
  }

  setPosition(_row: number, _col: number) {
    const row =
      _row * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET);
    const col =
      _col * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET);
    const piecePostion = new Vec3(col, row);
    this.node.setPosition(piecePostion);
  }

  updatePosition(row = this.row , col = this.col) {
    this.canSelect = false;
    const newX = row //* GameGlobal.PIECE_CONTENT_SIZE;
    const newY = col //* GameGlobal.PIECE_CONTENT_SIZE;
    this.setPosition(newX,newY);
  }

  async matched(): Promise<void> {
    if (this.particle) {
      this.particle.resetSystem();
      this.particle.playOnLoad = true;
    }

    if (this.spriteNode) {
      await new Promise<void>((resolve) => {
        tween(this.spriteNode)
          .to(0.08, { scale: new Vec3(0, 0, 0) })
          .call(resolve) 
          .start();
      });
    }

    this.canSelect = false;
  }

  public async Shake(shakeAmount: number = 10, duration: number = 0.3) {
    if (!this.canSelect) return;
    const originalPosition = this.node?.getPosition();

    return new Promise<void>((resolve) => {
      if (this.node) {
        tween(this.node)
          .by(duration / 4, { position: new Vec3(shakeAmount, 0, 0) })
          .by(duration / 4, { position: new Vec3(-shakeAmount * 2, 0, 0) })
          .by(duration / 4, { position: new Vec3(shakeAmount * 2, 0, 0) })
          .by(duration / 4, { position: new Vec3(-shakeAmount, 0, 0) })
          .call(() => {
            this.node?.setPosition(originalPosition);
            resolve();
          })
          .start();
      }
    });
  }

  public delete(){
    //! burada pool'a döndürülmeli şimdilik poolda 500 üretiliyor ama buna gerek olmayabilir.
    this.node = null;
    this.canSelect = false;
  }

  public setSelection(): Piece {
    this.Highlight();
    return this;
  }

  public cancelSelection() {
    this.ResetScale();
    return null;
  }

  public Highlight() {
    tween(this.node)
      .to(0.1, { scale: new Vec3(1.1, 1.1, 1.1) })
      .start();
  }

  public ResetScale(duration: number = 0.1) {
    if (!this.canSelect) return;
    tween(this.node)
      .to(duration, { scale: new Vec3(1, 1, 1) })
      .start();
  }

  public moveToPosition(newPos: Vec3, duration: number = 0.08): Promise<void> {
    return new Promise<void>((resolve) => {
        const startPos = this.node.position.clone();
        const targetPos = new Vec3(
            newPos.x * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET),
            newPos.y * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET),
            newPos.z
        );

        this.canSelect = false;

        tween(this.node)
            .to(duration, { position: targetPos }, {
                easing: 'quartOut',
                onUpdate: (target: Node, ratio: number) => {
                    const currentPos = new Vec3();
                    Vec3.lerp(currentPos, startPos, targetPos, ratio);
                    target.setPosition(currentPos);
                }
            })
            .call(() => {
                this.row = newPos.y;
                this.col = newPos.x;
                this.canSelect = true;
                resolve();
            })
            .start();
    });
  }

}
