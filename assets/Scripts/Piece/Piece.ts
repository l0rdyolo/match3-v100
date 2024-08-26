import { Node, ParticleSystem2D, SpriteRenderer, tween, Vec3 } from "cc";
import { IPiece } from "./IPiece";
import { PieceTypes } from "./PieceTypes";
import { SelectionManager } from "../Interaction/SelectionManager";
import { GameGlobal } from "../Game/GameGlobal";

export class Piece implements IPiece  {
  public canSelected: boolean;
  public row: number = -1!;
  public col: number = -1!;
  public node: Node;
  public type: PieceTypes = null;

  private particle : ParticleSystem2D = null;
  private spriteNode : Node = null;
  public constructor(row: number, col: number, node: Node, type: PieceTypes) {
    
    this.row = row;
    this.col = col;
    this.node = node;
    this.type = type;
    this.canSelected = false;
    this.node.on(Node.EventType.TOUCH_START, this.onTouch, this);
    this.particle = this.node.getChildByName("Particle").getComponent(ParticleSystem2D);
    this.spriteNode = this.node.getChildByName("Sprite");
  }

  onTouch() {
      SelectionManager.getInstance().eventTarget.emit('piece-selected', this);
  }

  setPosition(_row : number , _col : number ){
    this.canSelected = true;
    const row = _row * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET); 
    const col= _col * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET); 
    const piecePostion = new Vec3(col,row)
    this.node.setPosition(piecePostion);
    
  }

  updatePosition() {
    this.canSelected = false;
    const newX =  (this.col * GameGlobal.PIECE_CONTENT_SIZE);
    const newY =  (this.row * GameGlobal.PIECE_CONTENT_SIZE);  
    this.node.setPosition(new Vec3(newX, newY, 0));
}


    
 async matched() {
  await this.Shake(10, 0.1);

  if (this.particle) {
      this.particle.resetSystem(); // Eğer hali hazırda çalışıyorsa, sıfırlayıp yeniden başlatır
      this.particle.playOnLoad = true; // Eğer başlatma durumu ayarlanmamışsa başlatır
  }

  // Sprite node'unun ölçeğini 0 yaparak yok et
  if (this.spriteNode) {
      tween(this.spriteNode)
          .to(0.3, { scale: new Vec3(0, 0, 0) })  // 0.2 saniye içinde ölçeği 0 yap
          .start();
  }
  this.canSelected = false;
}


    public async Shake(shakeAmount : number = 10 , duration : number = 0.3){
    if(!this.canSelected) return;
    const originalPosition = this.node?.getPosition();

    return new Promise<void>((resolve) => {
        if(this.node){
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

  public setSelection() : Piece{
    this.Highlight();
    return this
  }
  public cancelSelection() {
    this.ResetScale();
    return null;
  }

  public Highlight(){
    tween(this.node)
    .to(0.1,{scale : new Vec3(1.1,1.1,1.1)})
    .start();
  }

  public ResetScale(duration: number = 0.1) {
    if(!this.canSelected) return;
    tween(this.node)
        .to(duration, { scale: new Vec3(1, 1, 1) })
        .start();
}
}
