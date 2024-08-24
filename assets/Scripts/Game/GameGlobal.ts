import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameGlobal')
export class GameGlobal extends Component {
  public static PIECE_CONTENT_SIZE: number = 100; //dinamikleştir
  public static PIECE_OFFSET: number = 5; //dinamikleştir

}

