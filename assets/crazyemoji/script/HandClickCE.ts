import MoveIn from "../common/Script/compoent/MoveInCE";
import HandTouchEvent from "./HandTouchEventCE";
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
export default class HandClick extends cc.Component {

    @property(cc.Node)
    moveNode: cc.Node = null;
    @property
    isLeft: boolean = true;
    @property(cc.Node)
    showNode: cc.Node = null;
    @property(cc.Node)
    nextNode: cc.Node = null;
    handClick(event, data) {
        cc.find('Canvas/slime').getComponent(cc.AudioSource).play();
        if (cc.find('Canvas/tipClick')) {
            cc.find('Canvas/tipClick').destroy();
        }
        let x = -30;
        if (this.isLeft) {
            x = 30;
        }
        this.moveNode.runAction(cc.moveBy(0.2, cc.v2(x, 0)));
            this.node.runAction(cc.sequence(
                cc.moveBy(0.2, cc.v2(x, 0)),
                cc.callFunc(function () {
                    cc.find('Canvas/slime/slime0/slime0').active = true;
                    this.showNode.parent.children.forEach(child => {
                        child.active = false;
                    })
                    this.showNode.active = true;
                    this.node.parent.active = false;
                    this.showNextHand();
                    
                }.bind(this))
            ))
    }
    showNextHand() {
        if (this.nextNode) {
            let x = 300;
            if (this.isLeft) {
                x = -300;
            }
            this.nextNode.getChildByName('hand0').runAction(cc.moveBy(0.5, cc.v2(x, 0)));
            this.nextNode.getChildByName('hand1').runAction(
                cc.sequence(
                    cc.moveBy(0.5, cc.v2(x, 0)),
                    cc.callFunc(function () {
                        cc.find('Canvas/slime/slime0/slime0').active = false;
                        this.nextNode.getChildByName('slime').active = true;
                        this.nextNode.getChildByName('hand1').getComponent(cc.Button).interactable = true;
                    }.bind(this))
                ));
               
        } else {
            TipManager.getInstance().jumpTips();
            cc.find('Canvas/finger').active = true;
            cc.find('Canvas/hand').getComponent(HandTouchEvent).init(cc.find('Canvas/slime'));
        }
       
    }
}
