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
const ActionType = cc.Enum({
    jump: 1,
    rotate: 2,
    
});

@ccclass
export default class ObjectAction extends cc.Component {
    @property
    delayTime: number = 0.0;
    @property
    delayTime2: number = 0.0;
    @property
    distance: number = 0.0;
    @property
    rotate: number = 0.0;
    @property({
        type : ActionType
    })
    action = ActionType.jump;
    onLoad() {
        this.showAction();
    }
    showAction() {
        switch (this.action) {
            case  ActionType.jump:
                this.node.runAction(
                    cc.repeatForever(
                    cc.sequence(
                        cc.delayTime(this.delayTime),
                        cc.moveBy(0.1, cc.v2(0, this.distance)),
                        cc.moveBy(0.1, cc.v2(0, -this.distance)),
                        cc.moveBy(0.1, cc.v2(0, this.distance)),
                        cc.moveBy(0.1,cc.v2(0,-this.distance)),
                        cc.delayTime(this.delayTime2)
                )))
                break;
            case  ActionType.rotate:
                this.node.runAction(
                    cc.repeatForever(
                    cc.sequence(
                        cc.delayTime(this.delayTime),
                        cc.rotateBy(0.1,this.rotate),
                        cc.rotateBy(0.1, -this.rotate),
                        cc.rotateBy(0.1,this.rotate),
                        cc.rotateBy(0.1,-this.rotate),
                        cc.delayTime(this.delayTime2)
                )))
                break;
            default:
                this.node.runAction(
                    cc.repeatForever(
                    cc.sequence(
                        cc.delayTime(this.delayTime),
                        cc.moveBy(0.1, cc.v2(0, this.distance)),
                        cc.moveBy(0.1, cc.v2(0, -this.distance)),
                        cc.moveBy(0.1, cc.v2(0, this.distance)),
                        cc.moveBy(0.1,cc.v2(0,-this.distance)),
                        cc.delayTime(this.delayTime2)
                )))
        }  
    }
}
