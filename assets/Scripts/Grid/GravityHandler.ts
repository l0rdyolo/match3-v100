import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GravityHandler')
export class GravityHandler extends Component {
   applyGravity(){
    console.log("apply");
    
   }
}

