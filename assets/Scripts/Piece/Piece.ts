import { Node, ParticleSystem2D, SpriteRenderer, tween, Vec3 } from "cc";
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

  updatePosition() {
    this.canSelect = false;
    const newX = this.col * GameGlobal.PIECE_CONTENT_SIZE;
    const newY = this.row * GameGlobal.PIECE_CONTENT_SIZE;
    this.node.setPosition(new Vec3(newX, newY, 0));
  }

  async matched(): Promise<void> {
    if (this.particle) {
      this.particle.resetSystem();
      this.particle.playOnLoad = true;
    }

    if (this.spriteNode) {
      await new Promise<void>((resolve) => {
        tween(this.spriteNode)
          .to(0.4, { scale: new Vec3(0, 0, 0) })
          .call(resolve) // Tween bittiğinde Promise'i çöz
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
}
