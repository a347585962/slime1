import MoveIn from "../common/Script/MoveInHC";
import SlimeTouchEvent from "./SlimeTouchEventHC";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperHC";
import TransitionScene from "../common/Script/codebase/TransitionSceneHC";

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
export default class PlayController extends cc.Component {
    @property(cc.Prefab)
    bubblePre: cc.Prefab = null;
    bubbleNum: number = 0;
    maxNum: number = 30;
    onLoad() {
        // let btn_home = CocosHelper.findNode(cc.Canvas.instance.node, "btn_home");
        // CocosHelper.showBackOut(btn_home, CocosHelper.ShowDirection.show_from_left);
        // let btn_moregame = CocosHelper.findNode(cc.Canvas.instance.node, "btn_moregame");
        // CocosHelper.showBackOut(btn_moregame, CocosHelper.ShowDirection.show_from_right);
        // let btn_back = CocosHelper.findNode(cc.Canvas.instance.node, "btn_back");
        // CocosHelper.showBackOut(btn_back, CocosHelper.ShowDirection.show_from_left);

        cc.find('slime/mould', this.node).getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('slime').getComponent(SlimeTouchEvent).registerTouchEvent();
            this.node.getChildByName('arrow_bottom').active = true;
        }.bind(this);
        cc.find('Canvas/btn_reset').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/btn_reset').getComponent(cc.Button).interactable = true;
        }.bind(this)
    }
    createBubble() {
        let node = cc.instantiate(this.bubblePre);
        node.active = true;
        cc.find('Canvas/slime').addChild(node);
        node.name = 'bubbleCopy'
        let y = Math.random() * (cc.find('Canvas/slime').height - 300) - ((cc.find('Canvas/slime').height - 300) / 2);
        let x = Math.random() * (cc.find('Canvas/slime').width - 300) - ((cc.find('Canvas/slime').width - 300) / 2);
        node.setPosition(cc.v2(x, y));
        node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            node.destroy();
            this.createBubble();
        }.bind(this))));
        if (this.bubbleNum > 10 && this.bubbleNum <= 20&&cc.find('Canvas/slime').childrenCount<9) {
            this.node.runAction(cc.sequence(cc.delayTime(0.5),
                cc.callFunc(function () {
                    let node1 = cc.instantiate(this.bubblePre);
                    node1.active = true;
                    cc.find('Canvas/slime').addChild(node1);
                    node1.name = 'bubbleCopy'
                    let y1 = Math.random() * (cc.find('Canvas/slime').height - 300) - ((cc.find('Canvas/slime').height - 300) / 2);
                    let x1 = Math.random() * (cc.find('Canvas/slime').width - 300) - ((cc.find('Canvas/slime').width - 300) / 2);
                    node1.setPosition(cc.v2(x1, y1));
                    node1.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                        node1.destroy();
                    }.bind(this))))
                }.bind(this))))
        }else if (this.bubbleNum > 20&&cc.find('Canvas/slime').childrenCount<10) {
            this.node.runAction(cc.sequence(cc.delayTime(0.3),
            cc.callFunc(function () {
                let node1 = cc.instantiate(this.bubblePre);
                cc.find('Canvas/slime').addChild(node1);
                node1.active = true;
                node1.name = 'bubbleCopy'
                let y1 = Math.random() * (cc.find('Canvas/slime').height - 300) - ((cc.find('Canvas/slime').height - 300) / 2);
                let x1 = Math.random() * (cc.find('Canvas/slime').width - 300) - ((cc.find('Canvas/slime').width - 300) / 2);
                node1.setPosition(cc.v2(x1, y1));
                node1.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                    node1.destroy();
                }.bind(this))))
            }.bind(this))))
            this.node.runAction(cc.sequence(cc.delayTime(0.6),
                cc.callFunc(function () {
                    let node2 = cc.instantiate(this.bubblePre);
                    node2.active = true;
                    cc.find('Canvas/slime').addChild(node2);
                    node2.name = 'bubbleCopy'
                    let y2 = Math.random() * (cc.find('Canvas/slime').height - 300) - ((cc.find('Canvas/slime').height - 300) / 2);
                    let x2 = Math.random() * (cc.find('Canvas/slime').width - 300) - ((cc.find('Canvas/slime').width - 300) / 2);
                    node2.setPosition(cc.v2(x2, y2));
                    node2.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                        node2.destroy();
                    }.bind(this))))
                }.bind(this))))
        }
    }
    reset() {
        cc.director.loadScene('playSlimeHC');
    }
    touchBackBtn() {
        TransitionScene.changeScene('chooseHC');
    }
}
