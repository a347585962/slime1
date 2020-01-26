import StickController from "./StickControllerCB";
import TipManager from "./TipManagerCB";

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
export default class HandTouchEvent extends cc.Component {
    mixtureNode:cc.Node = null;
    nodePos: cc.Vec2 = null;
    isFirst: boolean = true;
    foamNode: cc.Node = null;
    init(){
        this.nodePos = this.node.getPosition();
        this.registerTouchEvent();
        this.mixtureNode = cc.find('Canvas/box/slime');
        this.node.runAction(cc.sequence(cc.delayTime(7),
            cc.callFunc(function () {
                TipManager.getInstance().playAudioEffect();
                this.isFirst = false;
                cc.find('Canvas').getComponent(StickController).showDragon();
                this.stopAction();
                this.destroyTouchEvent();
            }.bind(this))
        ));
        cc.director.getActionManager().pauseTarget(this.node);
        
    }

    registerTouchEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this);
    }
    destroyTouchEvent() {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this)
    }
    onTouchStart() {
        this.playAction(); 
        cc.find('Canvas/finger').active = false;
        //cc.find('Canvas/sculpey/finger').active = false;
        //this.mixtureNode.getComponent(MixComponent).startMix();
    }
    //触摸移动；
    onTouchMove(event) {
        cc.find('Canvas/finger').active = false;
        //cc.find('Canvas/sculpey/finger').active = false;
    }
    onTouchEnd() {
        this._touchEnd();
    }
    onTouchCancle(){
        this._touchEnd();
    }
    private _touchEnd(){
        this.stopAction();
       
        // this.node.getComponent(cc.AudioSource).stop();
        //this.mixtureNode.getComponent(MixComponent).stopMix();
    }
    playAction() {
        cc.director.getActionManager().resumeTarget(this.node);
       
        let action = cc.fadeTo(6, 255);
        action.setTag(0);
        if (this.isFirst) {
            this.foamNode = cc.find('Canvas/box/slime/foam0');
            this.foamNode.active = true;
            if (this.foamNode.getActionByTag(0)) {
                cc.director.getActionManager().resumeTarget(this.foamNode);
            } else {
                this.foamNode.runAction(action);
            }
        } else {
            this.foamNode = cc.find('Canvas/box/slime/foam1');
            this.foamNode.active = true;
            if (this.foamNode.getActionByTag(0)) {
                cc.director.getActionManager().resumeTarget(this.foamNode);
            } else {
                this.foamNode.runAction(action);
            }
        }
        
        let s1 = cc.scaleTo(0.5,1.1,0.9);
        let s2 = cc.scaleTo(0.5, 0.90, 1.1);
        let s3 = cc.callFunc(function () {
            this.node.getComponent(cc.AudioSource).play();
        }.bind(this))
        this.mixtureNode.runAction(cc.repeatForever(cc.sequence(s1, s3, s2, s3)));
        let animState = this.node.getComponent(cc.Animation).getAnimationState('rub');
        if (animState.isPaused) {
            this.node.getComponent(cc.Animation).resume();
        } else {
            this.node.getComponent(cc.Animation).play('rub');
        }   
    }
    stopAction() {
        cc.director.getActionManager().pauseTarget(this.foamNode);
        cc.director.getActionManager().pauseTarget(this.node);
        this.mixtureNode.stopAllActions(); 
        this.node.getComponent(cc.Animation).pause();
    }
}
