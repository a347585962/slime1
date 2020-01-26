import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperSD";
import TipManager from "./TipManagerSD";
import DragonCompoent from "./DragonCompoentSD";
import TransitionScene from "../common/Script/codebase/TransitionSceneSD";
import DataConfig from "./DataConfigSD";
import KneadHandTouch from "./KneadHandTouchSD";
import MoveIn from "../common/Script/MoveInSD";

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
export default class KneadController extends cc.Component {

    actionNode: cc.Node = null;
    color: string = null;
    index: string = null;
    foam: string = null;

    @property({type:cc.AudioClip})
    lachang:cc.AudioClip;


    start () {
        let color = DataConfig.getInstance().getColor();
        this.color = color;
        console.log(this.color + "this.color");
        
        this.showSlime(color);
    }
    showSlime(color: string) {
        this.node.runAction(cc.repeatForever(cc.sequence(
            cc.delayTime(5),
            cc.callFunc(function () {
                TipManager.getInstance().jumpTips();
            }.bind(this))
        )));
        cc.director.getActionManager().pauseTarget(this.node);
        cc.loader.loadRes(`slimedark/image/slime/hand0_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/hand/hand0').getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        cc.loader.loadRes(`slimedark/image/slime/hand1_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/handLeft/hand1').getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        cc.loader.loadRes(`slimedark/image/slime/hand2_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/handLeft/hand2').getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
       
        cc.loader.loadRes(`slimedark/image/slime/${color}1`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/handLeft/slime').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/hand/slime').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            this.node.getChildByName('bgMask').runAction(cc.sequence(cc.fadeTo(2, 255),
                cc.callFunc(function(){
                    this.node.getChildByName('hand').getComponent(MoveIn).doShowAction();
                }.bind(this))
            ));
            this.node.getChildByName('hand').getComponent(MoveIn).actionCallBack = function () {
                this.node.getChildByName('hand').runAction(cc.sequence(
                    cc.delayTime(1),
                    cc.callFunc(function(){
                        this.node.getChildByName('hand').active = false;
                        cc.find('Canvas/handLeft').active = true;
                        cc.find('Canvas/handLeft/finger').active = true;
                        cc.find('Canvas/handLeft').getComponent(KneadHandTouch).init();
                    }.bind(this))
                ))
               
            }.bind(this);
           
        }.bind(this))
       
    }
   
    touchNextBtn() {
        TransitionScene.changeScene('clickSlimeSD');
    }
    touchBackBtn() {
        TransitionScene.changeScene('stickBead');
    }

}
