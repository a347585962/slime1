import MoveIn from "../common/Script/MoveInCB";
import HandTouchEvent from "./HandTouchEventCB";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperCB";
import TransitionScene from "../common/Script/codebase/TransitionSceneCB";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragCB";
import RewardManager from "../common/Script/RewardManagerCB";
import AdsManager from "../common/Script/AdsManagerCB";

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
        RewardManager.getInstance().loadConfig();
       
        cc.loader.loadRes('cakebatter/sound/6', cc.AudioClip, function (err, audio) {
            cc.audioEngine.playMusic(audio, true);
            cc.loader.setAutoReleaseRecursively(audio, false);
        }.bind(this))
       
        this.node.getChildByName('waterCup').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('waterCup').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger').active = true;
        }.bind(this);
        this.node.getChildByName('borax').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('borax').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('tipClick').active = true;
            this.node.getChildByName('tipClick').setPosition(this.node.getChildByName('borax').getPosition());
        }.bind(this);
        cc.find('Canvas/cup/scoop').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/cup/scoop').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('tipRotate').active = true;
        }.bind(this);
        cc.find('Canvas/bottle/activator_lid1').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/bottle/activator_lid1').getComponent(SpriteDrag).enabled = true;
            cc.find('Canvas/bottle/finger').active = true;
            cc.find('Canvas/bottle/finger').setPosition(cc.find('Canvas/bottle/activator_lid1').getPosition());
        }.bind(this);
    }
    waterCupTouchStart() {
        cc.find('Canvas/waterCup/watercup_shadow').active = false;
        this.node.getChildByName('finger').active = false;
    }
    waterCupTouchEnd() {
        this.node.getChildByName('waterCup').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('waterCup').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(-40, 270))),
            cc.callFunc(function () {
                this.node.getChildByName('cup1').active = true;
                cc.find('Canvas/cup/cup1').active = false;
                cc.find('Canvas/waterCup/pourWater').active = true;
                cc.find('Canvas/waterCup/pourWater').getComponent(cc.AudioSource).play();
                cc.find('Canvas/waterCup/mask').active = true;
                cc.find('Canvas/waterCup/water').active = false;
                cc.find('Canvas/waterCup/mask/water_fall').runAction(cc.moveBy(2, cc.v2(-80, 0)));
                cc.find('Canvas/cup/waterMask').getComponent(cc.Animation).play('pourWater');
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                cc.find('Canvas/waterCup/mask').active = false;
                this.node.getChildByName('cup1').active = false;
                cc.find('Canvas/cup/cup1').active = true;
                cc.find('Canvas/waterCup/pourWater').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/waterCup/pourWater').active = false;
                
                let position = this.node.getChildByName('cup').getPosition();
                this.node.getChildByName('cup').runAction(cc.sequence(
                    cc.delayTime(0.3),
                    cc.moveBy(0.5, cc.v2(-600, 0)),
                    cc.callFunc(function () {
                        this.node.getChildByName('cup').opacity = 0;
                        this.node.getChildByName('cup').setPosition(position);
                        this.node.getChildByName('spoon').getComponent(MoveIn).doShowAction();
                        this.node.getChildByName('borax').getComponent(MoveIn).doShowAction();
                    }.bind(this))))
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(700, 0)))
        ))
    }
    waterCupTouchCancle() {
        cc.find('Canvas/waterCup/watercup_shadow').active = true;
    }

    boraxClick() {
        this.node.getChildByName('tipClick').active = false;
        cc.find('Canvas/borax/borax').active = false;
        cc.find('Canvas/borax/borax_fall').active = true;
        this.node.getChildByName('borax').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, 50), cc.moveTo(0.5, cc.v2(-15, 160))),
            cc.callFunc(function () {
                cc.find('Canvas/borax/pourSugar').active = true;
                cc.find('Canvas/borax/pourSugar').getComponent(cc.AudioSource).play();
                cc.find('Canvas/spoon/scoop_borax').runAction(cc.scaleTo(2,1));
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                cc.find('Canvas/borax/pourSugar').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/borax/pourSugar').active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(-700, 0))),
            cc.callFunc(function () {
                this.node.getChildByName('cup').getComponent(MoveIn).doShowAction();
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                this.node.getChildByName('spoon').getComponent(SpriteDrag).enabled = true;
                this.node.getChildByName('finger').active = true;
                this.node.getChildByName('finger').setPosition(this.node.getChildByName('spoon').getPosition());
            }.bind(this))
        ))
    }
    spoonTouchStart() {
        this.node.getChildByName('finger').active = false;
    }
    spoonTouchEnd() {
        this.node.getChildByName('spoon').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('spoon').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -30), cc.moveTo(0.5, cc.v2(-60, 300))),
            cc.callFunc(function () {
                this.node.getChildByName('cup1').active = true;
                cc.find('Canvas/cup/cup1').active = false;
                cc.find('Canvas/spoon/pourFlour').active = true;
                cc.find('Canvas/spoon/pourFlour').getComponent(cc.AudioSource).play();
                cc.find('Canvas/spoon/scoop_borax').runAction(cc.scaleTo(2,0));
                cc.find('Canvas/cup/cup_borax').runAction(cc.fadeTo(2,255));
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                this.node.getChildByName('cup1').active = false;
                cc.find('Canvas/cup/cup1').active = true;
                cc.find('Canvas/spoon/pourFlour').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/spoon/pourFlour').active = false;
                this.node.getChildByName('cup').runAction(cc.moveTo(0.5, cc.v2(0, 40)));
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(700, 0))),
            cc.callFunc(function () {
                cc.find('Canvas/cup/scoop').getComponent(MoveIn).doShowAction();
            }.bind(this))
        ))
    }
    scoopTouchStart() {
        cc.find('Canvas/cup/scoop/scoop').active = false;
        this.node.getChildByName('tipRotate').active = false;
        this.playAction();
    }
    scoopTouchEnd(event) {
        cc.find('Canvas/cup/scoop/scoop').active = true;
        this.stopAction();
    }
    scoopTouchCancle() {
        cc.find('Canvas/cup/scoop/scoop').active = true;
        cc.find('Canvas/cup/scoop').setPosition(cc.v2(50, 100));
    }
    playAction() {
        cc.find('Canvas/cup/scoop').getComponent(cc.AudioSource).play();
        let s1 = cc.scaleTo(0.7,1.05,0.99);
        let s2 = cc.scaleTo(0.7, 0.95, 1.01);
        let s3 = cc.scaleTo(0.7,1.05,0.99);
        let s4 = cc.scaleTo(0.7, 0.95, 1.01);

        cc.find('Canvas/cup/waterMask').runAction(cc.repeatForever(cc.sequence(s1, s2)));
        cc.find('Canvas/cup/cup_borax').runAction(cc.repeatForever(cc.sequence(s3, s4)));
        let animstate = cc.find('Canvas/cup/cup_borax').getComponent(cc.Animation).getAnimationState('dissolve');
        if (animstate.isPaused) {
            cc.find('Canvas/cup/cup_borax').getComponent(cc.Animation).resume();
        } else {
            cc.find('Canvas/cup/cup_borax').getComponent(cc.Animation).play('dissolve');
        }
    }
    stopAction() {
        cc.find('Canvas/cup/scoop').getComponent(cc.AudioSource).stop();
        cc.find('Canvas/cup/waterMask').stopAllActions(); 
        cc.find('Canvas/cup/cup_borax').stopAllActions(); 
        cc.find('Canvas/cup/cup_borax').getComponent(cc.Animation).pause();
    }
    cupClick() {
        this.node.getChildByName('cup').getComponent(cc.Button).interactable = false;
        cc.find('Canvas/tipClick').active = false;
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
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(700, 0)))
        ))
    }
    activatorStart() {
        cc.find('Canvas/bottle/finger').active = false;
    }
   
    activatorTouchEnd() {
        cc.find('Canvas/bottle/activator_lid1').getComponent(SpriteDrag).enabled = false;
        cc.find('Canvas/bottle/activator_lid1').runAction(cc.sequence(
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
                TransitionScene.changeScene('addMaterialCB');
            }.bind(this))
        ))
    }

}
