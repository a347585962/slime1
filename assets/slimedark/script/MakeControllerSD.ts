import MoveIn from "../common/Script/MoveInSD";
import TransitionScene from "../common/Script/codebase/TransitionSceneSD";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragSD";
import AdsManager from "../common/Script/AdsManagerSD";
import DataConfig from "./DataConfigSD";
import TipManager from "./TipManagerSD";
// import TipManager from "./TipManagerSD";

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
export default class MakeController extends cc.Component {
    onLoad() {
        if(cc.sys.isMobile){
            AdsManager.getInstance().showBanner();
        }
        cc.audioEngine.stopMusic();
        cc.loader.loadRes('sound/bg1', cc.AudioClip, function (err, audio) {
            cc.audioEngine.playMusic(audio, true);
            cc.loader.setAutoReleaseRecursively(audio, false);
        }.bind(this));
        this.node.getChildByName('waterCup').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('waterCup').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger').active = true;
        }.bind(this);
        let count = DataConfig.getInstance().getCount();
        let isStart = DataConfig.getInstance().getIsStart();
        if (count != 0 && isStart) {
            this.node.getChildByName('bgMask').active = true;
            cc.director.loadScene('chooseColorSD');
            return;
        }
        this.node.getChildByName('bgMask').active = false;
        cc.find('Canvas/bowl/spoon').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl/spoon').getComponent(SpriteDrag).enabled = true;
            this.node.runAction(cc.sequence(cc.delayTime(2),
            cc.callFunc(function () {
                cc.find('Canvas/bowl/bowl_water').active = false;
                cc.find('Canvas/bowl/bowl_stir').active = true;
                let s1 = cc.scaleTo(0.5,1.04,0.95);
                let s2 = cc.scaleTo(0.5, 0.96, 1.05);
                cc.find('Canvas/bowl/bowl_stir').runAction(cc.repeatForever(cc.sequence(s1, s2)));
                cc.find('Canvas/bowl/bowl_stir').runAction(cc.repeatForever(cc.rotateBy(20, 360)));
            }.bind(this))
            ))
            cc.director.getActionManager().pauseTarget(this.node);
            this.node.getChildByName('tipRotate').active = true;
        }.bind(this);
        this.node.getChildByName('bowl').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('scoop').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger').active = true;
        }.bind(this);
        this.node.getChildByName('borax').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('borax').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('tipClick').active = true;
            this.node.getChildByName('tipClick').setPosition(this.node.getChildByName('borax').getPosition());
        }.bind(this);
    }
    waterCupTouchStart() {
        cc.find('Canvas/waterCup/watercup_shadow').active = false;
        this.node.getChildByName('finger').active = false;
    }
    waterCupTouchEnd() {
        this.node.getChildByName('waterCup').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('waterCup').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -120), cc.moveTo(0.5, cc.v2(-100, 350))),
            cc.callFunc(function () {
                cc.find('Canvas/waterCup/pourWater').active = true;
                cc.find('Canvas/waterCup/pourWater').getComponent(cc.AudioSource).play();
                cc.find('Canvas/waterCup/mask').active = true;
                cc.find('Canvas/waterCup/water').active = false;
                cc.find('Canvas/waterCup/mask/water_fall').runAction(cc.fadeTo(3.5,0));
                cc.find('Canvas/bowl/bowl_water').runAction(cc.scaleTo(4,1));
            }.bind(this)),
            cc.repeat(cc.sequence(cc.moveBy(1,cc.v2(50,0)),cc.moveBy(1,cc.v2(-50,0))),2),
            cc.callFunc(function () {
                cc.find('Canvas/waterCup/pourWater').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/waterCup/pourWater').active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1700, 0))),
            cc.callFunc(function () {
                cc.find('Canvas/bowl/spoon').getComponent(MoveIn).doShowAction();
            }.bind(this))
        ))
    }
    waterCupTouchCancle() {
        cc.find('Canvas/waterCup/watercup_shadow').active = true;
    }

    boraxClick() {
        this.node.getChildByName('tipClick').active = false;
        cc.find('Canvas/borax/borax_shadow').active = false;
        cc.find('Canvas/borax/borax').active = false;
        cc.find('Canvas/borax/borax_fall').active = true;
        this.node.getChildByName('borax').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, 50), cc.moveTo(0.5, cc.v2(-40, 160))),
            cc.callFunc(function () {
                cc.find('Canvas/borax/pourSugar').active = true;
                cc.find('Canvas/borax/pourSugar').getComponent(cc.AudioSource).play();
                cc.find('Canvas/scoop/scoop_borax').runAction(cc.scaleTo(2,1));
            }.bind(this)),
            cc.repeat(cc.sequence(cc.moveBy(0.5,cc.v2(-20,0)),cc.moveBy(0.5,cc.v2(20,0))),2),
            cc.callFunc(function () {
                cc.find('Canvas/borax/pourSugar').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/borax/pourSugar').active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(-1700, 0))),
            cc.callFunc(function () {
                this.node.getChildByName('bowl').getComponent(MoveIn).doShowAction();
            }.bind(this))
        ))
    }
    scoopTouchStart() {
        this.node.getChildByName('finger').active = false;
    }
    scoopTouchEnd() {
        this.node.getChildByName('scoop').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('scoop').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -30), cc.moveTo(0.5, cc.v2(-30, 250))),
            cc.callFunc(function () {

                cc.find('Canvas/scoop/pourFlour').active = true;
                cc.find('Canvas/scoop/pourFlour').getComponent(cc.AudioSource).play();
                cc.find('Canvas/scoop/scoop_borax').runAction(cc.scaleTo(4,0));
                cc.find('Canvas/bowl/bowl_borax').runAction(cc.fadeTo(4,255));
            }.bind(this)),
            cc.repeat(cc.sequence(cc.moveBy(1,cc.v2(-30,0)),cc.moveBy(0.5,cc.v2(30,0))),2),
            cc.callFunc(function () {
                cc.find('Canvas/scoop/pourFlour').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/scoop/pourFlour').active = false;
                TipManager.getInstance().jumpTips();
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1700, 0))),
            cc.callFunc(function () {
                cc.find('Canvas/waterCup').getComponent(MoveIn).doShowAction();
            }.bind(this))
        ))
    }

    spoonTouchStart() {
        cc.find('Canvas/bowl/spoon/spoon0').active = false;
        this.node.getChildByName('tipRotate').active = false;
        this.playAction();
    }
    spoonTouchEnd(event) {
        cc.find('Canvas/bowl/spoon/spoon0').active = true;
        this.stopAction();
    }
    spoonTouchCancle() {
        cc.find('Canvas/bowl/spoon/spoon0').active = true;
        cc.find('Canvas/bowl/spoon').setPosition(cc.v2(50, 100));
    }
    playAction() {
        cc.director.getActionManager().resumeTarget(this.node);
        cc.find('Canvas/bowl/spoon').getComponent(cc.AudioSource).play();
        let s1 = cc.scaleTo(0.5,1.04,0.95);
        let s2 = cc.scaleTo(0.5, 0.96, 1.05);
        let s3 = cc.scaleTo(0.7,1.05,0.95);
        let s4 = cc.scaleTo(0.7, 0.95, 1.05);
        cc.find('Canvas/bowl/bowl_stir').runAction(cc.repeatForever(cc.sequence(s1, s2)));
        cc.find('Canvas/bowl/bowl_stir').runAction(cc.repeatForever(cc.rotateBy(20, 360)));

        cc.find('Canvas/bowl/bowl_water').runAction(cc.repeatForever(cc.sequence(s1, s2)));
        
        cc.find('Canvas/bowl/bowl_borax').runAction(cc.repeatForever(cc.sequence(s3, s4)));
        cc.find('Canvas/bowl/bowl_water').runAction(cc.repeatForever(cc.rotateBy(20, 360)));
        let animstate = cc.find('Canvas/bowl/bowl_borax').getComponent(cc.Animation).getAnimationState('dissolve');
        if (animstate.isPaused) {
            cc.find('Canvas/bowl/bowl_borax').getComponent(cc.Animation).resume();
        } else {
            cc.find('Canvas/bowl/bowl_borax').getComponent(cc.Animation).play('dissolve');
        }
    }
    stopAction() {
        cc.director.getActionManager().pauseTarget(this.node);
        cc.find('Canvas/bowl/spoon').getComponent(cc.AudioSource).stop();
        cc.find('Canvas/bowl/bowl_stir').stopAllActions();
        cc.find('Canvas/bowl/bowl_water').stopAllActions(); 
        cc.find('Canvas/bowl/bowl_borax').stopAllActions(); 
        cc.find('Canvas/bowl/bowl_borax').getComponent(cc.Animation).pause();
    }
   
    

}
