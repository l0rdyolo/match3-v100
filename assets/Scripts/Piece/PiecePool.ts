import { _decorator, Prefab, instantiate, Node } from 'cc';
import { SingletonComponent } from '../SingletonComponent';
const { ccclass, property } = _decorator;

@ccclass('PiecePool')
export class PiecePool extends SingletonComponent<PiecePool> {
    @property([Prefab])
    piecesPrefabs: Prefab[] = [];

    private pool: Node[] = [];
    private initialPoolSize: number = 10; // İstediğiniz başlangıç boyutunu buraya koyabilirsiniz

    protected start(): void {
        this.fillPool(); // Pool'u başlatırken doldur
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
            newPiece.active = false; // Başlangıçta pool'a eklerken aktif olmasın
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
            const piece = this.pool.pop();
            piece!.active = true; 
            return piece!;
        } else {
            console.log("Pool is empty, generating a new piece.");
            const newPiece = this.createRandomPiece();
            if (newPiece) {
                newPiece.active = true;
                return newPiece;
            } else {
                console.error("Failed to create a new piece.");
                return null;
            }
        }
    }

    public returnPiece(piece: Node) {
        piece.active = false; 
        this.pool.push(piece);
    }

    public clearAll() {
        this.pool.forEach(piece => piece.destroy());
        this.pool = [];
    }
}
