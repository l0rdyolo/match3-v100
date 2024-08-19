import { _decorator, Color, Component, Node } from 'cc';
import { GameGlobal } from './GameGlobal';
import { PoolHelper } from './PoolHelper';
import { PiecesPool } from './Poolable/PiecesPool';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    @property(Color) dummy : Color = null!;
    start() {
        
    }

    update(deltaTime: number) {
        
    }
}

