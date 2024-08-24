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

        for (const piece of matches) {
            const col = piece.col;
            if (columnPieceCount.has(col)) {
                columnPieceCount.set(col, columnPieceCount.get(col) + 1);
            } else {
                columnPieceCount.set(col, 1);
            }
        }

        this.applyGravityToCol(columnPieceCount,matches);
    }

    applyGravityToCol(columnPieceCount: Map<number, number>,matches) {
        for (const [col, count] of columnPieceCount) {
            console.log(`${col} sütununu ${count} birim aşağı indirin.`);
        }
    }
    }
