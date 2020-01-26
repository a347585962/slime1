import MoveIn from "../common/Script/MoveInGS";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragGS";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

        //
        

        //this.node.getChildByName("cup").runAction(cc.scaleTo(0.1,0.6));
        if (this.node.getChildByName("bg")) {
            let boraxCm = this.node.getChildByName("borax_fall");
            let moveInCm = boraxCm.getComponent(MoveIn);
            moveInCm.actionCallBack = function () {
                boraxCm.getComponent(SpriteDrag).enabled = true;
            };
        }
        //--------------
        if (this.node.getChildByName("cup").getChildByName("kettle")) {
            let kettleCm = this.node.getChildByName("cup").getChildByName("kettle");
            let moveInCm1 = kettleCm.getComponent(MoveIn);
            moveInCm1.actionCallBack = function () {
                kettleCm.getComponent(SpriteDrag).enabled = true;
            };

        }

       //--------------
        if (this.node.getChildByName("cup").getChildByName("spoon3")) {
            let spoonCm = this.node.getChildByName("cup").getChildByName("spoon3");
            let moveInCm3 = spoonCm.getComponent(MoveIn);
            moveInCm3.actionCallBack = function () {
                spoonCm.getComponent(SpriteDrag).enabled = true;
            };
        }
        //--------------
        if(this.node.getChildByName("cup"))
        {
            let cupCm = this.node.getChildByName("cup");
            let moveInCm4 = cupCm.getComponent(MoveIn);
            /*moveInCm4.actionCallBack = function () {
                cupCm.setRotation(0);
                cupCm.getComponent(SpriteDrag).enabled = true;
                
            };*/
        }


    }

    // update (dt) {}
}
