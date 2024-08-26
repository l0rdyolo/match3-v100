import { _decorator, Component, Node } from 'cc';
import { Piece } from '../Piece/Piece';
import { GridManager } from '../Grid/GridManager';
const { ccclass, property } = _decorator;

@ccclass('GravityHandler')
export class GravityHandler extends Component {

    @property(GridManager)
    private gridManager: GridManager = null;

    applyGravity(matches: Piece[]) {
        const columnPieceCount = new Map<number, number>();
        console.log(columnPieceCount);
        
        for (const piece of matches) {
            const col = piece.col;
            const row = piece.row;
            console.log(row , col);
        }

        this.applyGravityToCol(columnPieceCount,matches);
    }

    applyGravityToCol(columnPieceCount: Map<number, number>,matches) {
        for (const [col, count] of columnPieceCount) {
            console.log(`${col} sütununu ${count} birim aşağı indirin.`);
        }
    }
    }
