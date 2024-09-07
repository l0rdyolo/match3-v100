import {
  easing,
  Node,
  ParticleSystem2D,
  removeProperty,
  SpriteRenderer,
  tween,
  Vec3,
} from "cc";
import { IPiece } from "./IPiece";
import { PieceTypes } from "./PieceTypes";
import { SelectionManager } from "../Interaction/SelectionManager";
import { GameGlobal } from "../Game/GameGlobal";

export class Piece implements IPiece {
  public row: number = -1!;
  public col: number = -1!;
  public node: Node;
  public type: PieceTypes = null;

  private m_isEmpty = false;
  public isMatched: boolean = false;
  private particle: ParticleSystem2D = null;
  private spriteNode: Node = null;
  public constructor(row: number, col: number, node: Node, type: PieceTypes) {
    this.row = row;
    this.col = col;
    this.node = node;
    this.type = type;
    this.node.on(Node.EventType.TOUCH_START, this.onTouch, this);
    this.m_isEmpty = false;
    this.particle = this.node.getComponentInChildren(ParticleSystem2D);
    this.spriteNode = this.node.getChildByName("Sprite");
  }

  init() {
    this.setPosition(this.row, this.col);
  }

  onTouch() {
    if (this.isEmpty) return;
    console.log(this.row, this.col);

    SelectionManager.getInstance().eventTarget.emit("piece-selected", this);
  }

  public get isEmpty(): boolean {
    const m_isEmpty = this.node ? false : true;
    return m_isEmpty;
  }

  setPosition(_row: number, _col: number) {
    const row =
      _row * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET);
    const col =
      _col * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET);
    const piecePostion = new Vec3(col, row);
    this.node.setPosition(piecePostion);
  }

  updatePosition(_row = this.row, _col = this.col): Promise<void> {
    return new Promise((resolve) => {
      const row = _row * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET);
      const col = _col * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET);
      const piecePosition = new Vec3(col, row);

      tween(this.node)
        .to(0.1, { position: piecePosition })
        .call(() => resolve())
        .start();
    });
  }

  async matched(): Promise<void> {
    this.isMatched = true;
    if (this.particle) {
      this.particle.resetSystem();
      this.particle.playOnLoad = true;
    }
    if (this.spriteNode) {
      await new Promise<void>((resolve) => {
        tween(this.spriteNode)
          .to(0.2, { scale: new Vec3(0, 0, 0) })
          .call(resolve)
          .start();
      });
    }
    this.clearPiece();
  }

  public async Shake(shakeAmount: number = 10, duration: number = 0.3) {
    if (this.isEmpty) return;
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

  public setSelection(): Piece {
    this.Highlight();
    return this;
  }

  public cancelSelection() {
    this.ResetScale();
    return null;
  }

  public Highlight(
    duration: number = 0.1,
    scale: Vec3 = new Vec3(1.1, 1.1, 1.1)
  ) {
    tween(this.node)
      .to(duration, { scale: scale }, { easing: "expoOut" })
      .start();
  }

  public ResetScale(duration: number = 0.1) {
    tween(this.node)
      .to(duration, { scale: new Vec3(1, 1, 1) })
      .start();
  }

  public moveToPosition(newPos: Vec3, duration: number = 0.2): Promise<void> {
    return new Promise<void>((resolve) => {
      const startPos = this.node.position.clone();
      const targetPos = new Vec3(
        newPos.x * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET),
        newPos.y * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET),
        newPos.z
      );
      tween(this.node)
        .to(
          duration,
          { position: targetPos },
          {
            easing: "quartOut",
            onUpdate: (target: Node, ratio: number) => {
              const currentPos = new Vec3();
              Vec3.lerp(currentPos, startPos, targetPos, ratio);
              target.setPosition(currentPos);
            },
          }
        )
        .call(() => {
          this.row = newPos.y;
          this.col = newPos.x;
          resolve();
        })
        .start();
    });
  }

  public assingPiece(node: Node) {
    this.node = node;
    this.node.on(Node.EventType.TOUCH_START, this.onTouch, this);
    this.particle = this.node.getComponentInChildren(ParticleSystem2D);
    this.spriteNode = this.node.getChildByName("Sprite");
    this.isMatched = false;
  }

  public clearPiece() {
    if (this.node) {
      this.node.off(Node.EventType.TOUCH_START, this.onTouch, this);
    }
    this.node = null;
    this.particle = null;
    this.spriteNode = null;
  }
}
