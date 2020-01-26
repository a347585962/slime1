import MixComponent from "../common/Script/CombinedComponent/MixComponentSD";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperSD";
import DataConfig from "./DataConfigSD";

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
export default class KneadHandTouch extends cc.Component {
    actionNode: cc.Node = null;
    nodePos: cc.Vec2 = null;
   
    init() {
        
        this.actionNode = new cc.Node();
        cc.Canvas.instance.node.addChild(this.actionNode);
        this.actionNode.runAction(cc.sequence(
            cc.delayTime(10),
            cc.callFunc(function () {
                this.isFinish = true;
                cc.find('Canvas/finish').getComponent(cc.ParticleSystem).resetSystem();
                cc.find('Canvas/finish').getComponent(cc.AudioSource).play();
                let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                btn_next.active = true;
                btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
               
            }.bind(this))

        ));
        cc.director.getActionManager().pauseTarget(this.actionNode);
        this.nodePos = this.node.getPosition();
        this.registerTouchEvent();
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
        this.node.getChildByName('finger').active = false;
        //cc.find('Canvas/sculpey/finger').active = false;
        //this.mixtureNode.getComponent(MixComponent).startMix();
    }
    //触摸移动；
    onTouchMove(event) {
        this.node.getChildByName('finger').active = false;
        //cc.find('Canvas/sculpey/finger').active = false;
    }
    onTouchEnd() {
        this._touchEnd();
    }
    onTouchCancle(){
        this._touchEnd();
    }
    private _touchEnd() {
        this.pasueAction();
    }
    playAction() {
        this.node.getComponent(cc.AudioSource).play();
        cc.director.getActionManager().resumeTarget(this.actionNode);
        cc.director.getActionManager().resumeTarget(cc.find("Canvas"));
        let slime = this.node.getChildByName('slime');
        let color = DataConfig.getInstance().getColor();
        let animate = this.node.getComponent(cc.Animation).getAnimationState('kneadSlime');
        let s1 = cc.scaleTo(0.5,1.05,0.95);
        let s2 = cc.scaleTo(0.5, 0.95, 1.05);
        this.node.getChildByName('slime').runAction(cc.repeatForever(cc.sequence(s1, s2)));
        if (animate.isPaused) {
            this.node.getComponent(cc.Animation).resume();
            this.node.getChildByName('slime').getComponent(cc.Animation).resume();
        } else {
            this.node.getComponent(cc.Animation).play('kneadSlime');
            slime.getComponent(cc.Animation).play(`kneadSlime_${color}`); 
            
        }
        this.showParticle();
    }
    pasueAction() {
        this.node.getComponent(cc.AudioSource).stop();
        this.node.getComponent(cc.Animation).pause();
        cc.director.getActionManager().pauseTarget(cc.find("Canvas"));
        cc.director.getActionManager().pauseTarget(this.actionNode);
        let slime = this.node.getChildByName('slime');
        slime.getComponent(cc.Animation).pause();
        slime.stopAllActions();
        this.hideParticle();
    }
    private indexPNum = 0;
    _loopSound = -1;
    _showpartic = -1;
    showParticle() {
        
        this.indexPNum = this.indexPNum + 1;
        let heartFullColor = CocosHelper.findNode(cc.Canvas.instance.node, "fallStar");

        if(this._showpartic != -1)
            return;

        this._showpartic = 1;
        let p = heartFullColor.getComponent(cc.ParticleSystem);
        heartFullColor.active = true;
        p.resetSystem();
        
    }
    hideParticle(){
        this._showpartic = -1;
        let heartFullColor = CocosHelper.findNode(cc.Canvas.instance.node, "fallStar");
        // heartFullColor.active = false;

        let p = heartFullColor.getComponent(cc.ParticleSystem);
        p.stopSystem();
    }
}
