import { _decorator, Component, Node, Vec2, Vec3 } from 'cc';
import { SingletonComponent } from '../SingletonComponent';
import { Piece } from '../Piece/Piece';
import { GridGenerator } from './GridGenerator';
const { ccclass, property } = _decorator;

@ccclass('GridManager')
export class GridManager extends SingletonComponent<GridManager> {
    public grid : Piece[][];

    private gridGenerator : GridGenerator = null;

    private gridWidth : number = 0;
    private gridOffset : number = 0;


    protected onLoad(): void {
        super.onLoad();
      }

    start() {
        this.gridGenerator = this.node.getComponent(GridGenerator)
        this.grid = this.gridGenerator.Generate();
        this.gridWidth = this.gridGenerator.width;
        this.gridOffset = this.gridGenerator.PIECE_OFFSET;
        //! dinamik olmalı
        const offsetDiff = (this.gridOffset / 2 )* this.gridWidth;
        const piecePositionsDiff = -(this.gridWidth/2) * 100
        console.log(offsetDiff , piecePositionsDiff);
        
        const gridX = piecePositionsDiff + offsetDiff 
        this.node.setPosition(new Vec3(gridX,-200,0))
    }


}

