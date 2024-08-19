import { _decorator, Component, Node, Prefab } from "cc";
import { LevelData } from "./LevelData";
const { ccclass, property } = _decorator;

@ccclass("EasyLevels")
export class EasyLevels extends Component {
  public static levels: {[key:number] : LevelData} = {
    //-------------------------------------
    1: {
      rows: 5,
      cols: 5,
      grid: [
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
      ],
    } ,

    //-------------------------------------

    2: {
      rows: 5,
      cols: 5,
      grid: [
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
      ],
    },

    //-------------------------------------

    3: {
        rows: 8,
        cols: 8,
        grid: [
          [1, 1, 1, 0, 0, 0, 0, 0],
          [1, 1, 1, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 1, 1, 0, 0, 0],
          [0, 0, 1, 0, 1, 0, 0, 0],
          [0, 1, 0, 0, 1, 0, 0, 0],
          [1, 0, 0, 0, 1, 0, 0, 0],
        ],
      },
  
      //-------------------------------------
  };

}
