import MixComponent from "../common/Script/CombinedComponent/MixComponentCB";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperCB";
import DataConfig from "./DataConfigCB";

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
    private isFinish: boolean = null;
    init() {
        this.isFinish = false;
        this.actionNode = new cc.Node();
        cc.Canvas.instance.node.addChild(this.actionNode);
        this.actionNode.runAction(cc.sequence(
            cc.delayTime(5),
            cc.callFunc(function () {
                this.isFinish = true;
                this.node.getChildByName('decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('decorateParticle').getComponent(cc.AudioSource).play();
                this.node.getChildByName('')
                let leftFinish = cc.find('Canvas/handLeft').getComponent(KneadHandTouch).getIsFinish();
                let rightFinish = cc.find('Canvas/handRight').getComponent(KneadHandTouch).getIsFinish();
                if (leftFinish && rightFinish) {
                    let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                    btn_next.active = true;
                    btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
                }
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
        let animate = this.node.getComponent(cc.Animation).getAnimationState('kneadSlime');
        if (animate.isPaused) {
            this.node.getComponent(cc.Animation).resume();
            this.node.getChildByName('slime').getComponent(cc.Animation).resume();
            let slime = this.node.getChildByName('slime')
            slime.getChildByName('foam').getComponent(cc.Animation).resume();
        } else {
            this.node.getComponent(cc.Animation).play('kneadSlime');
            let color = DataConfig.getInstance().getColors();
            let foam = DataConfig.getInstance().getFoam();

            if (!color) {
                color = 'blue';
            }
            if (!foam) {
                foam = 'foam9';
            }
            let slime = this.node.getChildByName('slime')
            slime.getComponent(cc.Animation).play(`kneadSlime_${color}`);
            slime.getChildByName('foam').getComponent(cc.Animation).play(`${foam}`);
            
        }
        
    }
    pasueAction() {
        this.node.getComponent(cc.AudioSource).stop();
        cc.director.getActionManager().pauseTarget(cc.find("Canvas"));
        cc.director.getActionManager().pauseTarget(this.actionNode);
        this.node.getComponent(cc.Animation).pause();
        let slime = this.node.getChildByName('slime')
        slime.getComponent(cc.Animation).pause();
        slime.getChildByName('foam').getComponent(cc.Animation).pause();
    }
    getIsFinish() {
        return this.isFinish;
    }
}
