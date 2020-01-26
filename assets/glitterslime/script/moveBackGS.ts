// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
enum Diretion {
    left,
    right,
    up,
    down
};
@ccclass
export default class NewClass extends cc.Component {

    @property({ type: cc.Vec2, tooltip: "终点坐标,默认屏幕外" })
    endPos: cc.Vec2 = null;
    @property()
    isOnLoad: boolean = true;
    @property({ type: cc.Enum(Diretion) })
    diretion: Diretion = Diretion.left;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    //动画执行完成的回调
    public actionCallBack: (
    ) => void;
    start() {
        if (this.isOnLoad)
            this.RunAction();
    }
    RunAction() {
        switch (this.diretion) {
            case Diretion.left:
                this.leftMove(); break;
            case Diretion.right:
                this.rightMove(); break;
            case Diretion.up:
                this.upMove(); break;
            case Diretion.down:
                this.downMove(); break;
        }
    };
    leftMove() {
        if (this.endPos == null) {
            let move = cc.moveBy(1, cc.v2(-900, 0));
            let func = cc.callFunc(this.actionCallBack, this);
            let seq = cc.sequence(move, func);
            this.node.runAction(seq);
        }
        else {
            let move = cc.moveTo(1, this.endPos);
            let func = cc.callFunc(this.actionCallBack, this);
            let seq = cc.sequence(move, func);
            this.node.runAction(seq);
        }

    };
    rightMove() {
        if (this.endPos == null) {
            let move = cc.moveBy(1, cc.v2(900, 0));
            let func = cc.callFunc(this.actionCallBack, this);
            let seq = cc.sequence(move, func);
            this.node.runAction(seq);
        }
        else {
            let move = cc.moveTo(1, this.endPos);
            let func = cc.callFunc(this.actionCallBack, this);
            let seq = cc.sequence(move, func);
            this.node.runAction(seq);
        }
    };
    upMove() {
        if (this.endPos == null) {
            let move = cc.moveBy(1, cc.v2(0, -900));
            let func = cc.callFunc(this.actionCallBack, this);
            let seq = cc.sequence(move, func);
            this.node.runAction(seq);
        }
        else {
            let move = cc.moveTo(1, this.endPos);
            let func = cc.callFunc(this.actionCallBack, this);
            let seq = cc.sequence(move, func);
            this.node.runAction(seq);
        }
    };
    downMove() {
        if (this.endPos == null) {
            let move = cc.moveBy(1, cc.v2(0, 900));
            let func = cc.callFunc(this.actionCallBack, this);
            let seq = cc.sequence(move, func);
            this.node.runAction(seq);
        }
        else {
            let move = cc.moveTo(1, this.endPos);
            let func = cc.callFunc(this.actionCallBack, this);
            let seq = cc.sequence(move, func);
            this.node.runAction(seq);
        }
    };
    // update (dt) {}
}
