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

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    spoonAudio:cc.AudioClip = null;
    // LIFE-CYCLE CALLBACKS:
    private audioId = -1;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
       
    }

    touchStart()
    {
        cc.find("Canvas/finger").stopAllActions();
        cc.find("Canvas/finger").active = false;
    };
    touchEnd(){
        this.node.getComponent(SpriteDrag).enabled = false;
        this.node.getComponent(cc.Animation).play("scoop3");
        let cup = cc.find("Canvas/cup")
        this.scheduleOnce(function()
        {
            let mask = cup.getChildByName("mask");
            mask.active = true;
            mask.getComponent(cc.Animation).play();
            this.audioId = cc.audioEngine.play(this.spoonAudio,true,0.5);
        },0.8);
        this.scheduleOnce(function()
        {
            let stir = cup.getChildByName("stir").getChildByName("cup_borax");
            stir.runAction(cc.fadeIn(1.0));
        },2.2);
        this.scheduleOnce(function(){
            cc.audioEngine.stop(this.audioId);
            let mask = cup.getChildByName("mask");
            let move =cc.moveBy(0.6,cc.v2(0,cc.view.getVisibleSize().height));
            let func = cc.callFunc(function(){
                let kettle = cc.find("Canvas/cup/kettle");
                kettle.zIndex = 1;
                kettle.getComponent(MoveIn).enabled = true;
            },this);

            let seq = cc.sequence(move,func);
            mask.runAction(seq);
        },4.3);
    };
    touchCancle(){

    };
    // update (dt) {}
}
