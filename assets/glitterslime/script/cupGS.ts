import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragGS";
import MoveIn from "../common/Script/MoveInGS";
import MixComponent from "../common/Script/CombinedComponent/MixComponentGS";
import BlenderMix from "../common/Script/CombinedComponent/BlenderMixGS";
import TransitionScene from "../common/Script/codebase/TransitionSceneGS";
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
    @property(MixComponent)
    mixCom:MixComponent = null;
    @property(cc.AudioClip)
    addWater:cc.AudioClip = null;
    @property(cc.AudioClip)
    win:cc.AudioClip = null;
    @property(cc.AudioClip)
    spoon:cc.AudioClip = null;

    private audioId = -1;//= cc.audioEngine.play(this.addWater,true,0.5);
    private audioId2 = -1;//= cc.audioEngine.play(this.spoon,true,0.5);
    index:number = 0;
    nextCount:number = 0;
    nextCount1:number = this.nextCount + 1;
    // LIFE-CYCLE CALLBACKS:
    currntTime:number = 0;
    delayPerUnit:number = 2.3;
    // onLoad () {}

    start () {

    }
    update (dt) {
        this.ListenCount(dt);
    }
    touchStart()
    {
        cc.find("Canvas/finger").stopAllActions();
        cc.find("Canvas/finger").active = false;
    }
    spoonTouchStart()
    {
        cc.find("Canvas/bowl/node/star").active = true;
        this.audioId2 = cc.audioEngine.play(this.spoon,true,0.5);
    }
    spoonTouchEnd()
    {
        cc.audioEngine.stop(this.audioId2);
    }
    private isEnter = false;
    sceneEnd()
    {
        cc.audioEngine.stop(this.audioId2);
        let number = cc.audioEngine.play(this.win,false,0.5);
        cc.find("Canvas/bowl/node/star").active = false;
        cc.find("Canvas/bowl/node/star1").active = true;
        cc.find("Canvas/bowl").runAction(cc.moveTo(0.5,cc.v2(0,0)));
        let move = cc.moveBy(0.5,cc.v2(cc.view.getVisibleSize().width*2,0));
        let goToScene = cc.callFunc(function()
        {
            if(!this.isEnter){
                this.isEnter = true;
                TransitionScene.changeScene("gameScene4GS", "111");
            }

        }.bind(this));
        let delay = cc.delayTime(0.5);
        let seq = cc.sequence(move,delay,goToScene);
        this.node.runAction(seq)
    }
    moveEnd(){
        this.node.getComponent(SpriteDrag).enabled = false;
        let move = cc.moveTo(1.5,cc.v2(-147,236));
        let rot = cc.rotateTo(1.5,-120);
        let func = cc.callFunc(function()
        {
            this.audioId = cc.audioEngine.play(this.addWater,true,0.5);
            this.node.getChildByName("Particle").active = true;
        }.bind(this));
        let func1= cc.callFunc(function()
        {
            this.node.getChildByName("cup_shadow").active = false;
        }.bind(this));
        this.node.runAction(move);
        let seq = cc.sequence(func1,rot,func);
        this.node.runAction(seq);
        this.scheduleOnce(function()
        {
            let bowl = cc.find("Canvas/bowl/node");
            bowl.getChildByName("water").runAction(cc.fadeIn(1.0));
            let scale = cc.scaleBy(1.5,0.99,0.85);
            this.node.getChildByName("cup_water_mix2").runAction(scale);
        },2.5);
        this.scheduleOnce(function(){
            cc.audioEngine.stop(this.audioId);
            this.node.getChildByName("Particle").active = false;
            let move = cc.moveTo(0.8,cc.v2(294,-40));
            let rot = cc.rotateTo(0.8,0);
            
            let func = cc.callFunc(function()
            {
                //
                this.node.getChildByName("cup_shadow").active = true;
                if(this.index == 0)
                {
                    cc.find("Canvas/spoon").getComponent(MoveIn).enabled = true;
                    this.index +=1;
                }
                else
                {
                    cc.find("Canvas/spoon").getComponent(SpriteDrag).enabled = true;
                    cc.find("Canvas/bowl/node").getComponent(MixComponent).enabled = true;
                    cc.find("Canvas/spoon").getComponent(BlenderMix).touchUpBlender();
                }
            }.bind(this));
            let seq = cc.sequence(rot,func);
            this.node.runAction(seq);
            this.node.runAction(move);
        }.bind(this),4.5);
    };
    ListenCount(dt)
    {
        if(this.mixCom.count %2 == 0)
         {
             console.log("assdas");
             if(this.mixCom.count == 0 || this.nextCount == this.mixCom.count)
             return;
             if(this.mixCom.count >= this.mixCom.mixPaths.length)
             {
                 cc.find("Canvas/spoon").getComponent("moveBackGS").enabled = true;
                this.node.getComponent("moveBackGS").enabled = true;
                //TransitionScene.changeScene("initScene", "111");
                return;
             }
            let pos = this.node.convertToWorldSpaceAR(cc.v2(-480, -320));
            let finger = cc.find("Canvas/finger");
            finger.active = true;
            finger.setPosition(pos);
            CocosHelper.showHand(finger, this.node, this.node, cc.find("Canvas/bowl"));
             cc.audioEngine.stop(this.audioId2);
             this.nextCount = this.mixCom.count;
             cc.find("Canvas/cup").getComponent(SpriteDrag).enabled = true;
             cc.find("Canvas/bowl/node").stopAllActions();
             cc.find("Canvas/spoon").getComponent(SpriteDrag).enabled = false;
             cc.find("Canvas/spoon").getComponent(BlenderMix).enabled = false;
             this.mixCom.enabled = false;
         }
    }
    opacityFadeOut()
    {
        cc.find("Canvas/bowl/node").getChildByName("water").opacity -=1;
    }
}
