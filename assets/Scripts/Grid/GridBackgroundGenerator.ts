import { _decorator, Component, Node } from 'cc';
import { IGrid } from './IGrid';
const { ccclass, property } = _decorator;

@ccclass('GridBackgroundGenerator')
export class GridBackgroundGenerator extends Component implements IGrid<Node>{  
    
    grid : Node[][]
    width : number;
    height : number;

    protected start(): void {
        
    }

    Generate() : Node[][]{
        return 
    }

}

