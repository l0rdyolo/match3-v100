import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export enum Assets{
    
}

@ccclass('InGameAssets')
export class InGameAssets extends Component {

    @property({ type: [Node] })
    candies: Node[] = []!;

    @property({ type: [Node] })
    blocks: Node[] = []!;

    @property({ type: [Node] })
    bombs: Node[] = []!;

    public static AssetClass: Map<number, Node[]> = new Map();

    onLoad() {
            InGameAssets.AssetClass.set(0, this.candies);
            InGameAssets.AssetClass.set(1, this.blocks);
            InGameAssets.AssetClass.set(2, this.bombs);
    }
}
