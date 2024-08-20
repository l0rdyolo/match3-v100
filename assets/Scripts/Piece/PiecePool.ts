import { _decorator, Prefab, instantiate, Node } from 'cc';
import { SingletonComponent } from '../SingletonComponent';
const { ccclass, property } = _decorator;

@ccclass('PiecePool')
export class PiecePool extends SingletonComponent<PiecePool> {
    @property([Prefab])
    piecesPrefabs: Prefab[] = [];

    public pool: Node[] = [];
    private initialPoolSize: number = 500; //abartma
    protected start(): void {
        this.fillPool();
    }

    private fillPool(): void {
        for (let i = 0; i < this.initialPoolSize; i++) {
            const piece = this.createRandomPiece();
            if (piece) {
                this.pool.push(piece);
            }
        }
    }

    private createRandomPiece(): Node | null {
        const prefab = this.getRandomPrefab();
        if (prefab) {
            const newPiece = instantiate(prefab);
            newPiece.active = false;
            this.node.addChild(newPiece);
            newPiece.setParent(this.node);
            return newPiece;
        }
        return null;
    }

    private getRandomPrefab(): Prefab | null {
        if (this.piecesPrefabs.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.piecesPrefabs.length);
            return this.piecesPrefabs[randomIndex];
        } else {
            console.error("No prefabs available in PiecePool.");
            return null;
        }
    }

    public getPiece(): Node | null {
        if (this.pool.length > 0) {
            const piece = this.pool.shift();
            piece.removeFromParent();
            piece!.active = true; 
            return piece!;
        } else {
            console.log("Pool is empty, generating a new piece.");
            const newPiece = this.createRandomPiece();
            if (newPiece) {
                this.node.addChild(newPiece);
                newPiece.setParent(this.node);
                newPiece.active = true;
                return newPiece;
            } else {
                console.error("Failed to create a new piece.");
                return null;
            }
        }
    }

    public returnPiece(piece: Node) {
        piece.removeFromParent();
        piece.setParent(this.node);
        this.node.addChild(piece);
        piece.active = false; 
        this.pool.push(piece);
    }

    public clearAll() {
        this.pool.forEach(piece => piece.destroy());
        this.pool = [];
    }
}
