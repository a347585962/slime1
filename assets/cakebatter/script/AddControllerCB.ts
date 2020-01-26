import MoveIn from "../common/Script/MoveInCB";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragCB";
import MixComponent from "../common/Script/CombinedComponent/MixComponentCB";
import TransitionScene from "../common/Script/codebase/TransitionSceneCB";
import DataConfig from "./DataConfigCB";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperCB";


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
export default class AddController extends cc.Component {
    count: number = 0;
    onLoad() {
        this.init();
    }
    init() {
        
        this.node.getChildByName('glue').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('foodColor').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('foodColor').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
            this.activateToggle();
        }.bind(this);
        this.node.getChildByName('bottle').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('bottle').getComponent(SpriteDrag).enabled = true;
           
        }.bind(this);
        this.node.getChildByName('spoon').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('spoon').getComponent(SpriteDrag).enabled = true;
        }.bind(this);
        
    }
    glueTouchEnd() {
        this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('glue').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -120), cc.moveTo(0.5, cc.v2(40, 230))),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                cc.find('glue/pourGlue', this.node).getComponent(cc.ParticleSystem).resetSystem();
                cc.find('dish/mix0',this.node).runAction(cc.scaleTo(5,1))
            }.bind(this)),
            cc.delayTime(5),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                cc.find('glue/pourGlue', this.node).getComponent(cc.ParticleSystem).stopSystem();
                cc.find('glue/pourGlue', this.node).active = false;
                this.node.getChildByName('colorScrollView').getComponent(MoveIn).doShowAction();
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(600, 0)))
            ))
    }
    glueTouchCancle() {
        cc.find('glue/glue0_shadow', this.node).active = true;
    }
    glueTouchMove() {
        cc.find('glue/glue0_shadow', this.node).active = false;
        this.node.getChildByName('finger1').active = false;
    }
    foodColorTouchEnd() {
        this.node.getChildByName('colorScrollView').runAction(cc.moveBy(0.5, cc.v2(-300, 0)));
        this.node.getChildByName('foodColor').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('foodColor').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(30, 250))),
            cc.callFunc(function () {
                cc.find('foodColor/foodcoloring', this.node).active = false;
                cc.find('foodColor/foodcoloring_fall', this.node).active = true;
                // this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                cc.find('foodColor/dropColor', this.node).active = true;
                cc.find('foodColor/dropColor', this.node).getComponent(cc.AudioSource).play();
                cc.find('dish/bowl_color',this.node).runAction(cc.scaleTo(2,1))
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                cc.find('foodColor/dropColor', this.node).getComponent(cc.AudioSource).stop();
                cc.find('foodColor/dropColor', this.node).active = false;
                
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(600, 0))),
            cc.callFunc(function () {
                this.node.getChildByName('bottle').getComponent(MoveIn).doShowAction();
                this.changMixColor();
            }.bind(this))
            ))
    }
    foodColorTouchCancle() {
        cc.find('foodColor/foodcoloring_shadow', this.node).active = true;
    }
    foodColorTouchMove() {
        cc.find('foodColor/foodcoloring_shadow', this.node).active = false;
        this.node.getChildByName('finger1').active = false;
    }
    bottleTouchEnd() {
        this.count = this.count + 1;
        this.node.getChildByName('bottle').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('bottle').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(40, 150))),
            cc.callFunc(function () {
                // cc.find('foodColor/foodcoloring', this.node).active = false;
                // cc.find('foodColor/foodcoloring_fall', this.node).active = true;
                // this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                cc.find('bottle/dropwater', this.node).active = true;
                cc.find('bottle/dropwater', this.node).getComponent(cc.AudioSource).play();
                cc.find('dish/bowl_activator', this.node).runAction(cc.scaleTo(3, 1));
                cc.find('bottle/mask/activator', this.node).runAction(cc.scaleTo(3, 1,(1 - 0.3*this.count)));
            }.bind(this)),
            cc.delayTime(3),
            cc.callFunc(function () {
                cc.find('bottle/dropwater', this.node).getComponent(cc.AudioSource).stop();
                cc.find('bottle/dropwater', this.node).active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(600, 0))),
            cc.callFunc(function () {
                this.node.getChildByName('spoon').getComponent(MoveIn).doShowAction();
                this.node.getChildByName('bottle').setPosition(cc.v2(260, 0));
                this.node.getChildByName('bottle').opacity = 0;
            }.bind(this))
            ))
    }

    mixStart() {
        cc.find(`dish/mix${this.count-1}`, this.node).getComponent(MixComponent).startMix();
        cc.find('dish/bowl_color', this.node).active = false;
        cc.find('dish/bowl_activator', this.node).setScale(0);
        cc.find('spoon/spoon0', this.node).active = false;
        this.playAction();
    }
    mixEnd() {
        cc.find(`dish/mix${this.count-1}`, this.node).getComponent(MixComponent).stopMix();
        cc.find('spoon/spoon0', this.node).active = true;
        this.stopAction();
    }
    playAction(){
        let s1 = cc.scaleTo(0.7,1,0.95);
        let s2 = cc.scaleTo(0.8, 0.95, 1.08);
        cc.find(`dish/mix${this.count-1}`, this.node).runAction(cc.repeatForever(cc.sequence(s1, s2)));
        cc.find(`dish/mix${this.count-1}`, this.node).runAction(cc.repeatForever(cc.rotateBy(20,360)));
    }
    stopAction(){
        cc.find(`dish/mix${this.count-1}`, this.node).stopAllActions();   
    }
    mixFinish() {
        cc.find('spoon/spoon0', this.node).active = true;
        this.stopAction();
        this.node.getChildByName('spoon').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('spoon').runAction(cc.sequence(
            cc.moveBy(0.5, cc.v2(600, 0)),
            cc.callFunc(function () {
                this.node.getChildByName('spoon').setPosition(cc.v2(60, 100));
                this.node.getChildByName('spoon').opacity = 0;
                if (this.count < 3) {
                    this.node.getChildByName('bottle').getComponent(MoveIn).doShowAction();
                }
            }.bind(this))
        ));
        if (this.count == 3) {
           
            this.node.getChildByName('dish').runAction(cc.sequence(
                cc.spawn(cc.moveTo(0.5, cc.v2(0, 0)), cc.scaleTo(0.5, 1.1)),
                cc.callFunc(function () {
                    this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                    this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                }.bind(this)),
                cc.delayTime(0.5),
                cc.callFunc(function () {
                    TransitionScene.changeScene('chooseFoamCB');
                }.bind(this))
            ));
        } else {
            let rota = cc.find(`dish/mix${this.count - 1}`, this.node).rotation;
            cc.find(`dish/mix${this.count - 1}`, this.node).active = false;
            cc.find(`dish/mix${this.count}`, this.node).active = true;
            cc.find(`dish/mix${this.count}`, this.node).setRotation(rota);
        }
       
    }
    colorClick(event, data) {
        if (event.isChecked) {
            this.sleepToggle();
            this.node.getChildByName('foodColor').getComponent(SpriteDrag).enabled = false;
            DataConfig.getInstance().setColors(data);
            cc.find('Canvas/foodColor').active = true;
            cc.find('Canvas/foodColor').opacity = 0;
           
            cc.loader.loadRes(`cakebatter/image/foodColor/foodcoloring_${data}`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.find('Canvas/foodColor/foodcoloring').getComponent(cc.Sprite).spriteFrame = spriteFrame;
                cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            }.bind(this))
            cc.loader.loadRes(`cakebatter/image/foodColor/foodcoloring_${data}_fall`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.find('Canvas/foodColor/foodcoloring_fall').getComponent(cc.Sprite).spriteFrame = spriteFrame;
                cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            }.bind(this))
            cc.loader.loadRes(`cakebatter/image/particleColor/${data}`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.find('Canvas/foodColor/dropColor').getComponent(cc.ParticleSystem).spriteFrame = spriteFrame;
                cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            }.bind(this))
            cc.loader.loadRes(`cakebatter/image/particleColor/bowl_${data}`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.find('Canvas/dish/bowl_color').getComponent(cc.Sprite).spriteFrame = spriteFrame;
                cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            }.bind(this))
            cc.find('foodColor/foodcoloring', this.node).active = true;
            cc.find('foodColor/foodcoloring_fall', this.node).active = false;
            cc.find('Canvas/foodColor').getComponent(MoveIn).doShowAction();
        }
    }
    changMixColor() {
        let data = DataConfig.getInstance().getColors();


        cc.loader.loadRes(`cakebatter/image/mix/mix_${data}0`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('Canvas/dish/mix0').getComponent(MixComponent).mixPaths[0] = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this));
        cc.loader.loadRes(`cakebatter/image/mix/mix_${data}1`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('Canvas/dish/mix0').getComponent(MixComponent).mixPaths[1] = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this));
        cc.loader.loadRes(`cakebatter/image/mix/mix_${data}2`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('Canvas/dish/mix0').getComponent(MixComponent).mixPaths[2] = spriteFrame;
            cc.find('Canvas/dish/mix1/mixing0').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this));
        cc.loader.loadRes(`cakebatter/image/mix/mix_${data}3`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('Canvas/dish/mix1').getComponent(MixComponent).mixPaths[0] = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
           
        }.bind(this));
        cc.loader.loadRes(`cakebatter/image/mix/mix_${data}4`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('Canvas/dish/mix1').getComponent(MixComponent).mixPaths[1] = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this));
        cc.loader.loadRes(`cakebatter/image/mix/mix_${data}5`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('Canvas/dish/mix1').getComponent(MixComponent).mixPaths[2] = spriteFrame;
            cc.find('Canvas/dish/mix2/mixing0').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this))
        cc.loader.loadRes(`cakebatter/image/mix/mix_${data}6`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('Canvas/dish/mix2').getComponent(MixComponent).mixPaths[0] = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this))
        cc.loader.loadRes(`cakebatter/image/mix/mix_${data}7`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('Canvas/dish/mix2').getComponent(MixComponent).mixPaths[1] = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this))
        cc.loader.loadRes(`cakebatter/image/mix/mix_${data}8`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('Canvas/dish/mix2').getComponent(MixComponent).mixPaths[2] = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this))
    }
    activateToggle() {
        cc.find('Canvas/colorScrollView/view/content').children.forEach(child => {
            child.getComponent(cc.Toggle).interactable = true;
        })
    }
    sleepToggle() {
        cc.find('Canvas/colorScrollView/view/content').children.forEach(child => {
            child.getComponent(cc.Toggle).interactable = false;
        })
    }
}
