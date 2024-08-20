import { _decorator, Component, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PiecePool')
export class PiecePool extends Component {
    @property(Prefab)
    piecesPrefabs : Prefab[] = [];

    

    start() {

    }

    update(deltaTime: number) {
        
    }
}

