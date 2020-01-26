import MixComponent from "../common/Script/CombinedComponent/MixComponentGL";

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
        this.mixtureNode.getComponent(MixComponent).startMix();
        if (this.mixtureNode.name == 'mix0'|| this.mixtureNode.name == 'mix1') {
            cc.find('Canvas/dish/bowl_foam0').active = false;
            cc.find('Canvas/dish/bowl_foam1').active = false;
            cc.find('Canvas/dish/bowl_foam2').active = false;
            cc.find('Canvas/dish/bowl_foam3').active = false;
            cc.find('Canvas/dish/bowl_water').setScale(0);
        } else {
            
        }
        
    }
    //触摸移动；
    onTouchMove(event) {
        cc.find('Canvas/finger').active = false;
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
    }
    playAction() {
        this.node.getComponent(cc.AudioSource).play();
        let animState = this.node.getComponent(cc.Animation).getAnimationState('rub');
        let animName = 'rub';
        if (!animState) {
            animState = this.node.getComponent(cc.Animation).getAnimationState('rub1');
            animName = 'rub1'
        }
        if (animState.isPaused) {
            this.node.getComponent(cc.Animation).resume();
        } else {
            this.node.getComponent(cc.Animation).play(animName);
        }   
        let s1 = cc.scaleTo(0.5,0.85,0.75);
        let s2 = cc.scaleTo(0.5, 0.75, 0.85);
        this.mixtureNode.runAction(cc.repeatForever(cc.sequence(s1,s2)));
        if (animName == 'rub1') {
            this.mixtureNode.runAction(cc.repeatForever(cc.rotateBy(20, 360)));
        }
    }
    stopAction() {
        this.node.getComponent(cc.AudioSource).stop();
        this.mixtureNode.stopAllActions();   
        this.node.getComponent(cc.Animation).pause();
    }
    
}
