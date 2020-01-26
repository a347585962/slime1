import MixComponent from "../common/Script/CombinedComponent/MixComponentCE";
import TipManager from "./TipManagerCE";

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
    
    init(node:cc.Node){
        this.nodePos = this.node.getPosition();
        this.registerTouchEvent();
        this.mixtureNode = node;
        this.node.runAction(cc.repeatForever(
            cc.sequence(cc.delayTime(4),
                cc.callFunc(function () {
                    TipManager.getInstance().jumpTips();
                }.bind(this))
            )
        ))
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
        cc.find('Canvas/decorate').active = true;
        this.playAction(); 
        if (cc.find('Canvas/finger')) {
            cc.find('Canvas/finger').destroy();
        }
       
        this.mixtureNode.getComponent(MixComponent).startMix();
        cc.director.getActionManager().resumeTarget(this.node);
        
    }
    //触摸移动；
    onTouchMove(event) {
        var touches = event.getTouches();
        var pos = this.node.convertToNodeSpaceAR(touches[0].getLocation());
        let box = this.node.getBoundingBox();
        if (box.contains(pos)) {
            this.node.getChildByName('tail').setPosition(pos);
        }
       


    }
    onTouchEnd() {
        this._touchEnd();
    }
    onTouchCancle(){
        this._touchEnd();
    }
    private _touchEnd(){
        this.stopAction();
        this.mixtureNode.getComponent(MixComponent).stopMix();
        cc.director.getActionManager().pauseTarget(this.node);
    }
    playAction() {
        this.node.getComponent(cc.AudioSource).play();
        let s1 = cc.scaleTo(0.5,1.05,0.95);
        let s2 = cc.scaleTo(0.5, 0.95, 1.05);
        let s3 = cc.scaleTo(0.5,1.25,1.15);
        let s4 = cc.scaleTo(0.5, 1.15, 1.25);
        this.mixtureNode.runAction(cc.repeatForever(cc.sequence(s1, s2)));
        cc.find('Canvas/decorate').runAction(cc.repeatForever(cc.sequence(s3, s4)));
        cc.find('Canvas/heartFullColor').getComponent(cc.ParticleSystem).resetSystem();
    }
    stopAction() {
        this.node.getComponent(cc.AudioSource).stop();
        this.mixtureNode.stopAllActions();  
        cc.find('Canvas/decorate').stopAllActions();
        cc.find('Canvas/heartFullColor').getComponent(cc.ParticleSystem).stopSystem();
    }
    
}
