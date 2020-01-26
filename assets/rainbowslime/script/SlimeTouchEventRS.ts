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
export default class SlimeTouchEvent extends cc.Component {
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
    onTouchStart(event) {
        cc.find('Canvas/hint').active = false;
        let animState = this.node.getComponent(cc.Animation).getAnimationState('coilSlime');
        if (animState.isPlaying) {
            this.node.getComponent(cc.Animation).pause();
        }
        console.log(animState.isPaused);
        if (animState.isPaused) {
            this.node.getComponent(cc.Animation).resume();
        } else {
            this.node.getComponent(cc.Animation).play('coilSlime');
        }   
    }
    //触摸移动；
    onTouchMove(event) {
        cc.find('Canvas/hint').active = false;
    }
    onTouchEnd() {
        this._touchEnd();
    }
    onTouchCancle(){
        this._touchEnd();
    }
    private _touchEnd() {
        this.node.getComponent(cc.Animation).pause();
    }
}
