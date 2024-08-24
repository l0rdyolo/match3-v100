import { _decorator, Component } from 'cc';
import { Piece } from '../Piece/Piece';
import { SelectionManager } from '../Interaction/SelectionManager';
import { SliderManager } from '../Interaction/SliderManager';
import { GravityHandler } from '../Grid/GravityHandler';
import { MatchChecker } from '../Match/MatchChecker';

const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    @property(SelectionManager)
    private selectionManager: SelectionManager = null;

    @property(SliderManager)
    private sliderManager: SliderManager = null;

    @property(MatchChecker)
    private matchChecker: MatchChecker = null;

    @property(GravityHandler)
    private gravityHandler: GravityHandler = null;

    protected onLoad(): void {
        this.selectionManager.eventTarget.on('applySelection', this.applySelection, this);
    }

    private async applySelection(pieceA: Piece, pieceB: Piece): Promise<void> {
        if (this.selectionManager.isSelectionValid()) {
            await this.sliderManager.Slide(pieceA, pieceB);
            const matches = this.matchChecker.checkForMatches(pieceA, pieceB);
            if (matches.length > 0) {
                this.handleMatches(matches);
            } else {
                // Eğer match yoksa parçaları geri swap et
                await this.sliderManager.Slide(pieceB, pieceA);
            }
        } else {
            pieceA.Shake();
        }
    }

    private resetSelection(){
        this.selectionManager.cancelSelection();
    }

    private handleMatches(matches: Piece[]): void {
        // Eşleşen parçaları kaldırma işlemi
        for (const piece of matches) {
            // piece.destroy();
        }
        // this.gravityHandler.applyGravity();
    }
}
