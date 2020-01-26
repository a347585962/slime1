import FuseController from "./FuseControllerRS";

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
export default class HandMoveEvent extends cc.Component {
    @property(cc.Node)
    moveNode: cc.Node = null;
    nodePos: cc.Vec2 = null;
    initPos: cc.Vec2 = null;
    isFinish: boolean = null;
    init(){
        this.nodePos = this.node.getPosition();
        this.initPos = this.node.getPosition();
        this.registerTouchEvent();
        this.isFinish = false;
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
    }
    //触摸移动；
    onTouchMove(event) {
        var self = this;
        var touches = event.getTouches();
        //触摸刚开始的位置
        var oldPos = self.node.convertToNodeSpaceAR(touches[0].getStartLocation());
        //触摸时不断变更的位置
        var newPos = self.node.convertToNodeSpaceAR(touches[0].getLocation());
        var subPos = null;
        if (this.node.name == 'handLeft') {
            subPos = newPos.sub(oldPos);
        } else {
            subPos = oldPos.sub(newPos);
        }
        self.node.x = self.nodePos.x - subPos.x;

        var minX = 0; //最小X坐标；
        var maxX = 0;
        var nPos = self.node.getPosition();
        if (this.node.name == 'handLeft') {
            maxX = -180;
            minX = -300;
            if (nPos.x < minX) {
                nPos.x = minX;
            };
            if (nPos.x > maxX) {
                nPos.x = maxX;
                this.isFinish = true;
                cc.find('Canvas/arrow_left').active = false;
                let leftFinish = cc.find('Canvas/handLeft').getComponent(HandMoveEvent).getIsFinish();
                let rightFinish = cc.find('Canvas/handRight').getComponent(HandMoveEvent).getIsFinish();
                cc.find('Canvas').getComponent(FuseController).moveFinish(leftFinish, rightFinish);
                cc.find('Canvas/slime').getComponent(cc.AudioSource).play();
                this.destroyTouchEvent();  
            };
        } else {
            maxX = 300;
            minX = 180;
            if (nPos.x < minX) {
                nPos.x = minX;
                this.isFinish = true;
                cc.find('Canvas/arrow_right').active = false;
                let leftFinish = cc.find('Canvas/handLeft').getComponent(HandMoveEvent).getIsFinish();
                let rightFinish = cc.find('Canvas/handRight').getComponent(HandMoveEvent).getIsFinish();
                cc.find('Canvas').getComponent(FuseController).moveFinish(leftFinish, rightFinish);
                cc.find('Canvas/slime').getComponent(cc.AudioSource).play();
                this.destroyTouchEvent();  
            };
            if (nPos.x > maxX) {
                nPos.x = maxX;
            };
        }
        //节点实时坐标；
        self.node.setPosition(nPos);
        this.moveNode.setPosition(nPos)
    }
    onTouchEnd() {
        this._touchEnd();
    }
    onTouchCancle(){
        this._touchEnd();
    }
    private _touchEnd() {
        this.nodePos = this.node.getPosition();
    }
    getIsFinish() {
        return this.isFinish;
    }
}
