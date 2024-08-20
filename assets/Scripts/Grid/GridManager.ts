import { _decorator, CCInteger, Component, Node } from 'cc';
import { GridGenerator } from './GridGenerator';
const { ccclass, property } = _decorator;

@ccclass('GridManager')
export class GridManager extends Component {

    @property(GridGenerator)
    private gridGenerator : GridGenerator
    

    protected onLoad(): void {

    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}

