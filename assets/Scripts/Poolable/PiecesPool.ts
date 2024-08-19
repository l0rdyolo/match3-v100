import { _decorator, Component, instantiate, Node, Prefab } from "cc";
import { Poolable } from "../../SooLib/Optimization/Poolable";
import { PoolHelper } from "../PoolHelper";
const { ccclass, property } = _decorator;

@ccclass("PiecesPool")
export class PiecesPool extends Poolable {
  @property([Prefab])
  private piecesPrefabs: Prefab[] = [];

  private createIndex: number = 0;

  protected creator(): Node {
    this.createIndex = Math.floor(Math.random() * this.piecesPrefabs.length);
    // this.createIndex = (this.createIndex + 1) % this.piecesPrefabs.length;
    const obj = instantiate(this.piecesPrefabs[this.createIndex]);
    obj.setParent(this.node);
    return obj;
}

  protected onLoad(): void {
    super.onLoad();
    PoolHelper.registerPool(PiecesPool, this);
  }

  public getPieceFromPool(): Node {
    const obj = this.creator();
    return obj;
  }
  

  public returnPieceToPool(piece: Node): void {
    this.pool.release(piece); 
  }
}
