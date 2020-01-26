import { spawn } from "child_process";
import TipManager from "./TipManagerRP";
import TransitionScene from "../common/Script/codebase/TransitionSceneRP";
import showLaoding from "../common/Script/ads/showLaodingRP";

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
export default class CoilSlimeController extends cc.Component {
    @property(cc.Node)
    touchNode:cc.Node = null;
    onLoad() {
        cc.find('Canvas/juan/juan0').runAction(cc.sequence(
            cc.moveTo(2, cc.v2(0, 0)),
            cc.callFunc(function () {
                cc.find('Canvas/tip').active = true;
                cc.find('Canvas/juan').runAction(cc.sequence(
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        cc.find('Canvas/juan/juan0').active = false;
                        cc.find('Canvas/juan/juan1').active = true;
                        this.touchNode.getComponent(cc.AudioSource).play();
                    }.bind(this)),
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        cc.find('Canvas/juan/juan1').active = false;
                        cc.find('Canvas/juan/juan2').active = true;
                        this.touchNode.getComponent(cc.AudioSource).play();
                        TipManager.getInstance().jumpTips();
                    }.bind(this)),
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        cc.find('Canvas/juan/juan2').active = false;
                        cc.find('Canvas/juan/juan3').active = true;
                        this.touchNode.getComponent(cc.AudioSource).play();
                    }.bind(this)),
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        cc.find('Canvas/juan/juan3/juan3_chang').active = false;
                        cc.find('Canvas/juan/juan4').active = true;
                        this.touchNode.getComponent(cc.AudioSource).play();
                        
                    }.bind(this)),
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        cc.find('Canvas/juan/juan4/juan4_chang').active = false;
                        cc.find('Canvas/juan/juan5').active = true;
                        this.touchNode.getComponent(cc.AudioSource).play();
                        
                    }.bind(this)),
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        cc.find('Canvas/juan/juan5/juan5_chang').active = false;
                        cc.find('Canvas/juan/juan6').active = true;
                        this.touchNode.getComponent(cc.AudioSource).play();
                        TipManager.getInstance().jumpTips();
                    }.bind(this)),
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        cc.find('Canvas/juan/juan6/juan6_chang').active = false;
                        cc.find('Canvas/juan/juan7').active = true;
                        this.touchNode.getComponent(cc.AudioSource).play();
                        this.destroyTouchEvent();
                        this.node.getChildByName('decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
                        this.node.getChildByName('decorateParticle').getComponent(cc.AudioSource).play();
                    }.bind(this)),
                    cc.scaleTo(0.5,0.6),
                    cc.spawn(cc.scaleTo(1,0.4),cc.moveBy(1,cc.v2(0,-88))),
                    cc.callFunc(function () {
                        cc.find('Canvas/juan').active = false;
                        cc.find('Canvas/dragon').active = true;
                    }.bind(this))
                ))
                cc.director.getActionManager().pauseTarget(cc.find('Canvas/juan'));
                this.registerTouchEvent();
            }.bind(this))
        ))
    
    }
    registerTouchEvent() {
        this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this);
    }
    destroyTouchEvent() {
        this.touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this)
    }
    onTouchStart() {
        cc.director.getActionManager().resumeTarget(cc.find('Canvas/juan'));
        cc.find('Canvas/tip').active = false;
    }
    //触摸移动；
    onTouchMove(event) {
        cc.find('Canvas/tip').active = false;
    }
    onTouchEnd() {
        this._touchEnd();
    }
    onTouchCancle(){
        this._touchEnd();
    }
    private _touchEnd(){
        cc.director.getActionManager().pauseTarget(cc.find('Canvas/juan'));
        this.touchNode.getComponent(cc.Animation).play();
        this.touchNode.getComponent(cc.AudioSource).play();
    }
    enterNextScene() {
        showLaoding.getInstance().loadingDoneCallback = function () {
            showLaoding.getInstance().loadingDoneCallback = null;
            TransitionScene.changeScene('decorateSlimeRP', 7);
        }.bind(this);
        showLaoding.getInstance().showAds('rainbowpoop/prefab/loadingRP','rainbowpoop/prefab/loading1',false);
    }
   
  
}
