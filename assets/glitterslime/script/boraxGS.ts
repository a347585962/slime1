import MoveIn from "../common/Script/MoveInGS";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragGS";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperGS";

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
    boraxAudio:cc.AudioClip = null;
    // LIFE-CYCLE CALLBACKS:
    private audioId = -1;
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
        let scoop = cc.find("Canvas/scoop0");
        scoop.getComponent(cc.Animation).play("scoop");
        this.node.getComponent(cc.Animation).play();
        this.scheduleOnce(function()
        {
            let up = cc.moveBy(3,cc.v2(0,70));
            this.audioId = cc.audioEngine.play(this.boraxAudio,true,0.5);
            scoop.getChildByName("scoop2_").runAction(up);
        },1);

        this.scheduleOnce(function()
        {
            cc.audioEngine.stop(this.audioId);
        },5);
        this.scheduleOnce(function()
        {
            let move = cc.moveBy(1,cc.v2(-cc.view.getVisibleSize().width,0));
            this.node.runAction(move);
        },5.5);
        this.scheduleOnce(function()
        {
            scoop.getComponent(cc.Animation).play("scoop2");
            
        },6.2);
        this.scheduleOnce(function(){
            let cup = cc.find("Canvas/cup");
            let scoop = cc.find("Canvas/scoop0");
            cup.getComponent(MoveIn).enabled = true;
            
        },7.2);
        this.scheduleOnce(function(){
            let cup = cc.find("Canvas/cup");
            let scoop = cc.find("Canvas/scoop0");
            let pos = scoop.convertToWorldSpaceAR(cc.v2(-480, -320));
            let finger = cc.find("Canvas/finger");
            finger.active = true;
            finger.setPosition(pos);
            CocosHelper.showHand(finger, scoop, scoop, cup);
            scoop.getComponent(SpriteDrag).enabled = true;
        },8);
        
    };
    touchCancle(){

    };
    // update (dt) {}
}
