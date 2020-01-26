import MixComponent from "../common/Script/CombinedComponent/MixComponentHC";

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
    nodePos:cc.Vec2 = null;
    init(){
        this.nodePos = this.node.getPosition();
        this.registerTouchEvent();
        this.mixtureNode = cc.find('Canvas/sculpey/sculpey4');
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
        cc.find('Canvas/sculpey/finger').active = false;
        this.mixtureNode.getComponent(MixComponent).startMix();
    }
    //触摸移动；
    onTouchMove(event) {
        cc.find('Canvas/sculpey/finger').active = false;
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
        this.mixtureNode.getComponent(MixComponent).stopMix();
    }
    playAction(){
        let s1 = cc.scaleTo(0.7,1,0.95);
        let s2 = cc.scaleTo(0.7, 0.95, 1.08);
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
    stopAction(){
        this.mixtureNode.stopAllActions();   
        this.node.getComponent(cc.Animation).pause();
    }
}
