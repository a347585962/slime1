import nice from "./niceFS";
import TipManager from "./TipManagerFS";

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
export default class Playslime extends cc.Component {

    
    @property(cc.AudioClip)
    done:cc.AudioClip = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private action1:cc.Node = null;
    private action2:cc.Node = null;
    private action3:cc.Node = null;
    private curNode:cc.Node = null;
    private isTouch = false;
    private curTime = 0;
    start () {
        this.action1 = this.node.getChildByName("action1");
        this.action2 = this.node.getChildByName("action2");
        this.action3 = this.node.getChildByName("action3");
        this.curNode = this.action1;
        let moveNode = this.node.getChildByName("touchNode")
        moveNode.on(cc.Node.EventType.TOUCH_START,this.startAction,this);
        moveNode.on(cc.Node.EventType.TOUCH_END,this.stopAction,this);
        moveNode.on(cc.Node.EventType.TOUCH_CANCEL,this.stopAction,this);
    }
    private isAction = false;
    startAction(event)
    {
        this.node.getComponent(cc.AudioSource).enabled = true;
        this.node.getChildByName("heartFullColor").active = true;
        this.isTouch = true;
        if(this.isStop){
            this.curNode.getChildByName("left").resumeAllActions();
            this.curNode.getChildByName("right").resumeAllActions();
            this.curNode.getChildByName("slime").resumeAllActions();
        }else
        {
            this.Start1();
        this.Start2();
        this.Start3();
        }
    }
    private isStop = false;
    stopAction(event)
    {
        this.isTouch = false;
        this.node.getComponent(cc.AudioSource).enabled = false;
        this.curNode.getChildByName("left").pauseAllActions();
        this.curNode.getChildByName("right").pauseAllActions();
        this.curNode.getChildByName("slime").pauseAllActions();
        this.isStop = true;

    }
    Start1()
    {
        let left = this.action1.getChildByName("left");
        let right = this.action1.getChildByName("right");
        let slime = this.action1.getChildByName("slime");
        
        left.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5,30,0),cc.moveBy(0.5,-30,0))));
        right.runAction(cc.repeatForever(cc.sequence(
        cc.moveBy(0.4,-15,15),cc.callFunc(()=>{
            right.getChildByName("hand00").active = true;
            right.getChildByName("hand0").active = false;
        }),cc.delayTime(0.2),cc.callFunc(()=>{right.getChildByName("hand00").active = false;right.getChildByName("hand0").active = true;}),cc.moveBy(0.4,15,-15))));
        let s1 = cc.scaleTo(0.5,1.08,0.95);
           let s2 = cc.scaleTo(0.5,0.95,1.08);
         //  let s3 = cc.scaleTo(0.2,1.0,1.0);
           let action = cc.repeatForever(cc.sequence(s1,s2));
           slime.runAction(action);
    }
    Start2()
    {
        let left = this.action2.getChildByName("left");
        let right = this.action2.getChildByName("right");
        let slime = this.action2.getChildByName("slime");
        
        left.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5,8,15),cc.moveBy(0.5,-8,-15))));
        right.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5,-25,5),cc.moveBy(0.5,25,-5))));
        let s1 = cc.scaleTo(0.5,1.08,0.95);
           let s2 = cc.scaleTo(0.5,0.95,1.08);
         //  let s3 = cc.scaleTo(0.2,1.0,1.0);
           let action = cc.repeatForever(cc.sequence(s1,s2));
           slime.runAction(action);
    }
    Start3()
    {
        let left = this.action3.getChildByName("left");
        let right = this.action3.getChildByName("right");
        let slime = this.action3.getChildByName("slime");
        
        left.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5,15,8),cc.moveBy(0.5,-15,-8))));
        right.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5,-25,5),cc.moveBy(0.5,25,-5))));
        let s1 = cc.scaleTo(0.5,1.08,0.95);
           let s2 = cc.scaleTo(0.5,0.95,1.08);
         //  let s3 = cc.scaleTo(0.2,1.0,1.0);
           let action = cc.repeatForever(cc.sequence(s1,s2));
           slime.runAction(action);
    }

    private MixRound = 0;
    update (dt) {
        if(this.isTouch){
            this.curTime += dt;
            if(this.curTime >= 3){
                this.curTime = 0;
                if(this.curNode == this.action1){
                    this.curNode = this.action2;
                    this.action1.active = false;
                }
                else if(this.curNode == this.action2){
                    this.curNode = this.action3;
                    this.action2.active = false;
                }
                else if(this.curNode == this.action3){
                    this.curNode = this.action1;
                    this.action3.active = false;
                    this.MixRound += 1;
                    if(this.MixRound == 2){
                        let audio = cc.audioEngine.playEffect(this.done,false);
                        let btn_next = cc.find("Canvas/button/next")
                        btn_next.active = true;
                        btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
                    }
                }
                this.curNode.active = true;
                TipManager.getInstance().jumpTips();
            }
        }
    }
}
