import { Node, tween, Vec3 } from "cc";
import { IPiece } from "./IPiece";
import { PieceTypes } from "./PieceTypes";
import { SelectionManager } from "../Interaction/SelectionManager";
import { GameGlobal } from "../Game/GameGlobal";

export class Piece implements IPiece  {
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

  setPosition(_row : number , _col : number ){
    const row = _row * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET); 
    const col= _col * (GameGlobal.PIECE_CONTENT_SIZE + GameGlobal.PIECE_OFFSET); 
    const piecePostion = new Vec3(col,row)
    this.node.setPosition(piecePostion);
    
  }

  updatePosition() {
    // Satır ve sütun değerlerini kullanarak yeni pozisyonu hesapla
    const newX =  (this.col * GameGlobal.PIECE_CONTENT_SIZE);
    const newY =  (this.row * GameGlobal.PIECE_CONTENT_SIZE);  // Y ekseni negatif çünkü ekranın üstünden altına doğru gidiyoruz

    // Parçanın node'unu yeni pozisyona taşı
    this.node.setPosition(new Vec3(newX, newY, 0));
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
