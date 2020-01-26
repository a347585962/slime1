import DataConfig from "./DataConfigGL";
import MoveIn from "../common/Script/compoent/MoveInGL";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragGL";
import TransitionScene from "../common/Script/codebase/TransitionSceneGL";
import TipManager from "./TipManagerGL";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PackSlime extends cc.Component {
    foods = null;
    count: number = 0;
    nextFood = null;
    onLoad() {
        let food = 'galaxySlime';
        this.node.runAction(cc.sequence(
            cc.delayTime(1),
            cc.callFunc(function () {
                this.node.getChildByName(food).active = true;
            }.bind(this))
        ))
       
        cc.find(`Canvas/${food}/1`).getComponent(MoveIn).actionCallBack = function () {
            cc.find(`Canvas/${food}/1/lid`).runAction(cc.moveBy(0.5, cc.v2(-1000, 0)));
            cc.find(`Canvas/${food}/1/slime`).getComponent(MoveIn).doShowAction();
        }
        cc.find(`Canvas/${food}/1/slime`).getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/finger').active = true;
            cc.find(`Canvas/${food}/1/slime`).getComponent(SpriteDrag).enabled = true;
        } 

    }
    slimeTouchEnd(event) {
        cc.find('Canvas/finger').active = false;
        let node = event.target;
        node.getComponent(SpriteDrag).enabled = false;
        let food = 'galaxySlime';
       
        node.runAction(cc.sequence(
            cc.moveTo(0.5, cc.v2(16, 150)),
            cc.callFunc(function () {
                cc.find(`Canvas/${food}/1/bowl0`).active = false;
                cc.find(`Canvas/${food}/1/bowl0_1`).active = true;
            }.bind(this)),
            cc.moveTo(0.5, cc.v2(0,0)),
            cc.callFunc(function () {
                cc.find('Canvas/bg').getComponent(cc.AudioSource).play();
            }.bind(this)),
            cc.scaleTo(0.2, 0.92, 0.97),
            cc.scaleTo(0.2, 0.97, 0.92),
            cc.scaleTo(0.1,0.95,0.95),
            cc.callFunc(function () {
                TipManager.getInstance().jumpTips();
                cc.find(`Canvas/${food}/1/lid`).runAction(cc.moveBy(0.5, cc.v2(1000, 0)));
            }.bind(this)),
            cc.delayTime(1),
            cc.callFunc(function () {
                cc.find(`Canvas/${food}`).runAction(cc.sequence(
                    cc.moveTo(0.5, cc.v2(0, 0)),
                    cc.callFunc(function () {
                        this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                        this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                    }.bind(this)),
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        TransitionScene.changeScene('decorateSlimeGL',12);
                    }.bind(this))

                ));
            }.bind(this))

        ))
        
    }
}
