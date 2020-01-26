import MixComponent from "../common/Script/CombinedComponent/MixComponentFS";

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
export default class SpponTouchEvent extends cc.Component {
    @property(cc.Node)
    mixNode: cc.Node = null;
    spoonTouchStart() {
        this.node.parent.getChildByName('tipRotate').active = false;
        this.node.getChildByName('spoon0').active = false;
        this.mixNode.getComponent(MixComponent).startMix();
        let s1 = cc.scaleTo(0.5,1.05,0.95);
        let s2 = cc.scaleTo(0.5, 0.95, 1.05);
        this.mixNode.runAction(cc.repeatForever(cc.sequence(s1, s2)));
        this.mixNode.runAction(cc.repeatForever(cc.rotateBy(20, 360)));

    }
    spoonTouchEnd() {
        this.node.getChildByName('spoon0').active = true;
        this.mixNode.getComponent(MixComponent).stopMix();
        this.mixNode.stopAllActions();
    }
}
