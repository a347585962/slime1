import MoveIn from "../common/Script/MoveInRS";
import TransitionScene from "../common/Script/codebase/TransitionSceneRS";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragRS";
import AdsManager from "../common/Script/AdsManagerRS";

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
        cc.loader.loadRes('rainbowslime/sound/6', cc.AudioClip, function (err, audio) {
            cc.audioEngine.playMusic(audio, true);
            cc.loader.setAutoReleaseRecursively(audio, false);
        }.bind(this))
        this.node.getChildByName('waterCup').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('waterCup').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger').active = true;
        }.bind(this);
        cc.find('Canvas/bowl/spoon').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl/spoon').getComponent(SpriteDrag).enabled = true;
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
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(-80, 270))),
            cc.callFunc(function () {
                cc.find('Canvas/waterCup/pourWater').active = true;
                cc.find('Canvas/waterCup/pourWater').getComponent(cc.AudioSource).play();
                cc.find('Canvas/waterCup/mask').active = true;
                cc.find('Canvas/waterCup/water').active = false;
                cc.find('Canvas/waterCup/mask/water_fall').runAction(cc.moveBy(2, cc.v2(-80, 0)));
                cc.find('Canvas/bowl/bowl_water').runAction(cc.scaleTo(2,1));
            }.bind(this)),
            cc.delayTime(2),
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
            cc.spawn(cc.rotateTo(0.5, 50), cc.moveTo(0.5, cc.v2(-15, 160))),
            cc.callFunc(function () {
                cc.find('Canvas/borax/pourSugar').active = true;
                cc.find('Canvas/borax/pourSugar').getComponent(cc.AudioSource).play();
                cc.find('Canvas/scoop/scoop_borax').runAction(cc.scaleTo(2,1));
            }.bind(this)),
            cc.delayTime(2),
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
                cc.find('Canvas/scoop/scoop_borax').runAction(cc.scaleTo(2,0));
                cc.find('Canvas/bowl/bowl_borax').runAction(cc.fadeTo(2,255));
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                cc.find('Canvas/scoop/pourFlour').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/scoop/pourFlour').active = false;
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
        cc.find('Canvas/bowl/spoon').getComponent(cc.AudioSource).play();
        let s1 = cc.scaleTo(0.5,1.04,0.95);
        let s2 = cc.scaleTo(0.5, 0.96, 1.05);
        let s3 = cc.scaleTo(0.7,1.05,0.95);
        let s4 = cc.scaleTo(0.7, 0.95, 1.05);

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
        cc.find('Canvas/bowl/spoon').getComponent(cc.AudioSource).stop();
        cc.find('Canvas/bowl/bowl_water').stopAllActions(); 
        cc.find('Canvas/bowl/bowl_borax').stopAllActions(); 
        cc.find('Canvas/bowl/bowl_borax').getComponent(cc.Animation).pause();
    }
    cupClick() {
        this.node.getChildByName('cup').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(100, 190))),
            cc.callFunc(function () {
                cc.find('Canvas/cup/pourWater').active = true;
                cc.find('Canvas/cup/pourWater').getComponent(cc.AudioSource).play();
                cc.find('Canvas/cup/mask').active = true;
                cc.find('Canvas/cup/waterMask').active = false;
                cc.find('Canvas/cup/mask/water_fall').runAction(cc.moveBy(4, cc.v2(-100, 0)));
                cc.find('Canvas/bottle/activator').runAction(cc.scaleTo(4, 1));
            }.bind(this)),
            cc.delayTime(4),
            cc.callFunc(function () {
                cc.find('Canvas/cup/pourWater').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/cup/pourWater').active = false;
                cc.find('Canvas/bottle/activator_lid1').getComponent(MoveIn).doShowAction();
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1700, 0)))
        ))
    }
    activatorTouchEnd() {
        cc.find('Canvas/bottle/activator_lid1').runAction(cc.sequence(
            cc.moveTo(0.5, cc.v2(0, 300)),
            cc.moveTo(0.5, cc.v2(0, 400)),
            cc.callFunc(function () {
                cc.find('Canvas/bottle').runAction(cc.spawn(cc.scaleTo(0.5, 0.5), cc.moveTo(0.5, cc.v2(0, 0))));
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                TransitionScene.changeScene('addMaterialRS');
            }.bind(this))
        ))
    }

}
